/**
 * Created by olhadovhal on 12/10/16.
 */

document.addEventListener('DOMContentLoaded', function () {
//     // Task 1 Theme change

    var theme = document.querySelectorAll('.theme');
    theme.forEach(function (element) {
        element.addEventListener('click', function (e) {
            var curr = e.target.getAttribute('class');
            curr = curr.substring(6,curr.length);
            if (curr !== document.body.getAttribute('class')) {
                document.body.setAttribute('class', curr);

            }
        });
    });


    // TODO Task 2 Contact popup

    var popup = document.querySelector('.popup');
    var button = document.querySelector('.button');
    var close = document.querySelector('.popup-close');

    button.addEventListener('click', function () {

        window.popup.show(this.model);

    });

    close.addEventListener('click', function () {
        window.popup.hide(this.model);
    })

    //Task 3 Date in copyright

    document.querySelector('.copyright').innerHTML = '&copy; ' + new Date().getFullYear() + ' Dovgal Olya';

    //Task 4 Editable input

    function editable_text(el) {
        var element = el.target;
        var editable;

        if (element.classList.contains('text')) {
            editable = document.createElement('input');
            element.innerHTML = '';
            editable.value = element.innerHTML;
            element.appendChild(editable);
            editable.focus();

            editable.onblur = function () {
                element.innerHTML = editable.value;
            }
        }

    }

    document.addEventListener('dblclick', function (e) {
        editable_text(e);
    });

    //Task 5 JSON

    var req = new XMLHttpRequest();

    req.open('GET', 'js/data.json', true);

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {

            var jsonData = JSON.parse(req.response);
            var name = document.querySelector('.text.name');
            var post = document.querySelector('.text.post');
            var description = document.querySelector('.text.description');

            name.innerHTML = jsonData.name;
            post.innerHTML = jsonData.post;
            description.innerHTML = jsonData.description;
        }


    };
    req.send();

});