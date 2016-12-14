(function () {
	var openPopup = document.getElementById('open_popup');
	var closePopup = document.getElementById('close_popup');
	var popup = document.getElementById('popup_id');

	openPopup.onclick = function() {
    	popup.style.display = "block";
	}
	
	closePopup.onclick = function() {
    	popup.style.display = "none";
	}
	
	window.onclick = function(event) {
    	if (event.target == popup) {
        	popup.style.display = "none";
    	}
	}

})();