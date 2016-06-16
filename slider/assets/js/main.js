/*-----------------------------------------------------------------------------------*/
/*	SCROLL NAVIGATION HIGHLIGHT
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	headerWrapper		= parseInt($('.main-menu').height());
	
	
	var shrinked_header_height = 53;
	var header_height = $('.main-menu').height();
	
	$('.offset').css('padding-top', header_height + 'px');
   $('.anchor').css('padding-top', shrinked_header_height + 'px');  
   $('.anchor').css('margin-top', -(shrinked_header_height) + 'px'); 
    
	offsetTolerance	= -(header_height);
	
	//Detecting user's scroll
	$(window).scroll(function() {
	
		//Check scroll position
		scrollPosition	= parseInt($(this).scrollTop());
		
		//Move trough each menu and check its position with scroll position then add current class
		$('.main-menu ul a').each(function() {

			thisHref				= $(this).attr('href');
			thisTruePosition	= parseInt($(thisHref).offset().top);
			thisPosition 		= thisTruePosition - headerWrapper - offsetTolerance;
			
			if(scrollPosition >= thisPosition) {
				
				$('.current').removeClass('current');
				$('.main-menu ul a[href='+ thisHref +']').parent('li').addClass('current');
				
			}
		});
		
		
		//If we're at the bottom of the page, move pointer to the last section
		bottomPage	= parseInt($(document).height()) - parseInt($(window).height());
		
		if(scrollPosition == bottomPage || scrollPosition >= bottomPage) {
		
			$('.current').removeClass('current');
			$('.main-menu ul a:last').parent('li').addClass('current');
		}
	});
	
});




/*-----------------------------------------------------------------------------------*/
/*	SLIT SLIDER
/*-----------------------------------------------------------------------------------*/

			$(function() {			
				var Page = (function() {
					var $nav = $( '#nav-dots > span' ),
						slitslider = $( '#slider' ).slitslider( {
							onBeforeChange : function( slide, pos ) {
								$nav.removeClass( 'nav-dot-current' );
								$nav.eq( pos ).addClass( 'nav-dot-current' );
							}
						} ),
						init = function() {
							initEvents();							
						},
						initEvents = function() {
							$nav.each( function( i ) {							
								$( this ).on( 'click', function( event ) {									
									var $dot = $( this );									
									if( !slitslider.isActive() ) {
										$nav.removeClass( 'nav-dot-current' );
										$dot.addClass( 'nav-dot-current' );									
									}									
									slitslider.jump( i + 1 );
									return false;								
								} );								
							} );
						};
						return { init : init };
				})();
				Page.init();			
			});
			
	$.Slitslider.defaults = {
		
		speed : 2000,     			// transitions speed		
		optOpacity : true,			// if true the item's slices will also animate the opacity value		
		translateFactor : 230,		// amount (%) to translate both slices - adjust as necessary
		maxAngle : 25,					// maximum possible angle
		maxScale : 2,					// maximum possible scale
		autoplay : false,				// slideshow on / off
		keyboard : true,				// keyboard navigation
		interval : 5000,				// time between transitions
		// callbacks
		onBeforeChange : function( slide, idx ) { return false; },
		onAfterChange : function( slide, idx ) { return false; }
	};
			


			  

/*-----------------------------------------------------------------------------------*/
/*	Top Menu fixed
/*-----------------------------------------------------------------------------------*/

	$(window).scroll(function () {
		if ($(this).scrollTop() > 10) {
			$('.navbar-fixed-top').css('background','rgba(5,5,5, 0.9)');
		} else {
			$('.navbar-fixed-top').css('background','transparent');
		}
	});
			  
			  

/*-----------------------------------------------------------------------------------*/
/*	Portfolio Item hover
/*-----------------------------------------------------------------------------------*/			  
	$(' #container > li ').each( function() { $(this).hoverdir(); } );



/*-----------------------------------------------------------------------------------*/
/*	MixItUp portfolio
/*-----------------------------------------------------------------------------------*/			  
	$(document).ready(function(){
		$('#container').mixitup();
	});
			  

/*-----------------------------------------------------------------------------------*/
/*	PrettyPhoto
/*-----------------------------------------------------------------------------------*/
	// PrettyPhoto
   $("a[rel^='prettyPhoto']").prettyPhoto();
			  

/*-----------------------------------------------------------------------------------*/
/*	smooth scroll to anchor
/*-----------------------------------------------------------------------------------*/

$("a[href*=#]:not([href=#])").on("click", function(event){ 
	$("html, body").animate({
		scrollTop: $($(this).attr("href")).offset().top + "px"
	}, {
		duration: 700,
      easing: "easeInQuad"
	});
	return false;       
});
			  

