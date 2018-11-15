//价格json
var sys_item={
	"price":"668.00",
	"sys_attrprice":{"3_13":{"price":"668.00"},
	"3_14":{"price":"868.00"},
	"3_16":{"price":"1068.00"},
	"4_13":{"price":"668.00"},
	"4_14":{"price":"868.00"},
	"4_16":{"price":"1068.00"}
	}
};


//商品规格选择
$(function(){
	$(".sys_item_spec .sys_item_specpara").each(function(){
		var i=$(this);
		var p=i.find("ul>li");
		p.click(function(){
			if(!!$(this).hasClass("selected")){
				$(this).removeClass("selected");
				i.removeAttr("data-attrval");
			}else{
				$(this).addClass("selected").siblings("li").removeClass("selected");
				i.attr("data-attrval",$(this).attr("data-aid"))
			}
			getattrprice() //输出价格
		})
	})
	
	//获取对应属性的价格
	function getattrprice(){
		var defaultstats=true;
		var _val='';
		var _resp={
			mktprice:".sys_item_mktprice",
			price:".sys_item_price"
		}  //输出对应的class
		$(".sys_item_spec .sys_item_specpara").each(function(){
			var i=$(this);
			var v=i.attr("data-attrval");
			if(!v){
				defaultstats=false;
			}else{
				_val+=_val!=""?"_":"";
				_val+=v;
			}
		})
		if(!!defaultstats){
			_mktprice=sys_item['sys_attrprice'][_val]['mktprice'];
			_price=sys_item['sys_attrprice'][_val]['price'];
		}else{
			_mktprice=sys_item['mktprice'];
			_price=sys_item['price'];
		}
		//输出价格
		$(_resp.mktprice).text(_mktprice);  ///其中的math.round为截取小数点位数
		$(_resp.price).text(_price);
	}
})