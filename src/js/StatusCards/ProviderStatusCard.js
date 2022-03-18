const StatusCard = require('./StatusCard.js');

module.exports = class ProviderStatusCard extends StatusCard {
    constructor(html) {
        super(html);
        this.availability = this.getElement(html, '#metamask-availability');
        this.version = this.getElement(html, '#metamask-version');
    }

    setDetectedStatus(version) {
        this.availability.innerText = 'MetaMask installed';
        this.version.innerText = `Version: ${version}`;
        //this.enable();
    }

    setNotDetectedStatus() {
        this.availability.innerText = 'MetaMask is not detected';
        this.version.innerText = '';
        //this.disable();
    }
}