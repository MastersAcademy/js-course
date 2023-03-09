document.addEventListener("DOMContentLoaded", function () {
    var date = new Date();
    var year = date.getFullYear(); 
    document.querySelector("#year").innerHTML = year;
});