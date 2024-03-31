// Add any interactive features here
// Example: Smooth scrolling when clicking on navigation links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
