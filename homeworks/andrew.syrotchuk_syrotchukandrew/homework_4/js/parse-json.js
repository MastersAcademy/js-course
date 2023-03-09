document.addEventListener('DOMContentLoaded', function () {
    var about = document.getElementById('about');
    readTextFile("storage/page-data.json", function(text){
        var data = JSON.parse(text);
        var about = document.getElementById('about');
        about.appendChild(document.createTextNode(data['page-data'].about));
        var name_surname = document.getElementById('name-surname');
        name_surname.appendChild(document.createTextNode(data['page-data']['name-surname']));
        var position = document.getElementById('position');
        position.appendChild(document.createTextNode(data['page-data'].position));
        var short_info = document.getElementById('short-info');
        short_info.appendChild(document.createTextNode(data['page-data']['short-info']));
    });
}, false);

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}