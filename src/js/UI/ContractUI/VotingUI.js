const VotingPanel = require('./VotingPanel.js');
const TxRecordHandler = require('./TxRecordHandler.js');
const UiUtils = require('../UiUtils.js');

const txRecordTmp = $('#transaction-record-tmp').content.firstElementChild;

module.exports = class VotingUI {
    constructor(app) {
        this.user = app.user;
        this.app = app;
        this.votingPanel = new VotingPanel(document.querySelector('.app'));
        this.subscribe(app);
    }

    subscribe(app) {
        app.once('ready', this.updateCandidatesList.bind(this));
        app.on('joinPending', this.onJoinPending.bind(this));
        app.on('votePending', this.onVotePending.bind(this));
        app.on('join', this.onJoin.bind(this));
        app.on('vote', this.onVote.bind(this));
        app.on('ready', this.onReady.bind(this));
        app.on('notReady', this.onNotReady.bind(this));
        app.on('accountsOn', this.onAccountsOn.bind(this));
    }

    onJoinPending(hash, address) {
        const record = new TxRecordHandler(txRecordTmp.cloneNode(true));
        record.setTitle(UiUtils.getShortAddress(address) + ' joined');
        record.setPendingStatus();
        this.votingPanel.addTransactionRecord(record.html);
        this.app.contract.waitForTx(hash)
            .then(() => {
                record.setSuccessStatus();
            })
            .catch(error => {
               console.error(error);
               record.setFailedStatus();
            });
    }

    onVotePending(hash, userAddress, candidateAddress) {
        const record = new TxRecordHandler(txRecordTmp.cloneNode(true));
        record.setTitle(
            UiUtils.getShortAddress(userAddress) + ' voted for ' + UiUtils.getShortAddress(candidateAddress)
        );
        record.setPendingStatus();
        this.votingPanel.addTransactionRecord(record.html);
        this.app.contract.waitForTx(hash)
            .then(() => {
                record.setSuccessStatus();
            })
            .catch(error => {
                console.error(error);
                record.setFailedStatus();
            });
    }

    onVote(userAddress, candidateAddress) {
        this.votingPanel.addEventRecord('Vote', `address: ${userAddress}\ncandidate: ${candidateAddress}`);
        this.setVotedStatus(true);
        this.updateCandidatesList();
    }

    onJoin(userAddress) {
        this.votingPanel.addEventRecord('Join', `address: ${userAddress}`);
        this.setParticipatingStatus(true);
        this.setVotes(0);
    }

    onReady() {
        this.votingPanel.enable();
    }

    onNotReady() {
        this.votingPanel.disable();
    }

    onAccountsOn() {
        this.updateUserInfo();
        this.updateCandidatesList();
    }

    updateCandidatesList() {
        this.app.contract.getAllCandidates()
            .then(this.setCandidatesList.bind(this));
    }

    updateUserInfo() {
        this.updateVotedStatus();
        this.updateParticipatingStatus();
    }

    updateParticipatingStatus() {
        this.app.contract.isCandidate(this.user.address)
            .then(this.setParticipatingStatus.bind(this))
            .then(this.updateVotes.bind(this));
    }

    updateVotedStatus() {
        this.app.contract.voted(this.user.address)
            .then(this.setVotedStatus.bind(this));
    }

    updateVotes() {
        if (!this.user.isCandidate) return;

        this.app.contract.getVotes(this.user.address)
            .then(this.setVotes.bind(this));
    }

    setCandidatesList(candidates) {
        this.votingPanel.setCandidatesList(
            candidates.filter(candidate => candidate.addr.toLowerCase() !== this.user.address.toLowerCase()),
            this.user.voted
        );
    }

    setParticipatingStatus(isCandidate) {
        this.user.isCandidate = isCandidate;

        if (isCandidate) this.votingPanel.isCandidate();
        else this.votingPanel.isNotCandidate();
    }

    setVotedStatus(voted) {
        this.user.voted = voted;

        this.votingPanel.setVotedStatus(voted);
    }

    setVotes(votes) {
        this.votingPanel.setVotes(votes);
    }
}