(function ($) {

	'use strict';

	// SCROLL TO TOP
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
	$('.portfolio-single-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});
	$('.clients-logo').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplaySpeed: 6000,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}

		]
	});

	$('.testimonial-wrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		vertical: true,
		verticalSwiping: true,
		autoplaySpeed: 6000,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});

	$('.testimonial-wrap-2').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});





	// Shuffle js filter and masonry
	var Shuffle = window.Shuffle;
	var jQuery = window.jQuery;

	var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
		itemSelector: '.shuffle-item',
		buffer: 1
	});

	jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
		var input = evt.currentTarget;
		if (input.checked) {
			myShuffle.filter(input.value);
		}
	});

})(jQuery);