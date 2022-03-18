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
        this.becomeNotReadyIfReady();

        this.state.rpcConnection = false;
        this.context.trigger('disconnect');
        this.context.trigger('networkOff');
    }

    onAccountsChanged(accounts) {
        console.log(accounts);
        if (accounts.length === 0) {
            this.becomeNotReadyIfReady();
            this.state.accountsAccess = false;
            this.context.trigger('accountsOff');
        } else if (accounts[0] !== this.currentAccount) {
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
        Object.values(this.state).forEach(condition => {
            if (!condition) return false;
        });
        return true;
    }
}