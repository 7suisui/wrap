$(function() {
	$(".top_left label>input").click(function() {
		if($(this).prop("checked")) {
			$(this).parent('label').addClass("on");
		} else {
			$(this).parent('label').removeClass("on");
		}
	})
	$(".delivery label>input").click(function() {
		if($(this).prop("checked")) {
			$(this).parent('label').addClass("on");
		} else {
			$(this).parent('label').removeClass("on");
		}
	})
	$("li").bind("click",function(){
		$(this).siblings().find("img").removeClass("on");
		$(this).find("img").addClass("on");
	})
	$("a").bind("click",function(){
		$(this).siblings().find("span").removeClass("on");
		$(this).find("span").addClass("on");
	})
})




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
	$("#reply8").click(function(){
		if($("#rep8").css("display") == "none"){
			$("#rep8").show();
		}else{
			$("#rep8").hide();
		}
	})
	$("#reply9").click(function(){
		if($("#rep9").css("display") == "none"){
			$("#rep9").show();
		}else{
			$("#rep9").hide();
		}
	})
})

/*************************************************************/
$(document).ready(function(){
				$.getScript("js/sheng.js",function(respons,status,xhr){
					console.log(status)
					if(status == "success"){
						for(var i=0;i<sheng.length;i++){
							$("<option/>").val(sheng[i].ProID).text(sheng[i].name).appendTo("#sheng");
						}
					}
				})
				$("#sheng").change(function(){
					var val = $(this).val();
					$.getScript("js/city.js",function(responsd,status,xhr){
						$("#city >option:gt(0)").remove();
						if(status == "success"){
							var Array = [];
							for(var i=0;i<city.length;i++){
								if(city[i].ProID == val){
									Array.push(city[i]);
								}
							}
							for(var i=0;i<Array.length;i++){
								$("<option/>").val(Array[i].CityID).text(Array[i].name).appendTo("#city");
							}
						}
					})
				})
				$("#city").change(function(){
					var val = $(this).val();
					console.log(val)
					$.getScript("js/xian.js",function(responsd,status,xhr){
						$("#xian >option:gt(0)").remove();
						if(status == "success"){
							var Array = [];
							for(var i=0;i<xian.length;i++){
								if(xian[i].CityID == val){
									Array.push(xian[i]);
								}
							}
							for(var i=0;i<Array.length;i++){
								$("<option/>").val(Array[i].Id).text(Array[i].DisName).appendTo("#xian");
							}
						}
					})
				})
			})




$(function() {
	$(".text_box").keyup(function() {
		//如果输入非数字，则替换为''，如果输入数字，则在每4位之后添加一个空格分隔
		this.value = this.value.replace(/[^\d]/g, '');
	})
});