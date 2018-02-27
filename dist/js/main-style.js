(function($){

	$( document ).ready( function() {
		///// menu_state_open////////////
		$( '.main-menu__icon' ).on( 'click', function() {
			var $this = $( this ),
				$parent = $this.parent( '.main-menu' );

			$parent.toggleClass( 'menu_state_open' );
		});
		///// menu_state_open////////////
		
 

		////////////togle menu
		var o = $('.toggle');
			$(document).ready(function () {
				$('.toggle').click(function (e) {
					e.preventDefault(); 
					var tmp = $(this);
					o.each(function () {
						if ($(this).hasClass('active') && !$(this).is(tmp)) {
							$(this).parent().find('.toggle_cont').slideToggle();
							$(this).removeClass('active');
						}
					});
					$(this).toggleClass('active');
					$(this).parent().find('.toggle_cont').slideToggle();
		});
		$(document).on('click touchstart', function (e) {
			var container = $(".toggle-wrap");
			var removeBtnWrap = $('#cart .btn-remove-wrap');
			if (!container.is(e.target) && container.has(e.target).length === 0 && container.find('.toggle').hasClass('active')) { 
				container.find('.active').toggleClass('active').parent().find('.toggle_cont').slideToggle();
				if (removeBtnWrap.length > 0 ) {
					removeBtnWrap.fadeOut();
					}
				}
			});
		});
		///////////////////////


		////////LANGUAGE MENU/////////////
		$('.language-menu-list').click(function(){
			$(this).toggleClass('open');
		})

		$('.language-menu-list .language-menu__item').click(function(){
			var setLang = $('.language-menu-list').data('location'),
		    	dataLangSelect = $(this).data('lang')
					$('.language-menu-list').data('location', dataLangSelect);
					$('.language-menu-list .language-menu__item').removeClass('active');
					$(this).toggleClass('active');
		})

		////////LANGUAGE MENU/////////////

		////////money MENU/////////////
		$('.money-menu-list').click(function(){
			$(this).toggleClass('open');
		})

		$('.money-menu-list .money-menu__item').click(function(){
			var setLang = $('.money-menu-list').data('location'),
		    	dataLangSelect = $(this).data('lang')
					$('.money-menu-list').data('location', dataLangSelect);
					$('.money-menu-list .money-menu__item').removeClass('active');
					$(this).toggleClass('active');
		})

		////////money MENU/////////////




		/////////MODAL OKNO/////////////
		$('.popup-content').magnificPopup({
        	type: 'inline'
    	});
		/////////MODAL OKNO/////////////



		//////slider swiper////////////
	 	var swiper = new Swiper('.swiper-container', {
			spaceBetween: 30,
			loop: true,                  
			loopFillGroupWithBlank: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
	      	},
	    });

 		var swiper2 = new Swiper('.slideshow-container', {
			slidesPerView: 3,
			breakpoints: {
				993: {
					slidesPerView: 3
				},
				769: {
					slidesPerView: 2
				},
				577: {
					slidesPerView: 1
				}
			},
			spaceBetween: 0,
			slidesPerGroup: 1,
			loop: true,
			loopFillGroupWithBlank: true,
			pagination: {
			
			clickable: true,
			},
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
		});
	 	

	 	var swiper3 = new Swiper('.mega-slideshow-container', {
			slidesPerView: 2,
			breakpoints: {
				993: {
					slidesPerView: 2
				},
				769: {
					slidesPerView: 1
				},
				577: {
					slidesPerView: 1
				}
			},
			spaceBetween: 0,
			slidesPerGroup: 1,
			loop: true,
			loopFillGroupWithBlank: true,
			pagination: {
			
			clickable: true,
			},
			navigation: {
			nextEl: '.swiper-button-next1',
			prevEl: '.swiper-button-prev1',
			},
		});


	 	var swiperFeatured = new Swiper('.featured-slideshow-container', {
			slidesPerView: 3,
			breakpoints: {
				993: {
					slidesPerView: 3
				},
				769: {
					slidesPerView: 2
				},
				577: {
					slidesPerView: 1
				}
			},
			spaceBetween: 0,
			slidesPerGroup: 1,
			loop: true,
			loopFillGroupWithBlank: true,
			pagination: {
			
			clickable: true,
			},
			navigation: {
			nextEl: '.swiper-button-next2',
			prevEl: '.swiper-button-prev2',
			},
		});

	 	////////slider categoru///////
	 	var swipercategoru = new Swiper('.swipercategoru-container', {
			slidesPerView: 10,
			breakpoints: {
				993: {
					slidesPerView: 6
				},
				769: {
					slidesPerView: 4
				},
				577: {
					slidesPerView:3
				}
			},
			spaceBetween: 0,
			slidesPerGroup: 1,
			loop: true,
			loopFillGroupWithBlank: true,
			pagination: {
			
			clickable: true,
			},
			navigation: {
			nextEl: '.swiper-button-next-categoru',
			prevEl: '.swiper-button-prev-categoru',
			},
		});
		///////////////

		/////////////slider pgwslideshow/////
		
		$('.pgwSlideshow').pgwSlideshow({
			autoSlide: true,
			maxHeight: 800,
			displayControls: false
		});

		// owl-Slider-sidebar


        $('#slider-1').owlCarousel({
            items:1,
            nav:true,
            loop:true,
            
        });
        $("#slider-2, #slider-4").owlCarousel({
            items:1,
            lazyLoad:true,
            loop:true,
        });
        $('#brandSlider').owlCarousel({
            items:6,
           nav:true,
           lazyLoad:true,
           loop:true,
           responsiveClass:true,
                responsive:{
                0:{
                    items:1,
                    nav:true
                },
                440:{
                    items:2,
                },
                640:{
                    items:3,
                },
                940:{
                    items:4,
                },
                1024:{
                    items:5,
                },
                1300:{
                    items:6,
                    nav:true,
                }
            }
        }); 
   		
        
		///////// knopka button -top
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.ui-to-top').fadeIn();
			} 
			else {
				$('.ui-to-top').fadeOut();
			}
		});
			 
		$('.ui-to-top').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		////////////    

		/////////////slider pgwslideshow/////
	});// end ready

})( jQuery );
    