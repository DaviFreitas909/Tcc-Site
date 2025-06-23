
  // Mostrar/ocultar menu no mobile
  document.querySelector('.menu-mobile').addEventListener('click', function() {
    document.querySelectorAll('.dropdown').forEach(function(menu) {
      menu.classList.toggle('mobile-visible');
    });
  });
  
  // Mostrar/ocultar submenu ao clicar
  document.querySelectorAll('.dropdown > a').forEach(function(item) {
    item.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('active');
      }
    });
  });