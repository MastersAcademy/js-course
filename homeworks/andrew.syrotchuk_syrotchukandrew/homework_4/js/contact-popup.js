document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    document.getElementById("contact-popup").addEventListener('click', function () {
        modal.style.display = "block";
    }, false);
    document.getElementsByClassName("close")[0].addEventListener('click', function () {
        modal.style.display = "none";
    }, false);
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }, false);
}, false);