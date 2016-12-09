(function () {
    'use strict';

    var doc = document,
        element = function(selector) {
            return doc.querySelector(selector);
        },
        addEvent = function(type, fn) {
            doc.addEventListener(type, fn);
        },
        body = element('body'),
        popup = element('.contact-popup'),
        date = element('.copyright time'),
        getDate = new Date();

    addEvent('click', changeTheme);
    addEvent('click', showPopup);
    addEvent('click', hidePopup);
    addEvent('dblclick', editText);
    addEvent('click', notEditText);
    addEvent('click', shareIt);

    // copyright date
    date.innerHTML = getDate.getFullYear();
    date.setAttribute('datetime', getDate.getFullYear());

    // theme change
    function changeTheme(e) {
        var elem = e.target,
            theme = elem.dataset.theme;
        if (theme) {
            body.dataset.theme = theme;
            popup.dataset.theme = theme;
            element('a').dataset.theme = theme;
        }
    }

    // show popup
    function showPopup(e) {
        var elem = e.target,
            selector = elem.className;
        if (selector === 'contact-btn') {
            popup.classList.add('visible');
        }
    }

    function hidePopup(e) {
        var elem = e.target,
            selector = elem.className;
        if (selector === 'contact-popup visible') {
            popup.classList.remove('visible');
        }
    }

    //edit text
    function editText(e) {
        var elem = e.target,
            area = doc.createElement('textarea');
        area.value = elem.innerHTML;
        elem.innerHTML = '';
        elem.appendChild(area);
        area.focus();
    }

    function notEditText(e) {
        var elem = e.target,
            area = element('textarea');
        if (area && elem !== area) {
            area.parentNode.innerHTML = area.value;
        }
    }

    // parse JSON
    var p = element('.about p'),
        h1 = element('.about h1'),
        h2 = element('.about h2');
    var request = new XMLHttpRequest();
    request.open('GET', '../text.JSON', true);
    request.send();
    request.onreadystatechange = function(data) {
        if (request.readyState === 4) {
            data = request.responseText;
            data = JSON.parse(data);
            p.innerHTML = data.p;
            h1.innerHTML = data.h1;
            h2.innerHTML = data.h2;
        }
    };

    // share social
    var url,
        share = {
        vkontakte: function(purl, ptitle, pimg, text) {
            url = 'http://vkontakte.ru/share.php?';
            url += 'url=' + encodeURIComponent(purl);
            url += '&title=' + encodeURIComponent(ptitle);
            url += '&description=' + encodeURIComponent(text);
            url += '&image=' + encodeURIComponent(pimg);
            url += '&noparse=true';
            share.popup(url);
        },
        facebook: function (purl, ptitle, pimg, text) {
            url = 'http://www.facebook.com/sharer.php?s=100';
            url += '&p[title]=' + encodeURIComponent(ptitle);
            url += '&p[summary]=' + encodeURIComponent(text);
            url += '&p[url]=' + encodeURIComponent(purl);
            url += '&p[images][0]=' + encodeURIComponent(pimg);
            share.popup(url);
        },
        twitter: function(purl, ptitle) {
            url = 'http://twitter.com/share?';
            url += 'text=' + encodeURIComponent(ptitle);
            url += '&url=' + encodeURIComponent(purl);
            url += '&counturl=' + encodeURIComponent(purl);
            share.popup(url);
        },
        popup: function (url) {
            window.open(url, '', 'toolbar=0,status=0,width=626,height=445');
        }
    };

    function shareIt(e) {
        var elem = e.target;
        if (elem.innerHTML === 'Vkontakte' && !elem.hasAttribute('href')) {
            share.vkontakte('https://acid-base.github.io//', 'JS Developer', '../../img/1.png', 'Vladimir Varavva');
        } else if (elem.innerHTML === 'Facebook' && !elem.hasAttribute('href')) {
            share.facebook('https://acid-base.github.io//', 'JS Developer', '../../img/1.png', 'Vladimir Varavva');
        } else if (elem.innerHTML === 'Twitter' && !elem.hasAttribute('href')) {
            share.twitter('https://acid-base.github.io//', 'JS Developer');
        }
    }

})();