document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[title]');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const url = this.getAttribute('title');
      console.log(`Botón con URL ${url} fue presionado.`);
      // Almacena el URL en el almacenamiento local
      localStorage.setItem('url', url);
    });
  });
});