const hamburgerMenu = document.querySelector('#hamburger-menu');
const navbar = document.querySelector('#navbar');
const closeButton = document.querySelector('.close-icon');

hamburgerMenu.addEventListener('click', () => {
    navbar.style.right = "0";
    console.log(navbar);
});

closeButton.addEventListener('click', () => {
    navbar.style.right = "-300px";
});