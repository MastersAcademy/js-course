(function() {
    var main = document.querySelector('main');
    var content = main.querySelector('.content');
    var contentH1 = content.querySelector('h1');
    var contentH3 = content.querySelector('h3');
    var contentP = content.querySelector('p');
    var footer = document.querySelector('footer');
    var footerP = footer.querySelector('p');
    contentH1.addEventListener('dblclick', h1Edit);
    contentH3.addEventListener('dblclick', h3Edit);
    contentP.addEventListener('dblclick', pEdit);
    footerP.addEventListener('dblclick', footerPEdit);

    function editText(DOM) {
        var DOMText = DOM.innerHTML;
        var input = document.createElement("input");
        input.type = "text";
        input.value = DOMText;
        var parent = DOM.parentNode;
        var temp = parent.replaceChild(input, DOM);
        input.focus();
        input.onblur = function() {
            DOM.innerHTML = input.value;
            parent.replaceChild(DOM, input);
        };
    }

    function editLotOfText(DOM) {
        var DOMText = DOM.innerHTML;
        var textarea = document.createElement('textarea');
        textarea.innerHTML = DOMText;
        textarea.cols = 50;
        textarea.rows = 10;
        var parent = DOM.parentNode;
        var temp = parent.replaceChild(textarea, DOM);
        textarea.focus();
        textarea.onblur = function() {
            DOM.innerHTML = textarea.value;
            parent.replaceChild(DOM, textarea);
        };
    }

    function h1Edit() {
        editText(contentH1);
    }

    function h3Edit() {
        editText(contentH3);
    }

    function pEdit() {
        editLotOfText(contentP);
    }

    function footerPEdit() {
        editText(footerP);
    }
})();