var adress = document.querySelectorAll("#address");
var del = document.querySelectorAll(".delete"); 
for(var i=0;i<adress.length;i++){
	adress[i].index = i;
	adress[i].onclick = function(){
		
		for(var j=0;j<adress.length;j++){
			adress[j].innerHTML = "设为默认";
		}
		
		this.innerHTML =  "默认地址";
	}
	
	del[i].index = i;
	del[i].onclick = function(){
		
		this.parentNode.parentNode.remove();
		
	}
	
}