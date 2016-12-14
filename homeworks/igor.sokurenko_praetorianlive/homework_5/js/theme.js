document.addEventListener("DOMContentLoaded", function () {
    var ballBlack = document.querySelector("#black_point");
    ballBlack.addEventListener("click", function () {
        document.querySelector("body").style.background = "#1e1e1e";
    });
    var ballGray = document.querySelector("#silver_point");
    ballGray.addEventListener("click", function () {
	document.querySelector("body").style.background = "white";
	document.querySelector("h1, h2, h3").style.color = "black";    
    });
});
