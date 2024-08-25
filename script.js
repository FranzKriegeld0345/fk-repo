// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Kapcsolattartási űrlap validációja
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Megakadályozza az űrlap alapértelmezett beküldését
        alert("Üzenet elküldve!");
        // Itt adhatjátok hozzá az űrlapadatok kezelését
    });

    // Menü kattintások kezelése
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Fejléc háttérszín változtatása görgetéskor
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
