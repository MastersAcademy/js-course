document.addEventListener('DOMContentLoaded', function () {

    var element;
    var editableElements = document.getElementsByClassName('editable');
    editableElements = Array.prototype.slice.call(editableElements, 0);

    for (var i = 0; i < editableElements.length; i++) {
        editableElements[i].addEventListener('dblclick', textDblClicked, false);
    }

    function textDblClicked(event) {
        element = event.target;
        var textFromEditableElement = element.textContent;
        var fieldForEditing = (textFromEditableElement.length > 25) ? document.createElement('TEXTAREA') : document.createElement('INPUT');
        fieldForEditing.value = textFromEditableElement;
        element.parentNode.replaceChild(fieldForEditing, element);
        fieldForEditing.focus();
        fieldForEditing.addEventListener('blur', editableTextBlurred, false);
    }

    function editableTextBlurred(event) {
        element.textContent = event.target.value;
        event.target.parentNode.replaceChild(element, event.target);
    }
}, false);