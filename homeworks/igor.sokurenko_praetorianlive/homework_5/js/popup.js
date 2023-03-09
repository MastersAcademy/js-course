document.addEventListener("DOMContentLoaded", function() { 
    function popUpShow(){
        $("#window_popup").show();
    }
    function popUpHide(){
        $("#window_popup").hide();
    }
    popUpHide();
    var button = document.querySelector("#contact_me_button");
    button.addEventListener("click", function() {
        popUpShow();
    });
    var buttonPopup = document.querySelector("#closepopup");
    buttonPopup.addEventListener("click", function() {
        popUpHide();
    });
});