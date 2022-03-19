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