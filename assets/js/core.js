$(function () {
  // Al hacer click en un enlace del menú:
  // 1. Oculta todas las secciones quitando .active
  // 2. Muestra solo la sección target agregando .active
  // 3. Marca el enlace clickeado como activo en el navbar
  // 4. Cierra el menú hamburger en móvil/tablet
  $('.nav-link').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('.section-page').removeClass('active');
    $(target).addClass('active');
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    $('#navMenu').collapse('hide');
  });

  $('#login-form').on('submit', function (e) {
    e.preventDefault();
  });
});
