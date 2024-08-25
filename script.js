// Script.js

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
});
