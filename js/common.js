$(function(){
	if(localStorage.getItem('loginDate')!=null && localStorage.getItem('loginDate')!= undefined){
		var loginDate = localStorage.getItem('loginDate')
		loginDate = JSON.parse(loginDate)
		var local = window.location.href
		if(loginDate == undefined){//如果本地存储数据不存在
			$('.header_top .header_tl a:nth-child(1)').html("<a href='login.html'>登录</a>")
			$('.header_top .header_tl a:nth-child(2)').html("<a href='reg.html'>注册</a>")
		}else{
			$('.header_top .header_tl a:nth-child(1)').html("<a href='javascript:;'>"+loginDate.loginIpone+"</a>")
			$('.header_top .header_tl a:nth-child(2)').html("<a href='"+local+"' class='exit'>安全退出</a>")
		}
		
	}
	$('.exit').click(function(){
		localStorage.removeItem("loginDate")
	})
	
})


