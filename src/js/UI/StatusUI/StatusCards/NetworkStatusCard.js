const StatusCard = require('./StatusCard.js');

const networks = {
    '0x1': 'Main',
    '0x3': 'Ropsten',
    '0x4': 'Rinkeby',
    '0x539': 'Ganache'
};

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
        this.network.innerText = `${networks[chainId] || 'Unknown Network'} (Correct network)`;
        this.chain.innerText = `ChainId: ${chainId}`;
    }

    setWrongNetworkStatus(chainId) {
        this.network.innerText = `${networks[chainId] || 'Unknown Network'} (Wrong network)`;
        this.chain.innerText = `ChainId: ${chainId}`;
    }
}