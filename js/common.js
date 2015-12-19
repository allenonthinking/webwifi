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
})