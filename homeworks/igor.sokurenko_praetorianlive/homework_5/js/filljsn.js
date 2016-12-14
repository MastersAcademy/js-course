document.addEventListener("DOMContentLoaded", function() {
    $.getJSON("json/data.json", function(data) {
        $.each(data, function(type, description) {
            if (type === "name") {
                document.querySelector("h1").innerHTML = description;
            }
            if (type === "position") {
                document.querySelector("h3").innerHTML = description;
            }
            if (type === "description") {
                document.querySelector(".memo").innerHTML = description;
            }
            if (type === "contacts") {
                for (var i = 0; i < description.length; i++) {
                    document.querySelector("#link" + (i+1)).innerHTML = description[i][0];
                    document.querySelector("#link" + (i+1)).href = description[i][1];                    
                }
            }
        });
    });   
});