module.exports = class VotingUI {
    constructor(html) {
        this.participatingStatus = this.getElement(html, '#participating-status');
        this.votes = this.getElement(html, '#votes');
    }

    getElement(html, sel) {
        const element = html.querySelector(sel);
        if (element) return element;
        else throw Error(`Can not find '${sel}'`);
    }
}