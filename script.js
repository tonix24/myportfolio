// Add any interactivity if needed, such as a mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
