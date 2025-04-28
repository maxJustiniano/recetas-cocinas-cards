const darkModeButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const cards = document.querySelectorAll('.card');

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    navbar.classList.toggle('navbar-dark-mode');
    cards.forEach(card => card.classList.toggle('card-dark-mode'));

    if (body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'Desactivar Modo Oscuro';
    } else {
        darkModeButton.textContent = 'Activar Modo Oscuro';
    }
});