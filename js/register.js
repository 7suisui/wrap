$(function(){
	$("form label>input").click(function() {
		if($(this).prop("checked")) {
			$(this).parent('label').addClass("on");
		} else {
			$(this).parent('label').removeClass("on");
		}
	})
	
	//表单验证
			
			//会员名
				$("#username").blur(function(){
					var checkPhone = $("#username").val(),
						name = /([a-z0-9_-])/,
						localReg = localStorage.getItem('userlogin')
					localReg = JSON.parse(localReg)
					if(name.test(checkPhone)){
						
						$(this).css("border-color","green")
						
						if(localReg==null||localReg.username!=checkPhone){
							
							$('#name').text("该昵称可以使用！").css({"color":"green","display":"inline-block"})
						}else{
							$(this).focus()
							$(this).css("border-color","red")
							$('#name').text("该昵称已被注册！").css({"color":"red","display":"inline-block"})
						}
					}else{
						$(this).focus()
						$(this).css("border-color","red")
						$('#name').text("昵称不可以为空！！！！").css({"color":"red","display":"inline-block"})
					}

						
				})
				
			//密码验证
			$("#password").blur(function(){
			 	var checkPassword = $("#password").val()
			    var password =/^([a-z0-9_-]){6,12}$/;
					if(!password.test(checkPassword)){
						$(this).css("border-color","red")
						$("#word").text("请输入密码！！").css({"color":"red","display":"inline-block"})
					}else{
						$(this).css("border-color","green")
						$("#word").text("密码正确！！").css({"color":"green","display":"inline-block"})
					}
			 })
			 
			//确认密码验证
				$("#password_code").blur(function(){
				 	var checkPassword = $("#password").val()//密码
				 	var checkpassword_sure = $("#password_code").val()//确认密码
				 		if(checkPassword !== ""){
				 			if(checkPassword!=checkpassword_sure){
				 				$(this).css("border-color","red")
				 				$("#confirm").text("密码不相符，请重新输入！").css({"color":"red","display":"inline-block"})
				 			}else{
				 				$(this).css("border-color","green")
				 				$("#confirm").text("密码正确！！").css({"color":"green","display":"inline-block"})
				 			}
				 		}else {
				 			$(this).css("border-color","red")
				 			$("#confirm").text("确认密码不能为空！！").css({"color":"red","display":"inline-block"})
				 		}
				 })
			//手机号验证
				
				$("#myPhone").blur(function(){
					var checkPhone = $("#myPhone").val(),
						phone = /^1[34578]\d{9}$/,
						localReg = localStorage.getItem('userlogin')
					localReg = JSON.parse(localReg)
					if(phone.test(checkPhone)){
						
						$(this).css("border-color","green")
						
						if(localReg==null||localReg.myPhone!=checkPhone){
							
							$('#phone').text("该号码可以使用！").css({"color":"green","display":"inline-block"})
						}else{
							$(this).focus()
							$(this).css("border-color","red")
							$('#phone').text("该号码已被注册！").css({"color":"red","display":"inline-block"})
						}
					}else{
						$(this).focus()
						$(this).css("border-color","red")
						$('#phone').text("请输入手机号码！！！！").css({"color":"red","display":"inline-block"})
					}

						
				})
				
			//邮箱验证
				$("#E-mail").blur(function(){
					var checkemail = $("#E-mail").val(),
						email =  /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
						localReg = localStorage.getItem('userlogin')
					localReg = JSON.parse(localReg)
					if(email.test(checkemail)){
						
						$(this).css("border-color","green")
						
						if(localReg==null||localReg.E-mail!=checkE-mail){
							
							$('#email').text("该邮箱可以使用！").css({"color":"green","display":"inline-block"})
						}else{
							$(this).focus()
							$(this).css("border-color","red")
							$('#email').text("该邮箱已被注册！").css({"color":"red","display":"inline-block"})
						}
					}else{
						$(this).focus()
						$(this).css("border-color","red")
						$('#email').text("请输入邮箱！！！！").css({"color":"red","display":"inline-block"})
					}

						
				})
			
			//表单验证提交
			$("#register").click(function(){
				var checkname = $("#username").val()
				var checkPhone = $("#myPhone").val()
				var checkCode = $("#con_btm").val()
				var checkPassword = $("#password").val()
				var checkConfirm = $("#password_code").val()
				var checkemail = $("#E-mail").val()
				var checked = $("#con_btm").prop("checked")
				if(checkname== '' || checkPhone== '' || checkCode== '' || checkPassword=='' || checkConfirm=='' || checkemail=='' || !checked || checkPassword!=checkConfirm)
				{
					alert('请将注册信息填完整哦！')
					return false;
				}else{
					setLocal(checkPhone,checkPassword,checkConfirm,checkemail);
    				return true;
				}

		
			})
})
/***设置本地存储***/
	   	function setLocal(checkname,checkPhone,checkPassword,checkConfirm,checkemail){
	   		userlogin = 
	   		{
	   			myPhone:checkPhone,
	   			password:checkPassword,
	   			okpwd:checkConfirm
	   		};
	   		localStorage.setItem("userlogin",JSON.stringify(userlogin));
	   		
	   	}
/**********************************************/












