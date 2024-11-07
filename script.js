// Smooth Scroll Animation for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// ScrollReveal Animations
ScrollReveal().reveal('.home', { delay: 200, origin: 'top', distance: '50px' });
ScrollReveal().reveal('.about', { delay: 300, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.skills', { delay: 400, origin: 'left', distance: '100px' });
ScrollReveal().reveal('.projects', { delay: 500, origin: 'right', distance: '100px' });
ScrollReveal().reveal('.contact', { delay: 600, origin: 'bottom', distance: '50px' });

