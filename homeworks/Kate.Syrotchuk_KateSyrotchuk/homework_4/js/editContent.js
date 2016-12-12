document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('dblclick', textDblClicked, false);

    function textDblClicked(event) {
        if (!event.target.classList.contains('editable')) {
            return;
        }

        var inputElement = document.createElement('TEXTAREA');
        inputElement.value = event.target.textContent;
        event.target.parentNode.insertBefore(inputElement, event.target);
        event.target.style.display = 'none';
        inputElement.focus();
        inputElement.addEventListener('blur', inputBlurred(event.target), false);
    }

    function inputBlurred(element) {
        return function(event){
            element.textContent = event.target.value;
            event.target.parentNode.removeChild(event.target);
            element.style.display = '';
        }
    }

}, false);