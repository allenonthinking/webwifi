$(function(){
	$('.change-password i').on('tap', function(){
		var $parent = $(this).parent('.change-password'),
			$input = $parent.find('input');
		if($input.attr('type')=='password'){
			$input.attr('type','text');
			$(this).addClass('open');
		} else {
			$input.attr('type','password');
			$(this).removeClass('open');
		}
	});
	$('.s-content a').on('tap', function(){
			$(this).addClass('active').siblings().removeClass('active');
	});

	var $tog = $('.tog'),
		$togIn = $('.tog-in');
	$('.tog').on('tap',function(){

		if ($togIn.hasClass('open')) {
			$togIn.removeClass('open');
		} else {
			$togIn.addClass('open');
		}
	});



})
