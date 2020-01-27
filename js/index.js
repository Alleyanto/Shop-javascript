
var myIndex = 0;
slide();

function load(){
	details_highlight();
	loadNewCar();
}

function slide(){
	if(window.location.href == "file:///C:/Users/LagadeauR/Desktop/html/shop/index.html"){
		carousel();
	}
}

function carousel() {
  var i;
  var x = document.getElementsByClassName("carslides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}


function car(data){
	localStorage.setItem("carnumber", data);
	window.location.assign("details.html");
}

function details_highlight(){
	var carnumber = localStorage.getItem("carnumber");
	if(carnumber != null){
		localStorage.removeItem("carnumber");
		var car1_detail = document.getElementById("car"+carnumber+"-detail");
		car1_detail.style.backgroundColor = "#3A3A3A";
		car1_detail.style.color = "#fff";
	}
}


function newCar(){
	var model = document.getElementById("model").value;
	var price = document.getElementById("price").value;
	var miles = document.getElementById("miles").value;
	
	if(model != null && price != null && miles != null){
		localStorage.setItem("model", model);
		localStorage.setItem("price", price);
		localStorage.setItem("miles", miles);
	}
}


function loadNewCar(){
	var car4_detail_list = document.getElementById("car4-detail-list");
	
	var modelLi = document.getElementById("model");
	var priceLi = document.getElementById("price");
	var milesLi = document.getElementById("miles");
	
	contentModel = document.createTextNode(localStorage.getItem("model"));
	modelLi.appendChild(contentModel);
	contentPrice = document.createTextNode(localStorage.getItem("price"));
	priceLi.appendChild(contentPrice);
	contentMiles = document.createTextNode(localStorage.getItem("miles"));
	milesLi.appendChild(contentMiles);
	
	car4_detail_list.appendChild(modelLi);
	car4_detail_list.appendChild(priceLi);
	car4_detail_list.appendChild(milesLi);
	
	removeItem();
}


function removeItem(){
	localStorage.removeItem("model");
	localStorage.removeItem("price");
	localStorage.removeItem("miles");
}
