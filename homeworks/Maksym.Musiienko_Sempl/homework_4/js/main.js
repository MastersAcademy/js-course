document.addEventListener('DOMContentLoaded', function () {

	document.getElementById("black").addEventListener("click", function(){
		document.getElementById("body").style.background = "#293d3d";
	});

	document.getElementById("gray").addEventListener("click", function(){
		document.getElementById("body").style.background = "#e0ebeb";
	});
	
	document.getElementById("text").addEventListener("click", function(){
		document.getElementById("text").style.display = "none";
		document.getElementById("inarea").style.display = "flex";
	});
	
	var d = new Date();
	var y = d.getFullYear();
	var m = d.getMonth();
	var n = d.getDate();    
    
    document.getElementById("copyrigth").innerHTML = "&copy;"+ n + "." + m + "." + y + " Max Musiienko";
    
	
});
function targOn(event){
	var x = event.target.className;
	
	if (x != "inarea" && x != "text" && x != "contact"){
		document.getElementById("text").style.display = "flex";
		document.getElementById("inarea").style.display = "none";
		document.getElementById("popup1").style.display = "none";
	}
}

	