/* Sticky header shadow */
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 20);
});

/* Mobile menu */
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
    sideMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
});

/* Mobile dropdowns */
document.querySelectorAll('.has-submenu > a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        link.parentElement.classList.toggle('active');
    });
});