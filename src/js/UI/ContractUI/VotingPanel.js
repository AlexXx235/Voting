const UiUtils = require("../UiUtils");
const eventTmp = $('#event-tmp').content.firstElementChild;

module.exports = class VotingPanel {
    constructor(html) {
        this.panel = html;
        this.participatingStatus = UiUtils.getElement(html, '#participating-status');
        this.voted = UiUtils.getElement(html, '#voted');
        this.votes = UiUtils.getElement(html, '#votes');
        this.joinBtn = UiUtils.getElement(html, '#join-btn');
        this.candidatesList = UiUtils.getElement(html, '.candidates-list__body');
        this.transactionsList = UiUtils.getElement(document, '#transactions-list');
        this.eventsLits = UiUtils.getElement(document, '#events-list');
        this.candidateTmp = UiUtils.getElement(document, '#candidate-template').content.firstElementChild;
    }

    enable() {
        this.panel.classList.remove('visually-hidden');
    }

    disable() {
        this.panel.classList.add('visually-hidden');
    }

    addTransactionRecord(record) {
        this.transactionsList.prepend(record);
    }

    addEventRecord(title, data) {
        const record = eventTmp.cloneNode(true);
        record.querySelector('.event__name').innerText = title;
        record.querySelector('.event__data').innerText = data;
        this.eventsLits.prepend(record);
    }

    setCandidatesList(candidates, voted) {
        this.candidatesList.innerHTML = '';

        candidates.forEach(candidate => {
            const item = this.candidateTmp.cloneNode(true);
            item.dataset.address = candidate.addr;
            item.querySelector('.candidate__address').innerText = candidate.addr;
            item.querySelector('.candidate__votes').innerText = `Votes: ${candidate.votes}`;
            if (!voted) {
                item.querySelector('.candidate__vote-btn').disabled = false;
            }
            this.candidatesList.prepend(item);
        });
    }

    setVotedStatus(voted) {
        if (voted) {
            this.voted.innerText = "You have already voted";
            this.disableVoteButtons();
        } else {
            this.voted.innerText = "You have not voted yet";
            this.enableVoteButtons();
        }
    }

    setVotes(votes) {
        this.votes.innerText = `Votes: ${votes}`;
    }

    hideVotes() {
        this.votes.innerText = ``;
    }

    isCandidate() {
        this.participatingStatus.innerText = "You are a candidate";
        this.joinBtn.disabled = true;
    }

    isNotCandidate() {
        this.participatingStatus.innerText = "You are not a candidate";
        this.joinBtn.disabled = false;
        this.hideVotes();
    }

    enableVoteButtons() {
        this.panel.querySelectorAll('.candidate__vote-btn').forEach(btn => btn.disabled = false);
    }

    disableVoteButtons() {
        this.panel.querySelectorAll('.candidate__vote-btn').forEach(btn => btn.disabled = true);
    }
}