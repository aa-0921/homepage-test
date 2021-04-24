$(function() {
	var headerHeight = $('#menu').outerHeight(),
		startPos = 0;
	$(window).on('load scroll', function() {
		var scrollPos = $(this).scrollTop();
		if ( scrollPos > startPos && scrollPos > headerHeight ) {
			$('#menu').css('top', '-' + headerHeight + 'px');
		} else {
			$('#menu').css('top', '0');
		}
		startPos = scrollPos;
	});
});	


$('.drawer-item a[href]').on('click', function(event) {
    $('.drawer-hidden').trigger('click');
	$('html').removeClass('scroll-prevent');
});


$('#drawer-check').on('click', function() {
	$('html').addClass('scroll-prevent');
});

