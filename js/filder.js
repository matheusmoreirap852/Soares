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


$(document).ready(function () {
    // Quando o botão do menu responsivo é clicado
    $(".navbar-toggler").click(function () {
        // Verifica se o menu está aberto ou fechado
        var menuAberto = $("#navbarNav").hasClass("show");
        
        // Se o menu estiver aberto, esconde os itens do menu
        if (menuAberto) {
            $(".navbar-nav").slideUp();
        } else {
            // Se o menu estiver fechado, mostra os itens do menu
            $(".navbar-nav").slideDown();
        }
    });
});


$(document).ready(function () {
    $(window).scroll(function () {
        $('.custom-section').each(function () {
            if ($(this).isInViewport()) {
                $(this).animate({ opacity: 1 }, 1000);
            }
        });
    });
});

// Função para verificar se um elemento está na viewport
$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};


$(document).ready(function(){
    $('.custom-carousel').slick({
      autoplay: true, // Reprodução automática
      dots: true, // Exibe pontos de navegação
      arrows: true, // Exibe setas de navegação
      speed: 500, // Velocidade da transição
      slidesToShow: 1, // Número de slides visíveis ao mesmo tempo
      slidesToScroll: 1 // Número de slides para rolar a cada transição
    });
  });