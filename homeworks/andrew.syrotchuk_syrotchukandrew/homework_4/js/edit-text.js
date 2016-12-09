document.addEventListener('DOMContentLoaded', function () {
    var editableElements = document.getElementsByClassName('editable');
    editableElements = Array.prototype.slice.call(editableElements, 0);
    for (var i = 0; i < editableElements.length; i++) {
        editableElements[i].addEventListener('dblclick', textDblClicked, false);
    }
    var element;

    function textDblClicked(event) {
        element = event.target;
        var elementWithText = event.target.textContent;
        var editableText = (elementWithText.length > 25) ? document.createElement('TEXTAREA') : document.createElement('INPUT');
        editableText.value = elementWithText;
        event.target.parentNode.replaceChild(editableText, event.target);
        editableText.focus();
        editableText.addEventListener('blur', editableTextBlurred, false);
    }

    function editableTextBlurred(event) {
        var textareaText = event.target.value;
        element.textContent = '';
        element.textContent = textareaText;
        event.target.parentNode.replaceChild(element, event.target);
        element.addEventListener('dblclick', textDblClicked, false);
    }
}, false);