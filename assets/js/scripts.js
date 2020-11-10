$(document).ready(function(){
	// Banner - Carousel
	$('.testimonials').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:false,
		autoplay:true
	});
	$('.nav-icon').click(function(){
		$('.menu ul').slideToggle();

		return false;
	})
})