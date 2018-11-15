$(function(){
	$("a").bind("click",function(){
		$(this).find("span").addClass("on");
		$(this).siblings().find("span").removeClass("on");
	})
	$('#play_now').click(function(){
		if (confirm("确认支付？")) {  
            window.location ="pay_success.html"
        }  
        else {  
            window.location ="pay_failure.html"
        }  
	})
})
$(function(){
    var m=29;
    var s=59;
    setInterval(function(){
        if(s<10){
            $('#time').html(m+':0'+s);
        }else{
            $('#time').html(m+':'+s);
        }
        s--;
        if(s<0){
            s=59;
            m--;
        }
    },1000)
})