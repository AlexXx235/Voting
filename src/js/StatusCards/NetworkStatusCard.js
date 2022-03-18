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