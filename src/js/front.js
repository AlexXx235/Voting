const $ = sel => { return document.querySelector(sel); };

// Transactions panel
$('.transactions__header').addEventListener('click', event => {
    $('.triangle').classList.toggle('triangle_opened');
    $('.transactions__list').classList.toggle('transactions__list_opened');
});