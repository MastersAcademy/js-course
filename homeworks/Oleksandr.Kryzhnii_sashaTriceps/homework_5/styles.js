/*  change design function */

function changeDesign(theme) {
  document.body.className = theme;
}

/* function wich can show and hide pop-up   */

function showPopup(value) {
	var elem1=document.getElementsByClassName('transparency');
	for(var i=0; i<elem1.length; i++)elem1[i].style.display = value;
	var elem2=document.getElementsByClassName('popup');
	for(var i=0; i<elem2.length; i++)elem2[i].style.display = value;
}

/*  function-anonim to show correct year after copiright element */

(function() {
	var date = new Date();
	document.getElementById('year').textContent = date.getFullYear().toString();
})();

/*  function to change text */

document.addEventListener('dblclick', function(event) {

	var element = event.target;

	if (element.classList.contains('edit')) {
		var text = document.createElement('input');
	}

	text.value = element.textContent;
	element.textContent = '';
	element.appendChild(text);
	text.focus();

	text.onblur = function() {
		element.textContent = text.value;
	}
})

/*  function wich set text from JSON file  */

function showJSON() {
  var request = new XMLHttpRequest(),
  name = document.querySelector('.name'),
  post = document.querySelector('.post'),
  info = document.querySelector('.info');

  request.open('GET', 'data.json', true);
  request.send();
    
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      var data = JSON.parse(request.response);
      name.innerHTML = data.name;
      post.innerHTML = data.post;
      info.innerHTML = data.info;
    }
  }    
};
showJSON();