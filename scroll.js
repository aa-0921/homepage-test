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

$(".drawer-hidden").click(function () {
	if ($("#drawer-check").prop("checked") == true) {
		$('html').addClass('scroll-prevent');
	} else {
		$('html').removeClass('scroll-prevent');
	}
  })


  $(window).on('load scroll', function (){

	var box = $('.fadeIn');
	var animated = 'animated';
	
	box.each(function(){
	
	  var boxOffset = $(this).offset().top;
	  var scrollPos = $(window).scrollTop();
	  var wh = $(window).height();
  
	  //画面内のどの位置で処理を実行するかで「100」の値を変更
	  if(scrollPos > boxOffset - wh + 100 ){
		$(this).addClass(animated);
	  }
	});
  
  });

  $(window).on('load scroll', function (){

	var box = $('.fadeIn-rotated');
	var animated = 'animated';
	
	box.each(function(){
	
	  var boxOffset = $(this).offset().top;
	  var scrollPos = $(window).scrollTop();
	  var wh = $(window).height();
  
	  //画面内のどの位置で処理を実行するかで「100」の値を変更
	  if(scrollPos > boxOffset - wh + 100 ){
		$(this).addClass(animated);
	  }
	});
  
  });