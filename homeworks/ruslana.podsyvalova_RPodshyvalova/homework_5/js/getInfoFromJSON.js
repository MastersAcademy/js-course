document.addEventListener("DOMContentLoaded", function () {
    $.getJSON("data/person.json", function(data) {
	$.each(data, function( key, value ) {
            switch (key) {
                case "name": 
                    $("h1").text(value);
                    break;
                case "position": 
                    $("h3").text(value);
                    break;
                case "info": 
                    $(".maintxt").text(value);
                    break;        
                case "nets" : 
                    var array = [];
                    var indx = 0;
                    array = value;
                    array.forEach(function(item) {
                        var selector = "#item_" + ++indx + " a.linktopage"; 
                        $(selector).text(item["name"]);
                        $(selector).attr("href", item["link"]);
                    });
                    break;    
            }
  	});
    });
});

