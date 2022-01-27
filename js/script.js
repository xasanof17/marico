let body = document.querySelector('body'),
    link = document.querySelector('.nav__link'),
    menu = document.querySelector('.menu-btn'),
    list = document.querySelector('.nav__list');

// Navigation
menu.addEventListener('click', function () {
    menu.classList.toggle('active');
    list.classList.toggle('active');
})