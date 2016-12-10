document.addEventListener('DOMContentLoaded', function () {

    // Themes
    var themeItems = document.querySelectorAll('.themes li');
    themeItems.forEach(function (el) {
        el.addEventListener('click', function (e) {
            var theme = e.target.getAttribute('class');
            if (theme !== document.body.getAttribute('class')) {
                document.body.setAttribute('class', theme);
            }
        });
    });

    // Contact popup
    var button = document.querySelector('.btn');
    var wrap = document.querySelector('.popup-wrap');
    var close = document.querySelector('.popup-close');
    button.addEventListener('click', function () {
        wrap.classList.add('open');
    });
    close.addEventListener('click', function () {
        wrap.classList.remove('open');
    });

    // Set a system year to the footer of the page
    document.querySelector('.year').innerHTML = new Date().getFullYear() + '';

    // Edit text on the page (works with elements that have a class of 'editable')
    document.addEventListener('dblclick', function (e) {
        var el = e.target, field;

        if (el.classList.contains('editable')) {
            if (el.tagName === 'P') {
                field = document.createElement('textarea');
                field.setAttribute('rows', '10');
                field.setAttribute('cols', '45')
            } else {
                field = document.createElement('input');
            }

            field.value = el.innerHTML;
            el.innerHTML = '';
            el.appendChild(field);
            field.focus();

            field.onblur = function () {
                el.innerHTML = field.value;
            }
        }
    });

    // Set a data to the page
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.status == 200) {
            var data = JSON.parse(String(xhr.response));
            for (var prop in data) {
                if (data.hasOwnProperty(prop)) {
                    document.getElementsByClassName(prop)[0].innerText = data[prop];
                }
            }
        }
    };
    xhr.open('GET', 'js/data.json', false);
    xhr.send();

});
