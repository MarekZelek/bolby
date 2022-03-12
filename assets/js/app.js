let parallax = document.querySelector('.parallax');
let parallaxInstance = new Parallax(parallax);

let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    document.body.classList.toggle('menu-open');
});

let navigation = document.querySelector('.nav-links');
navigation.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    document.body.classList.toggle('menu-open');
})