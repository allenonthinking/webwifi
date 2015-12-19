$(function(){
	//slide
	var $dots = $('.dot-item'),
		$items = $('.slider-item'),
		timer = null;

	function dotClick(index, flag){
		var $showItem = $('#s'+index),
			$showDot = $('#d'+index);
		//dot style
		$dots.removeClass('curr');
		$showDot.addClass('curr');

		$items.css({
			'z-index': 1
		});
		$items.removeClass('curr');
		$showItem.css({
			'z-index': 10
		});
		$showItem.addClass('curr');
	}
	//自动轮播
	
	function autoSlid(){

		timer = setInterval(function(){
			var $old = $('.dot-item.curr'),
				index = $old.attr('_label');
			
			if (index == $dots.size()-1) {
				dotClick(0);
			} else {
				dotClick(parseInt(index) + 1);
			}

		},4000);
	}
	autoSlid();
	
});