//chainge theme
document.addEventListener("DOMContentLoaded", function(){
	wrap = document.getElementsByClassName('wrap')[0];
	wrap.style.backgroundColor = 'white';
	var choose_circle = document.getElementsByClassName('circle');
	for (i = 0; i < choose_circle.length; i++)
		choose_circle[i].addEventListener('click', chaingTheme);
	function chaingTheme(){
		if (this.getAttribute('id') != 'circleActive'){
			document.getElementById('circleActive').removeAttribute('id');
			this.setAttribute('id', 'circleActive');
			if (wrap.style.backgroundColor == 'white')
				wrap.style.backgroundColor = '#9DC8C9';
			else
				wrap.style.backgroundColor = 'white';
		}
	}
});

//popup
document.addEventListener('DOMContentLoaded', function(){
    var popup = document.getElementsByClassName('button')[0];
	popup.addEventListener('click', function(){
		document.getElementsByClassName('popup_background')[0].style.display = 'block';
	})
	document.getElementById('close_popup').addEventListener('click', function(){
		document.getElementsByClassName('popup_background')[0].style.display = 'none';
	})
})

//copyrights
document.addEventListener("DOMContentLoaded", copyright);
function copyright(){
	document.getElementById('copy').innerHTML = "&copy; " + new Date().getFullYear() + " Viacheslav Lepetukha";
}

//edit text
document.addEventListener("DOMContentLoaded", function edit_text(){
var text_areas = document.getElementsByTagName('p');
for(i = 0; i < text_areas.length; i++)
	text_areas[i].addEventListener('dblclick', create_textarea)
});
function create_textarea(){
	var text = document.createElement('textarea');
	text.value = this.innerHTML;
	text.setAttribute('cols', 50);
	text.setAttribute('class', 'add_area');
	this.innerHTML = '';
	this.appendChild(text);
	text.focus();
	text.onblur = function () {
		this.parentElement.innerHTML = text.value;
	}	
}

//add data from JSON
document.addEventListener("DOMContentLoaded", add_data);
function add_data (){
	var json_data = new XMLHttpRequest();
	json_data.overrideMimeType("application/json");
	json_data.open("GET", 'js/data.JSON', false);
    json_data.send(null);
    if (json_data.readyState === 4 && json_data.status == "200"){
    	var data = JSON.parse(json_data.responseText);
	    document.getElementById('title').innerHTML = data.title;
	    document.getElementById('name').innerHTML = data.name;
	    document.getElementById('post').innerHTML = data.post;
	    document.getElementById('content').innerHTML = data.content;
	}
}


