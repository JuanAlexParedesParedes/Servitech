$(function () {
  // Switching de secciones desde el navbar
  $('.nav-link').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('.section-page').removeClass('active');
    $(target).addClass('active');
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    $('#navMenu').collapse('hide');
  });

  // Filtro de cards por categoría
  // Muestra solo las cards cuyo data-categoria coincide con el botón clickeado
  $('.btn-filtro').on('click', function () {
    var filtro = $(this).data('filtro');
    $('.btn-filtro').removeClass('active');
    $(this).addClass('active');
    if (filtro === 'todos') {
      $('.proyecto-item').removeClass('d-none');
    } else {
      $('.proyecto-item').addClass('d-none');
      $('.proyecto-item[data-categoria="' + filtro + '"]').removeClass('d-none');
    }
  });

  // Modal dinámico: al clickear una card se inyectan sus data-* en el modal
  $('.proyecto-card').on('click', function () {
    var card = $(this);
    $('#modalTitulo').text(card.data('titulo'));
    $('#modalDesc').text(card.data('descripcion'));
    $('#modalFecha').text(card.data('fecha'));
    $('#modalEstado').text(card.data('estado'));
    $('#modalImg').attr('src', card.data('img'));
    $('#modalUrl').attr('href', card.data('url'));
    $('#modalProyecto').modal('show');
  });

  $('#login-form').on('submit', function (e) {
    e.preventDefault();
  });
});
