const VotingContract = require('./VotingContract.js');
const StateSwitch = require('./StateSwitch.js');
const eventEmitter = require('./lib/EventEmitter.js');


module.exports = class App {
    constructor(provider, contractData) {
        this.user = {
            address: '',
            isCandidate: false,
            voted: false
        };
        this.provider = provider;
        this.state = new StateSwitch(this, {chainId: contractData.chainId});
        this.eventEmitter = eventEmitter;
        this.contract = new VotingContract(this, contractData.abi, contractData.address);
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

    once(eventName, handler) {
        this.eventEmitter.once(eventName, handler);
    }

    off(eventName, handler) {
        this.eventEmitter.off(eventName, handler);
    }

    trigger(eventName, ...args) {
        this.eventEmitter.trigger(eventName, ...args);
    }
}