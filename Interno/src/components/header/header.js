const burgerIcon = document.querySelector('.header__menu-icon');
const menu = document.querySelector('.header__menu-list');

burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('header__menu-icon--active');
    menu.classList.toggle('header__menu-list--active');
    document.body.classList.toggle('lock');
});