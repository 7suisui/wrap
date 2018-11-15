$(function() {
	/************************图片轮播****************************/
	//点击圆点切换图片
	//定义记录当前圆点的索引号
	var current = 0;
	//定义记录当前定时器的索引号
	var cursor = 0;
	//获取所有的图片切换圆点
	var list = $("#ol_circle > li"); //获取当前3个圆点的li元素
	//遍历所有的图片切换圆点
	list.each(function(index, element) {

		$(this).mouseover(function() {
			//为当前图片切换圆点的li元素添加class
			$(this).addClass("on");
			//把其他的图片切换圆点的class删除掉
			list.not(this).removeClass("on");

			//实现图片轮换效果，获取banner图片的li元素，取出相应下标的banner图进行显示
			$("#ul_img_ad > li").eq(index).fadeIn(500);
			//把其他的图片都进行隐藏(淡出效果)
			$("#ul_img_ad >li").not($("#ul_img_ad >li").eq(index)).fadeOut(500);
			//设置当前圆点的索引号
			cursor = index;
			//
			current = index;
		})

	})

	/****实现自动轮播banner图****/
	//定时器setInterval(a,b):执行a函数代码，可以进行具体的定时设置，b参数是设置时间，隔多久时间再进行执行a函数
	setInterval(function() {
		//第三步:当cursor>=5时，重置cursor
		if(cursor >= list.length) {
			//重置cursor值，让它从第一张开始显示
			cursor = 0;
		}

		//通过cursor计数器，设置对应的li元素触发它的onmouseover事件
		//第一步:当cursor=4时，即最后一张图片
		list.eq(cursor).trigger("mouseover");
		//每次执行该函数时，cursor加一，触发下一张图片的mouseover事件
		//alert(cursor);
		//cursor = cursor + 1;
		//第二步:cursor自增后，cursor=5
		cursor++;

	}, 2000)

})
$(document).ready(function() {
		var bool = true;
		var liLen = $(".product_show li").length; //li的个数
		var liWidth = $(".product_show li").eq(0).outerWidth(true); //一个li的宽度
		$(".product_show ul").css({
			"width": liLen * liWidth + "px"
		}); //整个ul的宽度
		for(var i = 0; i < liLen; i++) {
			$(".product_show li").eq(i).css({
				"left": i * liWidth + "px"
			});
		}
		$("#next").click(function() {
			show()
		})
		$("#prev").click(function() {
			if(bool) {
				bool = false;
				if(liLen > 4) {
					for(var i = 0; i < liLen - 1; i++) {
						$(".product_show li").eq(i).animate({
							"left": liWidth * (i + 1) + "px"
						}, function() {
							bool = true;
						})
					}
					$(".product_show li").eq(liLen - 1).prependTo(".product_show ul").css({
						"left": -liWidth + "px"
					}).animate({
						"left": 0 + "px"
					}, function() {
						bool = true;
					});
				}
			}
		})

		function show() {
			if(bool) {
				bool = false;
				if(liLen > 4) {
					$(".product_show li").eq(0).animate({
						"left": -liWidth + "px"
					}, function() {
						$(".product_show li").eq(0).css({
							"left": liWidth * (liLen - 1) + "px"
						}).appendTo(".product_show ul");
						bool = true;
					});
					for(var i = 1; i < liLen; i++) {
						$(".product_show li").eq(i).animate({
							"left": liWidth * (i - 1) + "px"
						}, function() {
							bool = true;
						})
					}
				}
			}
		}
		var lun = setInterval(function() {
			show()
		}, 3000)
	})
	/***************************倒计时**********************************/
function GetRTime() {
	var EndTime = new Date('2017/12/28 21:28:00');
	var NowTime = new Date();
	var t = EndTime.getTime() - NowTime.getTime();
	var h = 0;
	var m = 0;
	var s = 0;
	if(t >= 0) {
		h = Math.floor(t / 1000 / 60 / 60 % 24);
		m = Math.floor(t / 1000 / 60 % 60);
		s = Math.floor(t / 1000 % 60);
	}

	document.getElementById("t_h").innerHTML = h + " ";
	document.getElementById("t_m").innerHTML = m + " ";
	document.getElementById("t_s").innerHTML = s + " ";
}
setInterval(GetRTime, 0);

/***************************************************************************/
		$(document).ready(function(){
			var bool=true;
			var liLen=$("#box li").length;//li的个数
			var liWidth=$("#box li").eq(0).outerWidth(true);//一个li的宽度
			$("#box ul").css({"width":liLen*liWidth+"px"});//整个ul的宽度
			for(var i=0;i<liLen;i++){
				$("#box li").eq(i).css({"left":i*liWidth+"px"});
			}
			$("#next").click(function(){
				show()
			})
			$("#prev").click(function(){
				if(bool){
					bool=false;
					if(liLen>4){
						for(var i=0;i<liLen-1;i++){
							$("#box li").eq(i).animate({"left":liWidth*(i+1)+"px"},function(){
								bool=true;
							})
						}
						$("#box li").eq(liLen-1).prependTo("#box ul").css({"left":-liWidth+"px"}).animate({"left":0+"px"},function(){
							bool=true;
						});	
					}
				}
			})
			$("#prev,#next").mouseover(function(){
				clearInterval(lun)
			})
			$("#prev,#next").mouseout(function(){
				lun=setInterval(function(){
					show(1)
				},3000)
			})
			function show(){
				if(bool){
					bool=false;
					if(liLen>4){
						$("#box li").eq(0).animate({"left":-liWidth+"px"},function(){
							$("#box li").eq(0).css({"left":liWidth*(liLen-1)+"px"}).appendTo("#box ul");
							bool=true;
						});
						for(var i=1;i<liLen;i++){
							$("#box li").eq(i).animate({"left":liWidth*(i-1)+"px"},function(){
								bool=true;
							})
						}
					}
				}
			}
			var lun=setInterval(function(){
				show()
			},3000)

		})

/********************************************************************************/
$(function(){
    $(".pro_d dl dd").click(function(){
        $(this).addClass("on").siblings().removeClass("on"); //切换选中的按钮高亮状态
        var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
        $(".all > ul").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
    });
});