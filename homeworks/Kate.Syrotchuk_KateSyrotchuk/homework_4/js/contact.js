document.addEventListener('DOMContentLoaded', function () {

    var modal = document.getElementById('myContacts');
    var btn = document.getElementById("contact-btn");
    var span = document.getElementsByClassName("close")[0];

    btn.addEventListener('click', function (ev) {
        modal.style.display = "block";
    }, false);

    span.addEventListener('click', function (ev) {
        modal.style.display = "none";
    }, false);

    window.addEventListener('click', function (ev) {
        if (ev.target == modal) {
            modal.style.display = "none";
        }
    }, false);
});
