$(document).ready(function(){
    PopUpHide();

    $.getJSON("info.json", function(json){
    	$("#name").text(json.name);
    	$("#spec").text(json.spec);
    	$("#text").text(json.text);

    });
});
function PopUpShow(){
    $("#popup1").css("display", "flex");
}
function PopUpHide(){
    $("#popup1").css("display", "none");
}
