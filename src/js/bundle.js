(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/**
 * Returns a Promise that resolves to the value of window.ethereum if it is
 * set within the given timeout, or null.
 * The Promise will not reject, but an error will be thrown if invalid options
 * are provided.
 *
 * @param options - Options bag.
 * @param options.mustBeMetaMask - Whether to only look for MetaMask providers.
 * Default: false
 * @param options.silent - Whether to silence console errors. Does not affect
 * thrown errors. Default: false
 * @param options.timeout - Milliseconds to wait for 'ethereum#initialized' to
 * be dispatched. Default: 3000
 * @returns A Promise that resolves with the Provider if it is detected within
 * given timeout, otherwise null.
 */
function detectEthereumProvider({ mustBeMetaMask = false, silent = false, timeout = 3000, } = {}) {
    _validateInputs();
    let handled = false;
    return new Promise((resolve) => {
        if (window.ethereum) {
            handleEthereum();
        }
        else {
            window.addEventListener('ethereum#initialized', handleEthereum, { once: true });
            setTimeout(() => {
                handleEthereum();
            }, timeout);
        }
        function handleEthereum() {
            if (handled) {
                return;
            }
            handled = true;
            window.removeEventListener('ethereum#initialized', handleEthereum);
            const { ethereum } = window;
            if (ethereum && (!mustBeMetaMask || ethereum.isMetaMask)) {
                resolve(ethereum);
            }
            else {
                const message = mustBeMetaMask && ethereum
                    ? 'Non-MetaMask window.ethereum detected.'
                    : 'Unable to detect window.ethereum.';
                !silent && console.error('@metamask/detect-provider:', message);
                resolve(null);
            }
        }
    });
    function _validateInputs() {
        if (typeof mustBeMetaMask !== 'boolean') {
            throw new Error(`@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.`);
        }
        if (typeof silent !== 'boolean') {
            throw new Error(`@metamask/detect-provider: Expected option 'silent' to be a boolean.`);
        }
        if (typeof timeout !== 'number') {
            throw new Error(`@metamask/detect-provider: Expected option 'timeout' to be a number.`);
        }
    }
}
module.exports = detectEthereumProvider;

},{}],2:[function(require,module,exports){
// Exports App class after assigning mixin

const StateSwitch = require('./StateSwitch.js');
const eventEmitter = require('./lib/EventEmitter.js');

module.exports = class App {
    constructor(provider) {
        this.provider = provider;
        this.state = new StateSwitch(this, {chainId: '0x3'});
        this.eventEmitter = eventEmitter;
    }

    async start() {
        this.provider.on('connect', this.state.onConnect.bind(this.state));
        this.provider.on('disconnect', this.state.onDisconnect.bind(this.state));
        this.provider.on('chainChanged', this.state.onChainChanged.bind(this.state));
        this.provider.on('accountsChanged', this.state.onAccountsChanged.bind(this.state));

        const version = await this.provider.request({ method: 'web3_clientVersion' });
        const versionSlice = version.slice(version.indexOf('/v') + 2) || 'unknown';
        this.trigger('providerOn', versionSlice);
        this.checkNetworkStatus();
        await this.checkAccountsAccess();
    }

    checkNetworkStatus() {
        void this.checkNetworkConnection();
        void this.checkCurrentNetwork();
    }

    async checkNetworkConnection() {
        if (this.provider.isConnected()) {
            this.state.onConnect();
        }
    }

    async checkCurrentNetwork() {
        const chainId = await this.getCurrentChainId();
        this.state.onChainChanged(chainId);
    }

    async checkAccountsAccess() {
        const accounts = await this.provider.request({ method: 'eth_accounts' });
        this.state.onAccountsChanged(accounts);
    }

    getCurrentChainId() {
        return this.provider.request({ method: 'eth_chainId' });
    }

    on(eventName, handler) {
        this.eventEmitter.on(eventName, handler);
    }

    off(eventName, handler) {
        this.eventEmitter.off(eventName, handler);
    }

    trigger(eventName, ...args) {
        this.eventEmitter.trigger(eventName, ...args);
    }
}
},{"./StateSwitch.js":3,"./lib/EventEmitter.js":9}],3:[function(require,module,exports){
module.exports = class StateSwitch {
    constructor(context, conditions) {
        this.context = context;
        this.conditions = conditions;
        this.state = {
            rpcConnection: false,
            correctNetwork: false,
            accountsAccess: false,
        }
        this.isReady = false;
        this.currentAccount = null;
    }

    onConnect() {
        this.state.rpcConnection = true;
        this.context.trigger('connect');

        if (this.state.correctNetwork) {
            this.context.trigger('networkOn');
        }
    }

    onDisconnect() {
        void this.context.checkCurrentNetwork();

        this.becomeNotReadyIfReady();
        this.state.rpcConnection = false;
        this.context.trigger('disconnect');
        this.context.trigger('networkOff');
    }

    onAccountsChanged(accounts) {
        console.log(accounts);
        console.log(this);
        if (accounts.length === 0) {
            this.becomeNotReadyIfReady();
            this.currentAccount = null;
            this.state.accountsAccess = false;
            this.context.trigger('accountsOff');
        } else if (accounts[0] !== this.currentAccount) {
            this.currentAccount = accounts[0];
            this.state.accountsAccess = true;
            this.context.trigger('accountsOn', accounts);
            this.getReadyIfPossible();
        }
    }

    onChainChanged(chainId) {
        if (chainId === this.conditions.chainId) {
            this.state.correctNetwork = true;
            this.context.trigger('correctNetwork', chainId);
            if (this.state.rpcConnection) {
                this.context.trigger('networkOn');
            }
            this.getReadyIfPossible();
        } else {
            this.becomeNotReadyIfReady()
            this.state.correctNetwork = false;
            this.context.trigger('networkOff');
            this.context.trigger('wrongNetwork', chainId);
        }
    }

    becomeNotReadyIfReady() {
        if (this.isReady) {
            this.isReady = false;
            this.context.trigger('notReady');
        }
    }

    getReadyIfPossible() {
        if (this.allConditionsMet() && !this.isReady) {
            this.context.trigger('ready');
            this.isReady = true;
        }
    }

    allConditionsMet() {
        for (const condition of Object.values(this.state)) {
            if (!condition) return false;
        }
        return true;
    }
}
},{}],4:[function(require,module,exports){
const StatusCard = require('./StatusCard.js');

module.exports = class AccountsStatusCard extends StatusCard {
    constructor(html) {
        super(html);
        this.table = this.getElement(html, '.accounts-table');
        this.requestingRow = this.getElement(html, '.accounts-requesting-row');
    }

    fillAccountsTable(accounts) {
        this.table.innerHTML = '';
        const rowTmp = document.getElementById('account-record-tmp').content.firstElementChild;
        accounts.forEach((account, index) => {
            const row = rowTmp.cloneNode(true);
            row.querySelector('.accounts-table__address p').innerText = account;
            row.querySelector('.accounts-table__balance p').innerText = 'IDK';
            if (index === 0) {
                row.querySelector('.accounts-table__address p').classList.add('bold');
                row.querySelector('.accounts-table__balance p').classList.add('bold');
            }
            this.table.prepend(row);
        })
    }

    showRequestingRow() {
        this.table.innerHTML = '';
        this.requestingRow.classList.remove('visually-hidden');
    }

    hideRequestingRow() {
        this.requestingRow.classList.add('visually-hidden')
    }
}
},{"./StatusCard.js":7}],5:[function(require,module,exports){
const StatusCard = require('./StatusCard.js');

module.exports = class NetworkStatusCard extends StatusCard {
    constructor(html) {
        super(html);
        this.rpcConnection = this.getElement(html, '#rpc-connection');
        this.network = this.getElement(html, '#network');
        this.chain = this.getElement(html, '#chain');
    }

    setConnectedStatus() {
        this.rpcConnection.innerText = "JSON-RPC connection established";
    }

    setNotConnectedStatus() {
        this.rpcConnection.innerText = "No JSON-RPC connection";
    }

    setCorrectNetworkStatus(chainId) {
        this.network.innerText = 'Correct';
        this.chain.innerText = chainId;
    }

    setWrongNetworkStatus(chainId) {
        this.network.innerText = 'Wrong';
        this.chain.innerText = chainId;
    }
}
},{"./StatusCard.js":7}],6:[function(require,module,exports){
const StatusCard = require('./StatusCard.js');

module.exports = class ProviderStatusCard extends StatusCard {
    constructor(html) {
        super(html);
        this.availability = this.getElement(html, '#metamask-availability');
        this.version = this.getElement(html, '#metamask-version');
    }

    setDetectedStatus(version) {
        this.availability.innerText = 'MetaMask installed';
        this.version.innerText = `Version: ${version}`;
        //this.enable();
    }

    setNotDetectedStatus() {
        this.availability.innerText = 'MetaMask is not detected';
        this.version.innerText = '';
        //this.disable();
    }
}
},{"./StatusCard.js":7}],7:[function(require,module,exports){
module.exports = class StatusCard {
    constructor(html) {
        this.body = this.getElement(html, '.status-card__body');
        this.bulb = this.getElement(html, '.bulb');
    }

    enable() {
        this.setGreenBulb();
    }

    disable() {
        this.setRedBulb();
    }

    getElement(html, sel) {
        const element = html.querySelector(sel);
        if (element) return element;
        else throw Error(`Can not find '${sel}'`);
    }

    setGreenBulb() {
        this.bulb.style.backgroundColor = 'green';
    }

    setRedBulb() {
        this.bulb.style.backgroundColor = 'red';
    }
}

},{}],8:[function(require,module,exports){
const ProviderCard = require('./StatusCards/ProviderStatusCard.js');
const NetworkCard = require('./StatusCards/NetworkStatusCard.js');
const AccountsCard = require('./StatusCards/AccountsStatusCard.js');

module.exports = class UI {
    static instance;

    constructor(app) {
        if (UI.instance) {
            return UI.instance;
        }

        this.providerCard = new ProviderCard(document.getElementById('provider-card'));
        this.networkCard = new NetworkCard(document.getElementById('network-card'));
        this.accountsCard = new AccountsCard(document.getElementById('accounts-card'));
        this.subscribe(app);
        UI.instance = this;
    }

    subscribe(app) {
        app.on('providerOn', this.onProviderOn);
        app.on('connect', this.onConnect);
        app.on('disconnect', this.onDisconnect);
        app.on('correctNetwork', this.onCorrectNetwork);
        app.on('wrongNetwork', this.onWrongNetwork);
        app.on('networkOn', this.onNetworkOn);
        app.on('networkOff', this.onNetworkOff);
        app.on('accountsOn', this.onAccountsOn);
        app.on('accountsOff', this.onAccountsOff);
        app.on('ready', this.onReady);
        app.on('notReady', this.onNotReady);
    }

    onConnect() {
        UI.instance.networkCard.rpcConnection.innerText = 'JSON-RPC connection established';
    }

    onDisconnect() {
        UI.instance.networkCard.rpcConnection.innerText = 'No JSON-RPC connection';
    }

    onProviderOn(version) {
        UI.instance.providerCard.setDetectedStatus(version);
        UI.instance.providerCard.enable();
    }

    onCorrectNetwork(chainId) {
        UI.instance.networkCard.setCorrectNetworkStatus(chainId);
    }

    onWrongNetwork(chainId) {
        UI.instance.networkCard.setWrongNetworkStatus(chainId);
    }

    onNetworkOn() {
        UI.instance.networkCard.enable();
    }

    onNetworkOff() {
        UI.instance.networkCard.disable();
    }

    onAccountsOn(accounts) {
        console.log('onAccountsOn');
        UI.instance.accountsCard.enable();
        UI.instance.accountsCard.hideRequestingRow();
        UI.instance.accountsCard.fillAccountsTable(accounts);
    }

    onAccountsOff() {
        console.log('onAccountsOff');
        UI.instance.accountsCard.disable();
        UI.instance.accountsCard.showRequestingRow();
    }

    onReady() {
        console.log('Ready');
    }

    onNotReady() {
        console.log('Not ready');
    }
}
},{"./StatusCards/AccountsStatusCard.js":4,"./StatusCards/NetworkStatusCard.js":5,"./StatusCards/ProviderStatusCard.js":6}],9:[function(require,module,exports){
module.exports = {
    on(eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {};
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler);

    },

    off(eventName, handler) {
        let handlers = this._eventHandlers && this._eventHandlers[eventName];
        if (!handlers) return;
        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
                handlers.splice(i--, 1);
            }
        }
    },

    trigger(eventName, ...args) {
        if (!this._eventHandlers || !this._eventHandlers[eventName]) {
            return;
        }

        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
}
},{}],10:[function(require,module,exports){
const App = require('./App.js');
const UI = require('./UI.js');

let provider;
let app;
let ui;

const detectMetaMask = require('@metamask/detect-provider');
detectMetaMask()
    .then(receivedProvider => {
        provider = receivedProvider;
       if (provider && provider.isMetaMask) {
           app = new App(provider);
           ui = new UI(app);
           void app.start();
       } else {
           window.alert('Please install MetaMask and reload the page!');
       }
    })
    .catch(error => {
        console.log("App start failed");
        console.error(error);
    });

document.querySelector('.accounts-requesting-row__btn').addEventListener('click', () => {
    provider
        .request({ method: 'eth_requestAccounts'})
        .then(app.state.onAccountsChanged.bind(app.state))
        .catch((err) => {
            if (err.code === 4001) {
                console.log('Please connect to MetaMask.');
            } else {
                console.error(err);
            }
        });
})
},{"./App.js":2,"./UI.js":8,"@metamask/detect-provider":1}]},{},[10]);