/*-----------------------------------------------------------------------------------*/
/*	Page Scrolling Animation
/*-----------------------------------------------------------------------------------*/	
	$(window).scroll(function (event) {
		var scrollPoint = $(this).scrollTop();
		
		if (scrollPoint > 280) {
			$('#services h2').addClass('moveUp').css('opacity', '1');
		} else {
				$('#services h2').removeClass('moveUp').css('opacity', '0');
		}
		
		if (scrollPoint > 300) {
			$('.service').addClass('scaleUp').css('opacity', '1');
		} else {
				$('.service').removeClass('scaleUp').css('opacity', '0');
		}
		
		if (scrollPoint > 850) {
			$('#ourteam h2').addClass('moveUp').css('opacity', '1');
		} else {
				$('#ourteam h2').removeClass('moveUp').css('opacity', '0');
		}
		
		if (scrollPoint > 1100) {
			$('.team').addClass('shake').css('opacity', '1');
		} else {
				$('.team').removeClass('shake').css('opacity', '0');
		}
		
		if (scrollPoint > 2500) {
			$('#about h2').addClass('moveUp').css('opacity', '1');
		} else {
				$('#about h2').removeClass('moveUp').css('opacity', '0');
		}
		
		if (scrollPoint > 2550) {
			$('#about h2 + p').addClass('scaleUp').css('opacity', '1');
		} else {
				$('#about h2+ p').removeClass('scaleUp').css('opacity', '0');
		}
		
		if (scrollPoint > 2700) {
			$('.timeline li:nth-child(1) .timeline-panel').addClass('scaleUp').css('opacity', '1');
		} else {
				$('.timeline li:nth-child(1) .timeline-panel').removeClass('scaleUp').css('opacity', '0');
		}
		
		if (scrollPoint > 2800) {
			$('.timeline li:nth-child(2) .timeline-panel').addClass('scaleUp').css('opacity', '1');
		} else {
				$('.timeline li:nth-child(2) .timeline-panel').removeClass('scaleUp').css('opacity', '0');
		}
		
		if (scrollPoint > 2900) {
			$('.timeline li:nth-child(3) .timeline-panel').addClass('scaleUp').css('opacity', '1');
		} else {
				$('.timeline li:nth-child(3) .timeline-panel').removeClass('scaleUp').css('opacity', '0');
		}
		
		if (scrollPoint > 3100) {
			$('.timeline li:nth-child(4) .timeline-panel').addClass('scaleUp').css('opacity', '1');
		} else {
				$('.timeline li:nth-child(4) .timeline-panel').removeClass('scaleUp').css('opacity', '0');
		}
		
		if (scrollPoint > 3500) {
			$('.social a').addClass('scaleUp').css('opacity', '1');
		} else {
				$('.social a').removeClass('scaleUp').css('opacity', '0');
		}
		
		if (scrollPoint > 3900) {
			$('#contact h2').addClass('moveUp').css('opacity', '1');
		} else {
				$('#contact h2').removeClass('moveUp').css('opacity', '0');
		}
		
		if (scrollPoint > 4100) {
			$('.contact-text').addClass('moveUp').css('opacity', '1');
			$('form').addClass('moveUp').css('opacity', '1');
		} else {
				$('.contact-text').removeClass('moveUp').css('opacity', '0');
				$('form').removeClass('moveUp').css('opacity', '0');
		}
		
		if (scrollPoint > 4200) {
			$('footer p').addClass('scaleUp').css('opacity', '1');
			$('footer img').addClass('scaleUp').css('opacity', '1');
		} else {
			$('footer p').addClass('scaleUp').css('opacity', '0');
			$('footer img').addClass('scaleUp').css('opacity', '0');
		}
		
	});
	


/*-----------------------------------------------------------------------------------*/
/*	Scrollrama plugin
/*-----------------------------------------------------------------------------------*/
	$(document).ready(function() {
		
		// TimelineLite for title animation, then start up superscrollorama when complete
		(new TimelineLite({onComplete:initScrollAnimations}))
			.from( $('#title-line1 span'), .4, {delay: 1, css:{right:'1000px'}, ease:Back.easeOut})
			.from( $('#title-line2'), .4, {css:{top:'1000px',opacity:'0'}, ease:Expo.easeOut})
			.append([
				TweenMax.from( $('#title-line3 .char1'), .25+Math.random(), {css:{top: '-200px', right:'1000px'}, ease:Elastic.easeOut}),
				TweenMax.from( $('#title-line3 .char2'), .25+Math.random(), {css:{top: '300px', right:'1000px'}, ease:Elastic.easeOut}),
				TweenMax.from( $('#title-line3 .char3'), .25+Math.random(), {css:{top: '-400px', right:'1000px'}, ease:Elastic.easeOut}),
				TweenMax.from( $('#title-line3 .char4'), .25+Math.random(), {css:{top: '-200px', left:'1000px'}, ease:Elastic.easeOut}),
				TweenMax.from( $('#title-line3 .char5'), .25+Math.random(), {css:{top: '200px', left:'1000px'}, ease:Elastic.easeOut})
			])
			.from("#newversion", .4, {scale: 5, autoAlpha: 0, ease: Elastic.easeOut})
			.to( $('#title-info'), .5, {css:{opacity:.99, 'margin-top':0}, delay:-1, ease:Quad.easeOut});
		
		function initScrollAnimations() {
			var controller = $.superscrollorama();
			// container tweens
			controller.addTween('#portfolio h2', TweenMax.from( $('#portfolio h2'), .75, {css:{letterSpacing:20,opacity:0}, ease:Quad.easeOut}));
			controller.addTween('.mix-control', TweenMax.from( $('.mix-control'), 1, {css:{opacity:0}, ease:Quad.easeOut}));
			$('#container  li').css('position','relative').each(function() {
				controller.addTween('#container ', TweenMax.from( $(this), 1, {delay:Math.random()*.2,css:{left:Math.random()*200-100,top:Math.random()*200-100,opacity:0}, ease:Back.easeOut}));
			});

		}
	});

/*-----------------------------------------------------------------------------------*/
/*	
/*-----------------------------------------------------------------------------------*/
			  

/*-----------------------------------------------------------------------------------*/
/*	
/*-----------------------------------------------------------------------------------*/