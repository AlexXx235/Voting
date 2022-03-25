const StatusCard = require('./StatusCard.js');

module.exports = class AccountsStatusCard extends StatusCard {
    constructor(html) {
        super(html);
        this.table = this.getElement(html, '.accounts-table');
        this.requestingRow = this.getElement(html, '.accounts-requesting-row');
    }

    fillAccountsTable(accounts) {
        this.table.innerHTML = '';
        const rowTmp = document.getElementById('account-record-tmp').content.firstElementChild;
        accounts.forEach((account, index) => {
            const row = rowTmp.cloneNode(true);
            row.querySelector('.accounts-table__address p').innerText = account;
            if (index === 0) {
                row.querySelector('.accounts-table__address p').classList.add('bold');
            }
            this.table.prepend(row);
        })
    }

    showRequestingRow() {
        this.table.innerHTML = '';
        this.requestingRow.classList.remove('visually-hidden');
    }

    hideRequestingRow() {
        this.requestingRow.classList.add('visually-hidden')
    }
}