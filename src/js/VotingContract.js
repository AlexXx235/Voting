const ethers = require('ethers');

module.exports = class VotingContract {
    constructor(app, abi, address) {
        this.abi = abi;
        this.address = address;

        this.app = app;
        this.user = app.user;

        this.subscribe(app);
    }

    subscribe(app) {
        app.once('correctNetwork', this.initInstance.bind(this));
    }

    initInstance() {
        this.instance = new ethers.Contract(
            this.address,
            this.abi,
            new ethers.providers.Web3Provider(this.app.provider).getSigner()
        );

        this.instance.provider.on('pending', () => console.log('pending event'));
        this.instance.on('Vote', (voter, candidate) => {
            this.app.trigger('vote', voter, candidate);
        });
        this.instance.on('Join', (address) => {
            this.app.trigger('join', address);
        });

        delete this.address;
        delete this.abi;
    }

    waitForTx(hash) {
        return this.instance.provider.waitForTransaction(hash);
    }

    participate() {
        this.instance.participate({from: this.user.address})
            .then((result) => {
                const hash = result.hash;
                this.app.trigger('joinPending', hash, this.user.address);
            })
            .catch(error => {
                if (error.code === 4001) {
                    console.log('user denied tx');
                } else {
                    console.error(error);
                }
            });
    }

    vote(address) {
        this.instance.vote(address, {from: this.user.address})
            .then((result) => {
                const hash = result.hash;
                this.app.trigger('votePending', hash, this.user.address, address);
            })
            .catch(error => {
                if (error.code === 4001) {
                    console.log('user denied tx');
                } else {
                    console.error(error);
                }
            });
    }

    isCandidate(address) {
        return this.instance.isCandidate(address);
    }

    voted(address) {
        return this.instance.voted(address);
    }

    getAllCandidates() {
        return this.instance.getAllCandidates();
    }

    async getCandidate(address) {
        const [found, index] = await this.instance.findCandidate(address);
        if (found) {
            return this.instance.candidates(index);
        } else {
            return null;
        }
    }

    async getVotes(address) {
        const candidate = await this.getCandidate(address);
        return candidate.votes;
    }
}