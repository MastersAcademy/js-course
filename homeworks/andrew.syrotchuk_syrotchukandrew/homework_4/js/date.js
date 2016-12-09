document.addEventListener('DOMContentLoaded', function () {
    var today = new Date();
    var year = today.getFullYear();
    var footer = document.querySelector('footer');
    footer.innerHTML = ('<p> &copy; ' + year + ' Andrew Syrotchuk </p>');
}, false);