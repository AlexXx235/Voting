module.exports = class TxRecordHandler {
    constructor(html) {
        this.html = html;
    }

    setTitle(title) {
        this.html.querySelector('.transaction__title').innerText = title;
    }

    setHash(hash) {
        this.html.querySelector('.transaction__hash').innerText = `Hash: ${hash}`;
    }

    setPendingStatus(txLoadingTmp) {
        this.html.querySelector('.transaction__status-img').innerHTML = '';
        this.html.querySelector('.transaction__status-img').appendChild(
            txLoadingTmp.cloneNode(true)
        );

        this.html.querySelector('.transaction__status').innerText = "Pending...";

        this.count = 0;
        this.timer = setInterval(() =>{
            this.html.querySelector('.transaction__timer').innerText = this.count;
            ++this.count;
        }, 1000);
    }

    setSuccessStatus(txSuccessTmp) {
        this.html.querySelector('.transaction__status-img').innerHTML = ''
        this.html.querySelector('.transaction__status-img').appendChild(
            txSuccessTmp.cloneNode(true)
        );

        this.html.querySelector('.transaction__status').innerText = "Success";

        clearInterval(this.timer);
    }

    setFailedStatus(txFailTmp) {
        this.html.querySelector('.transaction__status-img').innerHTML = ''
        this.html.querySelector('.transaction__status-img').appendChild(
            txFailTmp.cloneNode(true)
        );

        this.html.querySelector('.transaction__status').innerText = "Fail";

        clearInterval(this.timer);
    }
}