window.onload = function() {
    // Oculta la barra de desplazamiento
    document.querySelector('.hide-scroll-bar').style = '-ms-overflow-style: none; scrollbar-width: none;';
    document.querySelector('.hide-scroll-bar').addEventListener('mouseover', function() {
        this.style.overflow = 'auto';
    });
    document.querySelector('.hide-scroll-bar').addEventListener('mouseout', function() {
        this.style.overflow = 'hidden';
    });
}
