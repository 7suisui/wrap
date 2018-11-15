$(function(){
	$("form label>input").click(function() {
		if($(this).prop("checked")) {
			$(this).parent('label').addClass("on");
		} else {
			$(this).parent('label').removeClass("on");
		}
	})
})
$(function() {

	/**获取注册信息**/

	var obj = localStorage.getItem("userlogin");
	userofTo = JSON.parse(obj),
		logIpone = null,
		logpass = null;
	if(userofTo != null) {
		logIpone = userofTo.myPhone;
		logpass = userofTo.password;
	}
	
	
	//自动登录
	var localReg = localStorage.getItem('userlogin')
	localReg = JSON.parse(localReg)
	var loginAuto = localStorage.getItem('loginAutoDate')
	if(loginAuto){
		loginAuto = JSON.parse(loginAuto)
		if(loginAuto.checked){
			var checkPhone = loginAuto.loginIpone,
			    checkPassword = loginAuto.loginPwd,
			    check = loginAuto.checked
			$("#myPhone").val(checkPhone)
			$("#password").val(checkPassword)
			$('#loginInput').prop("checked",check)
			if($('#loginInput').is(":checked")) {
				$('#loginInput').parent().addClass("active");
			} else {
				$('#loginInput').parent().removeClass("active");
			}
			var timr = setTimeout(function(){
				window.location.href = "user.html"
				setLogin(checkPhone, checkPassword)
			},5000)
			if($("#myCode").val()==""){
				clearTimeout(timr)
			}
		}
	}
	
	//手机号验证
	$("#myPhone").blur(function() {
			var checkPhone = $("#myPhone").val(),
				phone = /^1[34578]\d{9}$/

			if(phone.test(checkPhone)) {

				$(this).css("border-color", "green")

				if(localReg.myPhone == checkPhone) {

					$('#phone').text("该号码可以使用！").css({
						"color": "green",
						"display": "block"
					})
				} else {
					$(this).focus()
					$(this).css("border-color", "red")
					$('#phone').text("没有该手机号码！请注册！！！！").css({
						"color": "red",
						"display": "block"
					})
				}
			} else {
				$(this).focus()
				$(this).css("border-color", "red")
				$('#phone').text("手机号码格式不对，请重新输入！！！！").css({
					"color": "red",
					"display": "block"
				})
			}
		})
	//密码验证
	$("#password").blur(function() {
			var checkPassword = $("#password").val()
			var password = /^([a-z0-9_-]){6,12}$/;
			if(checkPassword != "") {
				if(password.test(checkPassword)) {
					
					if(checkPassword == logpass) {
						$(this).css("border-color", "green")
						$('#word').text("密码正确！").css({
							"color": "green",
							"display": "block"
						})
					} else {
						$(this).focus()
						$(this).css("border-color", "red")
						$('#word').text("密码输入错误").css({
							"color": "red",
							"display": "block"
						})
					}
				} else {
					$(this).focus()
					$(this).css("border-color", "red")
					$('#word').text('密码由字母、数字、下划线组成，6-8位').css({
						"color": "red",
						"display": "block"
					})
				}
			} else {
				$(this).focus()
				$(this).css("border-color", "red")
				$("#word").text("密码不能为空！").css({
					"color": "red",
					"display": "block"
				})
			}
		})
	

	
	var bool = false;
	
	//表单验证提交
	$("#login").click(function() {
		var checkPhone = $("#myPhone").val()
		var checkPassword = $("#password").val()
		var checkAuto = $('#loginInput').prop("checked")
		if(checkPhone == '' || checkPassword == '') {
			alert('请将登录信息填完整哦！')
			return false;
		} else {
			if(checkAuto) {
				setAutoLogin(checkPhone, checkPassword,checkAuto)
				
			}else{
				setLogin("", "",checkAuto)
			}
			setLogin(checkPhone, checkPassword)
		}
	})

	/***设置本地存储***/
	function setAutoLogin(checkPhone, checkPassword,check) {//自动登录存储
		console.log(123)
		var loginAutoDate = {
			loginIpone: checkPhone,
			loginPwd: checkPassword,
			checked:check
		};
		localStorage.setItem("loginAutoDate", JSON.stringify(loginAutoDate));
	
	}
	function setLogin(checkPhone, checkPassword) {//登录存储
		var loginDate = {
			loginIpone: checkPhone,
			loginPwd: checkPassword
		};
		localStorage.setItem("loginDate", JSON.stringify(loginDate));
	
	}

})
/********************************************/
