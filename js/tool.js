
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
    //用decodeURI解决url中文问题
    var url = decodeURI(window.location.search); 
    var r = url.substr(1).match(reg);
    if (r != null) {
    	return unescape(r[2]);
    }
    return null;
}
function clearContent(event){
	event.stopPropagation();
	$(this).parents('.cl-clear').find('.to-clear').val('');
}

//判断是否是移动端
function isMobile() {

	var isMobile = false;
	//判断是pc还是移动端
	var system ={  
		win : false,  
		mac : false,  
		xll : false  
	};  
	//检测平台   
	var p = navigator.platform;  
	system.win = p.indexOf("Win") == 0;  
	system.mac = p.indexOf("Mac") == 0;  
	system.x11 = (p == "X11") || (p.indexOf("Linux") == 0); 

	//跳转语句   
	if(!system.win&&!system.mac&&!system.xll){
		isMobile = true;
	}

	return isMobile;
}

function alt(msg){
	var $node = $('<div class="alt">'+
		'<div class="alt-cont">'+
			'<div class="alt-top">'+msg+'</div>'+
			'<div class="alt-foot">'+
				'<i class="alt-btn">确定</i>'+
			'</div>'+
		'</div>'+
	'</div>');
	$node.find('.alt-btn').on('tap', function(){
		$('.alt').remove();
	});
	$('body').append($node);
}