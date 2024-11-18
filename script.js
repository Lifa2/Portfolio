// Smooth Scroll Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('header').offsetHeight;

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });

        window.scrollBy(0, -navbarHeight);
    });
});

// Form Validation
function validateForm() {
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var errorMessages = [];

    if (!email.value || !validateEmail(email.value)) {
        errorMessages.push("Please enter a valid email address.");
    }

    if (!message.value.trim()) {
        errorMessages.push("Please enter a message.");
    }

    if (errorMessages.length > 0) {
        alert(errorMessages.join("\n"));
        return false;
    }

    return true;
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

// ScrollReveal Animations
ScrollReveal().reveal('.home', { delay: 200, origin: 'top', distance: '50px', duration: 1000, easing: 'ease-out', reset: true });
ScrollReveal().reveal('.about', { delay: 300, origin: 'bottom', distance: '50px', duration: 1000, easing: 'ease-out', reset: true });
ScrollReveal().reveal('.skills', { delay: 400, origin: 'left', distance: '100px', duration: 1000, easing: 'ease-out', reset: true });
ScrollReveal().reveal('.projects', { delay: 500, origin: 'right', distance: '100px', duration: 1000, easing: 'ease-out', reset: true });
ScrollReveal().reveal('.contact', { delay: 600, origin: 'bottom', distance: '50px', duration: 1000, easing: 'ease-out', reset: true });
