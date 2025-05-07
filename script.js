// Menú hamburguesa
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Carrusel
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carrusel-imagenes img');
    const totalImages = images.length;

    // Verificación para evitar errores si no hay imágenes
    if (totalImages === 0) {
        console.error('No se encontraron imágenes en el carrusel');
        return;
    }

    function cambiarImagen(direction) {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        images[currentIndex].classList.add('active');
    }

    // Exponer la función al ámbito global para los botones
    window.cambiarImagen = cambiarImagen;
});