jQuery(function($) {
	// Register each section as a waypoint.
	$('article > section').waypoint({ offset: '50%' });
	
	// The same for all waypoints
	$('body').delegate('article > section', 'waypoint.reached', function(event, direction) {
		var $active = $(this);
		
		if (direction === "up") {
			$active = $active.prev();
		}
		if (!$active.length) $active.end();
		
		$('.section-active').removeClass('section-active');
		$active.addClass('section-active');
		
		$('.link-active').removeClass('link-active');
		$('a[href=#'+$active.attr('id')+']').addClass('link-active');
	});
	
	// Negates the flash of non-active nav.
	$('body > header nav a').click(function() {
		$(this).addClass('link-active');
	}).eq(0).addClass('link-active');
	
	// Smooth scrolling for internal links
	$("a[href^='#']").click(function(event) {
		var $this = $(this),
		target = this.hash,
		$target = $(target);
		
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 500, 'swing', function() {
			window.location.hash = target;
		});
		event.preventDefault();
	});
});

$(document).ready(function() {
	yepnope({
		test: Modernizr.flexbox,
		nope: "flexie.min.js"
	})
});