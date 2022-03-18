const truffleContract = require('@truffle/contract');

module.exports = class VotingContract {
    constructor(abi, address) {
        this.contract = truffleContract({
            abi, address
        });
        this.address = address;
    }

    setProvider(provider) {
        this.contract.setProvider(provider);
    }

    getInstance() {

    }
}