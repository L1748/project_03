//在控制台打印字符串：text
// console.log("text");

// html标签（包括图片）都加载结束时，执行以下代码
(function($){
	"ues strict";
	
	// console.log("text");
	
	// 自定义fullheight函数，实现功能：为js-fullheight类添加height属性，设置数值为浏览器窗口高度
	var fullheight = function() {
		$('.js-fullheight').css('height',$(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height',$(window).height());
		});
	};
	// 调用函数，执行设置操作
	fullheight();
	
	
	
})(jQuery);