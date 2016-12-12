document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('header').addEventListener('click', function (ev) {
        var cssId = 'dark-css';
        if (ev.target.classList.contains('circle-black')) {
            if (!document.getElementById(cssId)) {
                var head = document.getElementsByTagName('head')[0];
                var link = document.createElement('link');
                link.id = cssId;
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = 'css/dark.css';
                head.appendChild(link);
            }
        } else if (ev.target.classList.contains('circle-gray')) {
            if (document.getElementById(cssId)) {
                head = document.getElementsByTagName('head')[0];
                head.removeChild(document.getElementById(cssId));
            }
        }
    }, false);
}, false);
