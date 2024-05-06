document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector("#menu-button");
  const mobileMenu = document.querySelector("#mobile-menu");
  const divButton = document.querySelector("#div-button");

  // Función para cerrar el menú
  function closeMenu() {
    mobileMenu.classList.add("hidden");
    divButton.classList.toggle("hover:to-transparent");
    divButton.classList.toggle("hover:bg-gradient-to-t");
    menuButton.classList.toggle("hover:rounded-md");
    menuButton.classList.toggle("hover:shadow");
  }

  function openMenu() {
    mobileMenu.classList.remove("hidden");
    divButton.classList.toggle("hover:to-transparent");
    divButton.classList.toggle("hover:bg-gradient-to-t");
    menuButton.classList.toggle("hover:rounded-md");
    menuButton.classList.toggle("hover:shadow");
  }
  // Event listener para el botón del menú
  menuButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Evita que el evento se propague al documento
    const isMenuOpen = mobileMenu.classList.contains("hidden");
    if (isMenuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  // Event listener para el documento
  document.addEventListener("click", function (event) {
    // Verifica si el clic fue dentro del menú
    if (!mobileMenu.contains(event.target)) {
      // Si el clic fue fuera del menú, cierra el menú
      closeMenu();
    }
  });
});
