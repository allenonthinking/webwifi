
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
/*格式化时间*/
function formateDate(date,format) {
	var dateTime = new Date(date);
	var o = {  
		"y" : dateTime.getFullYear(),				  //年
		"M" : dateTime.getMonth()+1,                 //月份   
		"d" : dateTime.getDate(),                    //日   
		"h" : dateTime.getHours(),                   //小时   
		"m" : dateTime.getMinutes(),                 //分   
		"s" : dateTime.getSeconds(),                 //秒   
		// "q" : Math.floor((dateTime.getMonth()+3)/3), //季度   
		// "S"  : dateTime.getMilliseconds()             //毫秒   
	};

	var strDate = '';
	strDate = o.y + '年' + o.M + '月' + o.d + '日 ' + o.h + ':' + o.m;

	if(format=='yy/MM/dd'){
		strDate = o.y + '/' + o.M + '/' + o.d;
	} 
	
	return  strDate;
	//Object.prototype.toString.call(param);
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