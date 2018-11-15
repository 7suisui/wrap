$(function(){
	$("li").bind("click",function(){
		$(this).siblings().find("a").removeClass("on");
		$(this).find("a").addClass("on");
	})
	$("li").bind("click",function(){
		$(this).siblings().find("span").removeClass("on");
		$(this).find("span").addClass("on");
	})
})
$(function() {
	$(".add").click(function() {
		var t = $(this).parent().find('input[class*=text_box]');
		t.val(parseInt(t.val()) + 1)
		if(parseInt(t.val()) >= 100) {
			t.val(99);
		}
	})
	$(".min").click(function() {
		var t = $(this).parent().find('input[class*=text_box]');
		t.val(parseInt(t.val()) - 1)
		if(parseInt(t.val()) < 1) {
			t.val(1);
		}
	})
	$(".text_box").change(function(){
						var numA = $(this).val();
						var reRex = /^[0-9]*$/;
					
						if(reRex.test(numA)){
							if(numA>99){
								numA = 99
							}if(numA<1){
								numA = 1;
							}else{
								numA = numA
							}
						}else{
							numA = 1;
						}
						$(this).val(numA);
						var tdV3 = parseInt($(this).parents(".buy").siblings("buy:nth-child(2)>em").html());
						$(this).parents(".buy").find(".total").html(tdV3*numA);
					})


})
$(function(){
			/************************图片轮播****************************/
			//点击圆点切换图片
			//定义记录当前圆点的索引号
			var current = 0;
			//定义记录当前定时器的索引号
			var cursor  = 0;
			//获取所有的图片切换圆点
		 	var list = $("#ol_circle > span");  //获取当前3个圆点的li元素
			//遍历所有的图片切换圆点
			list.each(function(index,element){
				
				$(this).mouseover(function(){
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
			setInterval(function(){
				//第三步:当cursor>=5时，重置cursor
				if(cursor >=list.length){
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
				
				},2000)
				
				
			/****实现左右箭头，完成图片切换****/
			$("#prev").click(function(){
				
				if(current <0){
					current = list.length;	//list.length == 5
				}
				
				//当用户点击上一张箭头时，希望看到的是上一张图片，而不是当前图片
				current--;
				
				//获取当前索引号对应的图片li元素，再触发它的onmouseover事件
				list.eq(current).trigger("mouseover");
			})
			
			$("#next").click(function(){
				if(current>=list.length){
					current = -1;	
				}
				//当用户点击下一张箭头时，希望看到的是下一张图片，而不是当前图片
				current++;
				//alert(current);
				list.eq(current).trigger("mouseover");
			})	
			})
					$(document).ready(function(){
			var bool=true;
			var liLen=$(".product_show li").length;//li的个数
			var liWidth=$(".product_show li").eq(0).outerWidth(true);//一个li的宽度
			$(".product_show ul").css({"width":liLen*liWidth+"px"});//整个ul的宽度
			for(var i=0;i<liLen;i++){
				$(".product_show li").eq(i).css({"left":i*liWidth+"px"});
			}
			$("#next").click(function(){
				show()
			})
			$("#prev").click(function(){
				if(bool){
					bool=false;
					if(liLen>4){
						for(var i=0;i<liLen-1;i++){
							$(".product_show li").eq(i).animate({"left":liWidth*(i+1)+"px"},function(){
								bool=true;
							})
						}
						$(".product_show li").eq(liLen-1).prependTo(".product_show ul").css({"left":-liWidth+"px"}).animate({"left":0+"px"},function(){
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
						$(".product_show li").eq(0).animate({"left":-liWidth+"px"},function(){
							$(".product_show li").eq(0).css({"left":liWidth*(liLen-1)+"px"}).appendTo(".product_show ul");
							bool=true;
						});
						for(var i=1;i<liLen;i++){
							$(".product_show li").eq(i).animate({"left":liWidth*(i-1)+"px"},function(){
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
/*******************************************************/
			$(function(){
			    $(".det_gd ul li").click(function(){
			        $(this).addClass("on").siblings().removeClass("on"); //切换选中的按钮高亮状态
			        var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
			        $(".all > div").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
			    });
			});
/***********************************************************/
$(function(){
	$("#reply1").click(function(){
		if($("#rep1").css("display") == "none"){
			$("#rep1").show();
		}else{
			$("#rep1").hide();
		}
	})
	$("#reply2").click(function(){
		if($("#rep2").css("display") == "none"){
			$("#rep2").show();
		}else{
			$("#rep2").hide();
		}
	})
	$("#reply3").click(function(){
		if($("#rep3").css("display") == "none"){
			$("#rep3").show();
		}else{
			$("#rep3").hide();
		}
	})
	$("#reply4").click(function(){
		if($("#rep4").css("display") == "none"){
			$("#rep4").show();
		}else{
			$("#rep4").hide();
		}
	})
	$("#reply5").click(function(){
		if($("#rep5").css("display") == "none"){
			$("#rep5").show();
		}else{
			$("#rep5").hide();
		}
	})
	$("#reply6").click(function(){
		if($("#rep6").css("display") == "none"){
			$("#rep6").show();
		}else{
			$("#rep6").hide();
		}
	})
	$("#reply7").click(function(){
		if($("#rep7").css("display") == "none"){
			$("#rep7").show();
		}else{
			$("#rep7").hide();
		}
	})
})
/****************************************************************/

$(function() {
	$(".text_box").keyup(function() {
		//如果输入非数字，则替换为''，如果输入数字，则在每4位之后添加一个空格分隔
		this.value = this.value.replace(/[^\d]/g, '');
	})
});
