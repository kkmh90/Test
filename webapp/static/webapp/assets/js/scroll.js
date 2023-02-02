window.addEventListener("wheel", function(e){
console.log("wheel")
e.preventDefault();
},{passive : false});

const menuHeight = document.querySelector("#header").offsetHeight;
const location1 = document.querySelector("#hero").offsetTop;
const location2 = document.querySelector("#about").offsetTop;
const location3 = document.querySelector("#team").offsetTop;
const location4 = document.querySelector("#contact").offsetTop;

let location_list = [location1, location2, location3, location4]

$(window).on("wheel", function(e){

	if(e.originalEvent.deltaY > 0){
	    for i in location_list:{
	        if(i == 3) return;
	    }
	    else (
	    i++;
	    window.scrollTo({top:i - menuHeight, behavior:'smooth'});
	}
	else if(e.originalEvent.deltaY < 0){
		for i in location_list:{
	        if(i == 0) return;
	    }
	    else (
	    i--;
	    window.scrollTo({top:i - menuHeight, behavior:'smooth'});
	}
}