// Menú hamburguesa
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Carrusel
let currentIndex = 0;
const images = document.querySelectorAll('.carrusel-imagenes img');
const totalImages = images.length;

function cambiarImagen(direction) {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    images[currentIndex].classList.add('active');
}