document.addEventListener("DOMContentLoaded", function() {
    var data = new Date();
    var year;
    year = data.getFullYear();
    document.querySelector(".data_year").innerHTML = year; 
});