
	var proList = localStorage.getItem("proList");// 定义变量接受本地存储的字符串
			proList = JSON.parse(proList);//将字符串转为JSON数据；
		console.log(proList)
		var divbox = document.getElementById("cartTbody");
		if(proList!=null){
			console.log(123)
			for(var i=0;i<proList.length;i++){
				var divs=document.createElement("ul");
				divs.innerHTML = 
					
						'<li class="td_checkbox"><div class="item_td"><label><input type="checkbox" class="check-one"/></label></div></li>'
						+'<li class="td_info">'
							+'<div class="item_td">'
								+'<div class="item_pic"><a href="pro_details.html"><img class="images" src="" alt="图片无法加载"/></a></div><div class="item_info"><div class="item_basic_info"><a href="pro_details.html">'+proList[i].title+'</a></div><div class="item_other_info"><span>类型：<em>'+proList[i].color+'</em></span><span>尺寸：<em>'+proList[i].payment+'</em></span></div></div>'
							+'</div>'
						+'</li>'
						+'<li class="td_price"><div class="item_td price">'+proList[i].price+'</div></li>'
						+'<li class="td_amount"><div class="item_td"><span class="minus"><img src="img/jian.png" /></span><input type="text" value="1" class="count"/><span class="plus"><img src="img/jia.png" /></span></div></li>'
						+'<li class="td_mun"><div class="item_td total">'+proList[i].total+'</div></li>'
						+'<li class="td_op"><div class="item_td"><a href="###" class="delete">删除</a><br /><a href="###">加入收藏</a></div></li>'
					
				divbox.appendChild(divs);
				var images = divbox.getElementsByClassName("images"),
					numInput = document.getElementsByClassName('count');
				images[i].setAttribute("src",proList[i].image);
				numInput[i].setAttribute("value",proList[i].number);
				

			}
			
		}
	
	


$(function(){
	
	function show2(ele,num){
		var localCart = localStorage.getItem('proList')
		localCart = JSON.parse(localCart)
		localCart[num].number =  ele.parent().find("input").val()
		localStorage.setItem("proList",JSON.stringify(localCart))
	}
	
	//点击全选，所有商品选中
		$(".all_select input").bind("click",function(){
			if($(this).is(":checked")){
				$(this).parent("label").addClass("on");
				$(".td_checkbox .item_td label").addClass("active");
				$('.all_select').addClass('on')
				$(".td_checkbox .item_td label input").prop("checked","checked")
				TotalPrice();
			}else{
				$(this).parent("label").removeClass("on");
				$(".td_checkbox .item_td label").removeClass("active");
				$('.all_select').removeClass('on')
				$(".td_checkbox .item_td label input").removeAttr("checked");
				TotalPrice();
			}
			
		})
		
		//全选状态下，不选商品，全选取消
		var show = function(){
			var len = $(".td_checkbox .item_td label input").length;
			var len1 = $(".td_checkbox .item_td label input:checked").length;
			return len-len1;
		}
		$(".td_checkbox .item_td label input").click(function(){
			if($(this).is(":checked")){
				$(this).parent("label").addClass("active");
			}else{
				$(this).parent("label").removeClass("active");
			}
			if(!show()){
				$('.all_select').addClass("on");
				$(".all_select input").prop("checked","checked");
			}else{
				$('.all_select').removeClass("on");
				$(".all_select input").removeAttr("checked");
			}
			TotalPrice()
		})
		
		
		
		//总价初始化为0
			var allprice = 0; // 商品总计
			$('#totalAll').html("￥"+allprice.toFixed(2))
			
			//单个商品点击删除
			$(".delete").click(function(){
			var localCart = localStorage.getItem('proList')
				localCart = JSON.parse(localCart)
				var bool = confirm("亲，你要删除吗？？")
				if(bool){
					localCart.splice($(this).parents('ul').index(),1)
					localStorage.setItem("proList",JSON.stringify(localCart))
					$(this).parents("ul").remove();
					if(!show()){//删除到最后剩下勾选商品时，全选勾上
						$("label.all_select").addClass("on");
						$(".check-all").prop("checked",true);
					}
					if($(".list_info ul").length<=0){//没有商品时，全选取消勾选
						$("label.all_select").removeClass("on");
						$(".check-all").prop("checked",false);
					}
				}
				TotalPrice()
			})
			
			//选中点击删除
			var boxs = $('.td_checkbox .item_td label input')
			$("#deleteAll").click(function(){
				var localCart = localStorage.getItem('proList')
					localCart = JSON.parse(localCart)
				var longs = $('.list_info');
				for(var k=0;k<longs.length ;k++){
						var bool = confirm("亲，你要删除吗？")
						if(bool){
							$(".list_info>ul").each(function(){
								if($(this).find(".check-one").is(":checked")){
									localCart.splice($(this).parents('ul').index(),1)
									localStorage.setItem("proList",JSON.stringify(localCart))
									$(".td_checkbox .item_td label input:checked").parents('ul').remove();
								}
							})
							longs--;
						}
						if($(".list_info ul").length<=0){//没有商品时，全选取消勾选
							$("label.all_select").removeClass("on");
							$(".check-all").prop("checked",false);
						}
					TotalPrice()
				}	
			})
			
			//点击＋按钮，实现购买数量的增加操作
			$(".plus").click(function(){
				var val = $(this).parent().find("input").val();
				val++;
				if(val>99){
					val=99;
				}
				$(this).parent().find("input").val(val);
				TotalPrice()
				show2($(this),$(this).parents('ul').index())
			})
			//点击减按钮，实现购买数量的减少操作
			$(".minus").click(function(){
				var val = $(this).parent().find("input").val();
				val--;
				if(val<=0){
					val=1;
				}
				$(this).parent().find("input").val(val);
				TotalPrice()
				show2($(this),$(this).parents('ul').index())
			})
			//购买商品数量输入判断
			$('.count').change(function(){
				if(/^[1-9]+[0-9]*$/.test(this.value)){
					$(this).val(this.value)
					if(this.value>99){
						$(this).val(99)
					}
				}else{
					$(this).val(1)
				}
				TotalPrice()
				show2($(this),$(this).parents('ul').index())
			})
		window.onload = function(){
			TotalPrice()
		}

		//计算金额
		function TotalPrice(){
			var pro_num = document.querySelectorAll(".td_amount input");//商品数量
			var price = document.querySelectorAll(".price");//单价
			var inlineCheckbox = document.querySelectorAll(".td_checkbox input");//单选框
			var price_all = document.querySelectorAll(".total");//小计
			
			var sum = 0;
			for(var i=0;i<inlineCheckbox.length;i++){
				var pri = price[i].innerHTML;
				var pro = pro_num[i].value;
				var total = parseInt(pri.replace(/￥/," ")) * parseInt(pro);
				price_all[i].innerHTML = total.toFixed(2);				
				if(inlineCheckbox[i].checked){
					var pri = price[i].innerHTML;
					var pro = pro_num[i].value;
					var total = parseFloat(pri.replace(/￥/," ")) * parseFloat(pro);
					sum = sum + total;
				}
			}
			document.getElementById("totalAll").innerHTML = sum.toFixed(2);
		}
})
	
			
