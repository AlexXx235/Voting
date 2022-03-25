module.exports = class StateSwitch {
    constructor(app, conditions) {
        this.app = app;
        this.conditions = conditions;
        this.state = {
            rpcConnection: false,
            correctNetwork: false,
            accountsAccess: false,
        }
        this.isReady = false;
        this.user = app.user;
    }

    onConnect() {
        this.state.rpcConnection = true;
        this.app.trigger('connect');

        if (this.state.correctNetwork) {
            this.app.trigger('networkOn');
        }
    }

    onDisconnect() {
        void this.app.checkCurrentNetwork();

        this.becomeNotReadyIfReady();
        this.state.rpcConnection = false;
        this.app.trigger('disconnect');
        this.app.trigger('networkOff');
    }

    onAccountsChanged(accounts = []) {
        if (accounts.length === 0) {
            this.becomeNotReadyIfReady();
            this.user.address = null;
            this.state.accountsAccess = false;
            this.app.trigger('accountsOff');
        } else if (accounts[0].toLowerCase() !== this.user.address.toLowerCase()) {
            this.user.address = accounts[0];
            this.state.accountsAccess = true;
            this.app.trigger('accountsOn', accounts);
            this.getReadyIfPossible();
        }
    }

    onChainChanged(chainId) {
        if (chainId === this.conditions.chainId) {
            this.state.correctNetwork = true;
            this.app.trigger('correctNetwork', chainId);
            if (this.state.rpcConnection) {
                this.app.trigger('networkOn');
            }
            this.getReadyIfPossible();
        } else {
            this.becomeNotReadyIfReady()
            this.state.correctNetwork = false;
            this.app.trigger('networkOff');
            this.app.trigger('wrongNetwork', chainId);
        }
    }

    becomeNotReadyIfReady() {
        if (this.isReady) {
            this.isReady = false;
            this.app.trigger('notReady');
        }
    }

    getReadyIfPossible() {
        if (this.allConditionsMet() && !this.isReady) {
            this.app.trigger('ready');
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