// BG nav menu to solid
const nav = document.querySelector("nav");
const navMenu = document.querySelector('nav ul.nav-menu');
const hamburger = document.querySelector('nav div.hamburger-nav');
const navLink = document.querySelectorAll('nav ul.nav-menu li.nav-item a.nav-link');

window.addEventListener("scroll", function () {
    if (window.scrollY > 20 || document.body.scrollY > 20) {
        nav.setAttribute("class", "nav-solid");
        document.querySelector('.nav-link').classList.remove('bg-nav-link');

        navLink.forEach(function(e){
            e.classList.remove('bg-nav-link');
        });
        
    } else {
        nav.removeAttribute("class");
        document.querySelector('.nav-link').classList.add('bg-nav-link');

        navLink.forEach(function(e){
            e.classList.add('bg-nav-link');
        });

    }
});


// Hamburger nav
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLink.forEach(function (e) {
    e.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// onLoad animations
window.addEventListener('load', function () {
    document.querySelector('.jumbotron-text').classList.add('show');
    document.querySelector('.jumbotron-img').classList.add('show');
    document.querySelector('.content').classList.add('show');
});