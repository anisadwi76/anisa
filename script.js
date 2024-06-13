// JavaScript functionality to toggle visibility of sections

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    const servicesSection = document.getElementById('services');

    aboutSection.style.display = 'block'; // Show 'About' section by default
    servicesSection.style.display = 'none'; // Hide 'Services' section by default

    // Event listener for 'About' link
    document.querySelector('a[href="#about"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of link
        aboutSection.style.display = 'block';
        servicesSection.style.display = 'none';
    });

    // Event listener for 'Services' link
    document.querySelector('a[href="#services"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of link
        aboutSection.style.display = 'none';
        servicesSection.style.display = 'block';
    });
});
