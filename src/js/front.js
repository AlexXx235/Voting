const $ = sel => { return document.querySelector(sel); };

// Transactions panel
document.querySelectorAll('.dropdown__header').forEach(header => header.addEventListener('click', event => {
    header.querySelector('.right-triangle').classList.toggle('right-triangle_rotated');
    header.nextElementSibling.classList.toggle('dropdown__list_opened');
}));