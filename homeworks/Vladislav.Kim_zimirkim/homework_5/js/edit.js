(function() {
    var header = document.querySelector('header');
    var headerP = header.querySelector('p');
    var main = document.querySelector('main');
    var bio = main.querySelector('.bio');
    var bioH1 = bio.querySelector('h1');
    var bioH2 = bio.querySelector('h2');
    var bioP = bio.querySelector('p');
    var footer = document.querySelector('footer');
    var footerP = footer.querySelector('p');
    headerP.addEventListener('dblclick',EditHeadP)
    bioH1.addEventListener('dblclick', EditH1);
    bioH2.addEventListener('dblclick', EditH2);
    bioP.addEventListener('dblclick', EditBioP);
    footerP.addEventListener('dblclick', EditFooterP);

    function editText(DOM) {
        var DOMText = DOM.innerHTML;
        var input = document.createElement('input');
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

    function EditHeadP() {
        editText(headerP);
    }
    function EditH1() {
        editText(bioH1);
    }

    function EditH2() {
        editText(bioH2);
    }

    function EditBioP() {
        editLotOfText(bioP);
    }

    function EditFooterP() {
        editText(footerP);
    }
})();