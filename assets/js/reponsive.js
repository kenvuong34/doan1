const hamburgerMenu = document.querySelector('#hamburger-menu');
const navbar = document.querySelector('#navbar');
const closeButton = document.querySelector('.close-icon');
const cartShop = document.querySelector('#cart');
const closeCart = document.querySelector('.close');

hamburgerMenu.addEventListener('click', () => {
    navbar.classList.add('active');
});

navbar.addEventListener('click', () => {
    cartShop.classList.add('active');
    cartShop.style.display = 'grid';
    cartShop.style.right = 0;
});

closeButton.addEventListener('click', () => {
    navbar.classList.remove('active');
});

closeCart.addEventListener('click', () => {
    cartShop.classList.remove('active');
    cartShop.style.display = 'none';
});