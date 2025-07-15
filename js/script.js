(function ($) {
  "use strict";

  // Mostra e esconde a caixa de pesquisa
  function ativarBusca() {
    $('#header-nav').on('click', '.search-button', function () {
      $('.search-popup').toggleClass('is-visible');
    });

    $('#header-nav').on('click', '.btn-close-search', function () {
      $('.search-popup').toggleClass('is-visible');
    });

    $('.search-popup-trigger').on('click', function (e) {
      e.preventDefault();
      $('.search-popup').addClass('is-visible');
      setTimeout(function () {
        $('#search-popup').focus();
      }, 350);
    });

    $('.search-popup').on('click', function (e) {
      if (
        $(e.target).is('.search-popup') ||
        $(e.target).is('.search-popup-close') ||
        $(e.target).is('.search-popup-close svg') ||
        $(e.target).is('.search-popup-close path')
      ) {
        e.preventDefault();
        $(this).removeClass('is-visible');
      }
    });

    // Tecla ESC fecha a busca
    $(document).keyup(function (e) {
      if (e.which === 27) {
        $('.search-popup').removeClass('is-visible');
      }
    });
  }

  // Aumenta ou diminui quantidade de produtos
  function alterarQuantidade() {
    $('.product-qty').each(function () {
      var bloco = $(this);

      bloco.find('.quantity-right-plus').click(function (e) {
        e.preventDefault();
        var valor = parseInt(bloco.find('#quantity').val());
        bloco.find('#quantity').val(valor + 1);
      });

      bloco.find('.quantity-left-minus').click(function (e) {
        e.preventDefault();
        var valor = parseInt(bloco.find('#quantity').val());
        if (valor > 0) {
          bloco.find('#quantity').val(valor - 1);
        }
      });
    });
  }

  // Quando a página carregar
  $(document).ready(function () {
    ativarBusca();
    alterarQuantidade();

    // Slider principal
    new Swiper(".main-swiper", {
      speed: 500,
      navigation: {
        nextEl: ".swiper-arrow-prev",
        prevEl: ".swiper-arrow-next",
      },
    });

    // Produtos mobile
    new Swiper(".product-swiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      pagination: {
        el: "#mobile-products .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 2, spaceBetween: 20 },
        980: { slidesPerView: 4, spaceBetween: 20 }
      },
    });

    // Relógios inteligentes
    new Swiper(".product-watch-swiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      pagination: {
        el: "#smart-watches .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 2, spaceBetween: 20 },
        980: { slidesPerView: 4, spaceBetween: 20 }
      },
    });

    // Testemunhos
    new Swiper(".testimonial-swiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-arrow-prev",
        prevEl: ".swiper-arrow-next",
      },
    });
  });
})(jQuery);
