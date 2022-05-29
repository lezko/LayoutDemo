const burgerIcon = document.querySelector('.menu-header__icon');
const menu = document.querySelector('.menu-header__menu');

burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock')
});