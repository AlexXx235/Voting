module.exports = class UiUtils {
    static getElement(html, sel) {
        const element = html.querySelector(sel);
        if (element) return element;
        else throw Error(`Can not find '${sel}'`);
    }

    static getShortAddress(address) {
        return address.slice(0, 6) + '...' + address.slice(-5);
    }
}