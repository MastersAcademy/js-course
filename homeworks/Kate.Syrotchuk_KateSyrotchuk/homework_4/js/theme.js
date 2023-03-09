document.addEventListener('DOMContentLoaded', function () {

    var blackTheme = document.querySelector('.circle.black');
    var lightTheme = document.querySelector('.circle.gray');

    blackTheme.addEventListener('click', blackThemeOn, false);
    lightTheme.addEventListener('click', lightThemeOn, false);

    var link = document.querySelectorAll('[data-theme]')[0];

    function blackThemeOn(ev) {
        if (link) {
            link.setAttribute('href', 'css/themes/blackTheme.css');
        }
    }

    function lightThemeOn(ev) {
        if (link) {
            link.setAttribute('href', 'css/themes/lightTheme.css');
        }
    }

});
