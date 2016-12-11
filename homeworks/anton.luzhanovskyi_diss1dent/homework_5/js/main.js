document.addEventListener("DOMContentLoaded", function (event) {
    (function () {

        var cButton = document.getElementsByClassName("circle"),
            mButton = document.getElementsByClassName("openpopup"),
            popup = document.getElementsByClassName("popup"),
            modalclose = document.getElementsByClassName("popup-container_close"),
            year = document.getElementsByClassName("year"),
            editable = document.getElementsByClassName("editable"),
            description = document.getElementById("description"),
            i;

        /****************** Change theme *****************/

        function hasClass(element, cls) {
            return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
        }

        for (i = 0; i < cButton.length; i++) {
            (function (i) {
                cButton[i].addEventListener("click", function () {
                    if (hasClass(cButton[i], 'circle-gray')) {
                        document.getElementsByTagName('body')[0].className = ' gray';
                    } else {
                        document.getElementsByTagName('body')[0].className = ' black';
                    }
                });
            })(i);
        }

        /****************** Popup *****************/

        mButton[0].onclick = function (e) {
            e.preventDefault();
            popup[0].className = 'popup visible';
        };
        window.onclick = function (event) {
            if (event.target == popup[0]) {
                popup[0].className = 'popup invisible';
            }
        };
        modalclose[0].onclick = function () {
            popup[0].className = 'popup invisible';
        };

        /****************** Copyright *****************/

        year[0].innerHTML = new Date().getFullYear();

        /****************** Json Data *****************/

        function readJson(file, callback) {
            var getFile = new XMLHttpRequest();
            getFile.overrideMimeType("application/json");
            getFile.open("GET", file, true);
            getFile.onreadystatechange = function () {
                if (getFile.readyState === 4 && getFile.status == "200") {
                    callback(getFile.responseText);
                }
            };
            getFile.send(null);
        }

        readJson("json/bd.json", function (text) {
            var data = JSON.parse(text);
            h1.innerHTML = data.h1;
            h2.innerHTML = data.h2;
            h3.innerHTML = data.h3;
            description.innerHTML = data.description;

        });

        /******************* editable **************************/

        var arrEditable = [].slice.call(editable),
            container;

        arrEditable.forEach(function (item, i) {

            var input = document.createElement("input");
            var textarea = document.createElement("textarea");

            item.ondblclick = function () {
                item.innerHTML.length < 50 ? container = input : container = textarea;
                container.value = item.innerHTML;
                item.innerHTML = "";
                item.appendChild(container);
                container.focus();
                container.onblur = function () {
                    item.innerHTML = this.value;
                };
            };

        });

    })();

    /******************* facebook social **************************/

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.8";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

});

