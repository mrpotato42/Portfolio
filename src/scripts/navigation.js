document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('#menu-button');
    const mobileMenu = document.querySelector('#mobile-menu');
   
    // Función para cerrar el menú
    function closeMenu() {
        mobileMenu.classList.add('hidden');
    }

    // Event listener para el botón del menú
    menuButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que el evento se propague al documento
        const isMenuOpen = mobileMenu.classList.contains('hidden');
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');

        } else {
            closeMenu();
        }
    });

    // Event listener para el documento
    document.addEventListener('click', function(event) {
        // Verifica si el clic fue dentro del menú
        if (!mobileMenu.contains(event.target)) {
            // Si el clic fue fuera del menú, cierra el menú
            closeMenu();
        }
    });
});