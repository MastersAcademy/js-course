document.addEventListener('DOMContentLoaded', function () {

    var blackTheme = document.querySelector('.circle.black');
    var lightTheme = document.querySelector('.circle.gray');

    blackTheme.addEventListener('click', blackThemeOn, false);
    lightTheme.addEventListener('click', lightThemeOn, false);

    var links = document.querySelectorAll('head link');
    var link;

    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('data-theme') == 'theme') {
            link = links[i];
        }
    }

    function blackThemeOn(ev) {
        if (ev.target.tagName != 'DIV') {
            return;
        }

        if (link) {
            link.setAttribute('href', 'css/themes/blackTheme.css');
        }
    }

    function lightThemeOn(ev) {
        if(ev.target.tagName != 'DIV') {
            return;
        }

        if (link) {
            link.setAttribute('href', 'css/themes/lightTheme.css');
        }
    }

});
