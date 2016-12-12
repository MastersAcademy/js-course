function app() {}

/******* task1 *******/
app.changePageTheme = function(theme) {
    if (document.body.classList.length && document.body.classList[0] != theme) {
        document.body.classList.remove(document.body.classList[0]); // remove other class if exist
    };
    document.body.classList.toggle(theme);
};

/******* task2 *******/
app.popup = function (title, body) {
    var fader = document.getElementById('fader');

    title = document.querySelector(title) ? document.querySelector(title).innerText : title;
    body  = document.querySelector(body)  ? document.querySelector(body).innerText  : body;

    fader.querySelector('.popup-head__title').textContent = title;
    fader.querySelector('.popup-body').textContent = body;

    fader.style.display = (fader.style.display === 'none') ? '' : 'none';

};
app.popupClose = function () {
    var fader = document.getElementById('fader');
    fader.style.display = (fader.style.display === 'none') ? '' : 'none';
};

document.addEventListener("DOMContentLoaded", function(event) {

    /******* task3 *******/
    document.querySelector('.date-now').innerText = new Date().getFullYear();

    /******* task4 *******/
    (function () {

        var textChange = [].slice.call(document.querySelectorAll('.js-text-change'));

        textChange.forEach(function(element){
            element.addEventListener('dblclick', function () {
                replaceTextToInput(element);
            });
        });

        function replaceTextToInput(element) {

            var textarea = element.classList.contains('js-text-change-textarea'),
                input    = textarea ? document.createElement("textarea") : document.createElement("input");
            !textarea && (input.type = "text");
            textarea && (input.style.height = element.clientHeight + 10 + 'px');
            input.value = element.textContent;
            element.classList.add('js-text-change--active');
            element.textContent = '';
            element.appendChild(input);
            input.focus();

            ("click keyup".split(" ")).forEach(function(e){
                document.addEventListener(e,closeEditingInput,false);
            });
        }

        function closeEditingInput(event) {

            if (event.keyCode === 13 || (event.type == 'click' && !event.target.classList.contains('js-text-change'))) {
                var textChange = [].slice.call(document.querySelectorAll('.js-text-change--active'));
                textChange.forEach(function(element){
                    var input = element.classList.contains('js-text-change-textarea')
                        ? element.querySelector('textarea')
                        : element.querySelector('input');
                    element.textContent = input.value;
                    element.classList.remove('js-text-change--active');
                    input.remove();
                });
                document.removeEventListener('click', closeEditingInput);
            }
        }

    })();

    /******* task5 *******/
    (function () {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', './data/artem.json', true);
        xhr.onreadystatechange = function() {
            return (xhr.readyState != 4) ? false : buildPage(JSON.parse(xhr.responseText));
        };
        xhr.send(null);

        function buildPage(data) {

            var textChange = [].slice.call(document.querySelectorAll('.js-text-change'));

            textChange.forEach(function(element){

                var textToReplace = element.textContent.replace(/{{|}}/ig,'');

                for (key in data) {
                    (key === textToReplace) && (element.textContent = data[key])
                }

            });

        }

    })();

});

