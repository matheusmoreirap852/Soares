$(document).ready(function () {
    // Mostra o botão quando o usuário rolar a página além de um certo ponto
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#btnVoltarAoTopo').fadeIn();
        } else {
            $('#btnVoltarAoTopo').fadeOut();
        }
    });

    // Volta ao topo quando o botão é clicado
    $('#btnVoltarAoTopo').click(function () {
        $('html, body').animate({
            scrollTop: $('#inicio').offset().top // Rola para a âncora "inicio"
        }, 800); // A animação dura 800 milissegundos (0,8 segundos)
        return false;
    });
});