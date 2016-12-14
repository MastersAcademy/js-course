(function () {
	var contactButton = document.getElementById('contact_button');
	var closeContact = document.getElementById('close_contact_button');
	var modal = document.getElementById('myModal');

	contactButton.onclick = function() {
    	modal.style.display = "block";
	}
	
	closeContact.onclick = function() {
    	modal.style.display = "none";
	}
	
	window.onclick = function(event) {
    	if (event.target == modal) {
        	modal.style.display = "none";
    	}
	}

})();