(function ($) {
  "use strict"

  /* 1. Proloder */
  $(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
  });

  /* 2. sticky And Scroll UP */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();

    if (scroll < 200) {
      $(".header-sticky").removeClass("sticky-bar");
      $('#back-top').fadeOut(500);
    } else {
      $(".header-sticky").addClass("sticky-bar");

      $('#back-top').fadeIn(500);
    }
  });
  // Smooth scroll for the menu and links with .scrollto classes


  // Scroll Up

  $('#back-top a').on("click", function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });





  /* 3. slick Nav */
  // mobile_menu
  var menu = $('ul#navigation');
  if (menu.length) {
    menu.slicknav({
      prependTo: ".mobile_menu",
      closedSymbol: '+',
      openedSymbol: '-'
    });
  };

  /* 4. MainSlider-1 */
  // h1-hero-active
  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 4000,
      dots: true,
      fade: true,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  /* 5. Testimonial Active*/
  var testimonial = $('.h1-testimonial-active');
  if (testimonial.length) {
    testimonial.slick({
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrow: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrow: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrow: false
          }
        }
      ]
    });
  }


  /* 6. Nice Selectorp  */
  var nice_Select = $('select');
  if (nice_Select.length) {
    nice_Select.niceSelect();
  }

  /* 7. data-background */
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  });
  // popoup video
  var popUp = $('.popup-video');
  if (popUp.length) {
    popUp.magnificPopup({
      type: 'iframe'
    });
  }

  /* 10. WOW active */
  new WOW().init();



  // 11. ---- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();



  // 12 Pop Up Img
  var popUp = $('.single_gallery_part, .img-pop-up');
  if (popUp.length) {
    popUp.magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }
  /*---------------------
  	 wow .js
  	--------------------- */
  function wowAnimation() {
    new WOW({
      offset: 100,
      mobile: true
    }).init()
  }
  wowAnimation()

  // alert
  let imgbanner = [
    'clevel.png', 'talent_acquistion.png', 'program.png',
    'talent_develop.png',
    'corpora.png',
    'crefund.png',
    'pid.png',
    'cretech.png',
    'laisoffice.png',
    'ga.png',
    'medcom.png'
  ]

  // for (let index = 1; index <= 11; index++) {
  //   $(document).on('click', `#image-${index}`, function (event) {
  //     Swal.fire({
  //       imageUrl: `./assets/img/hero/${imgbanner[index-1]}`,
  //       background: '#fff',
  //       imageHeight: 500,
  //       imageWidth: 300,
  //       width: 400,
  //       showCloseButton: true,
  //       imageAlt: 'A tall image',
  //       scrollbarPadding: false,
  //       showConfirmButton: false,
  //       backdrop: `
  //       rgba(253, 116, 155, 0.4)

  //     `
  //     })
  //   });

  // }

  // Project carousel
  $(".project-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    nav: false,
    dots: true,
    dotsData: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  // Testimonials carousel
  // $(".testimonial-carousel").owlCarousel({
  //   autoplay: true,
  //   smartSpeed: 1000,
  //   margin: 25,
  //   loop: true,
  //   center: true,
  //   dots: false,
  //   nav: true,
  //   navText: [
  //     '<i class="bi bi-chevron-left"></i>',
  //     '<i class="bi bi-chevron-right"></i>'
  //   ],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     768: {
  //       items: 2
  //     },
  //     992: {
  //       items: 3
  //     }
  //   }
  // });
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 800,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  });
  /*--------------------------
   collapse
  ---------------------------- */

  var panel_test = $('.panel-heading a');
  panel_test.on('click', function () {
    panel_test.removeClass('active');
    $(this).addClass('active');
  });
  /*--------------------------
   Parallax
  ---------------------------- */
  var parallaxeffect = $(window);
  parallaxeffect.stellar({
    responsive: true,
    positionProperty: 'position',
    horizontalScrolling: false
  });

  // data-switch
  // $('[data-switch]').on('click', function (e) {
  //   var $page = $('#dokumentasiww'),
  //     blockToShow = e.currentTarget.getAttribute('data-switch');

  //   // Hide all children.
  //   $page.children().hide();

  //   // And show the requested component.
  //   $page.children(blockToShow).show();
  // });



})(jQuery);