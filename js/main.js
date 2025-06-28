// This file includes JavaScript functionality for the website, such as form validation and interactive elements.

document.addEventListener("DOMContentLoaded", function() {
    // Form validation for the contact form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (!name || !email || !message) {
                event.preventDefault();
                alert("Please fill in all fields.");
            } else {
                alert("Thank you for your message!");
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("a[href^='#']");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});