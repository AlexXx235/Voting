const ProviderCard = require('./StatusCards/ProviderStatusCard.js');
const NetworkCard = require('./StatusCards/NetworkStatusCard.js');
const AccountsCard = require('./StatusCards/AccountsStatusCard.js');

module.exports = class UI {
    constructor(app) {
        this.providerCard = new ProviderCard(document.getElementById('provider-card'));
        this.networkCard = new NetworkCard(document.getElementById('network-card'));
        this.accountsCard = new AccountsCard(document.getElementById('accounts-card'));
        this.subscribe(app);
    }

    subscribe(app) {
        app.on('providerOn', this.onProviderOn.bind(this));
        app.on('connect', this.onConnect.bind(this));
        app.on('disconnect', this.onDisconnect.bind(this));
        app.on('correctNetwork', this.onCorrectNetwork.bind(this));
        app.on('wrongNetwork', this.onWrongNetwork.bind(this));
        app.on('networkOn', this.onNetworkOn.bind(this));
        app.on('networkOff', this.onNetworkOff.bind(this));
        app.on('accountsOn', this.onAccountsOn.bind(this));
        app.on('accountsOff', this.onAccountsOff.bind(this));
    }

    onConnect() {
        this.networkCard.setConnectedStatus();
    }

    onDisconnect() {
        this.networkCard.setNotConnectedStatus();
    }

    onProviderOn(version) {
        this.providerCard.setDetectedStatus(version);
        this.providerCard.enable();
    }

    onCorrectNetwork(chainId) {
        this.networkCard.setCorrectNetworkStatus(chainId);
    }

    onWrongNetwork(chainId) {
        this.networkCard.setWrongNetworkStatus(chainId);
    }

    onNetworkOn() {
        this.networkCard.enable();
    }

    onNetworkOff() {
        this.networkCard.disable();
    }

    onAccountsOn(accounts) {
        this.accountsCard.enable();
        this.accountsCard.hideRequestingRow();
        this.accountsCard.fillAccountsTable(accounts);
    }

    onAccountsOff() {
        this.accountsCard.disable();
        this.accountsCard.showRequestingRow();
    }
}