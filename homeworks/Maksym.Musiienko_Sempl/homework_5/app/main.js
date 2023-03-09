
document.getElementById('query').onkeyup = function (e) {

    e = e || window.event;

    if (e.keyCode === 13) {

        myFunction();

    }

    return false;

}

document.getElementById('query').onfocus = function(){this.value = ""};

function myFunction(){

	document.getElementById('item').style.left = "0px";

	var query = document.getElementById('query').value;

	if (query == ""){
		document.getElementById('query').value = "Type something!";
		return;
	}

	console.log(query);

	window.appData=[];

	var API_KEY = '4054837-5108641c8fad4111ecd9cd5df';

	var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(query);

	$.getJSON(URL, function(data){

    if (parseInt(data.totalHits) > 0){
    	
   		$.each(data.hits, function(i, hit){ 

   			window.appData.push({"prev":hit.previewURL, "high":hit.webformatURL});
   			
   		});   		 		
   		if(window.imagesApp){

   		    window.imagesApp.imagesList = new ImagesList();

   		}
   		else{

   		    window.imagesApp = {

   		        imagesList : new ImagesList()

   		    };

   		}     	
    }	     	
        
    else     
        alert('No hits');
    
	});  


	
};

 
