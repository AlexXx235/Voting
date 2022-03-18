module.exports = class StatusCard {
    constructor(html) {
        this.body = this.getElement(html, '.status-card__body');
        this.bulb = this.getElement(html, '.bulb');
    }

    enable() {
        this.setGreenBulb();
    }

    disable() {
        this.setRedBulb();
    }

    getElement(html, sel) {
        const element = html.querySelector(sel);
        if (element) return element;
        else throw Error(`Can not find '${sel}'`);
    }

    setGreenBulb() {
        this.bulb.style.backgroundColor = 'green';
    }

    setRedBulb() {
        this.bulb.style.backgroundColor = 'red';
    }
}
