document.addEventListener('DOMContentLoaded', function () {
    var list = document.getElementById('myUL');
    if(localStorage.getItem('list')) {
        populateList();
    } else {
        localStorage.setItem('list', JSON.stringify([]));
    }

    function getListFromStorage() {
        var list = localStorage.getItem('list');
        return JSON.parse(list);
    }

    function removeFromStorage(listItem) {
        var list = getListFromStorage();

        list.forEach(function (el, index, array) {
            if (el.date == listItem.dataset.date) {
                array.splice(index, 1);

            }
        });

        updateLocalStorage(list);

    }

    function editStorage(listItem) {
        var list = getListFromStorage();

        list.forEach(function (el, index, array) {
            if (el.date == listItem.dataset.date) {
                array[index].value = listItem.childNodes[0].nodeValue;
                array[index].checked = listItem.classList.contains('checked'); //true or false
            }
        });

        updateLocalStorage(list);

    }

    function addToStorage(listItem) {
        var list = getListFromStorage();
        var today = new Date();
        var newItem = {};

        listItem.dataset.date = '' + today.valueOf();

        newItem.date = '' + today.valueOf();
        newItem.value = listItem.childNodes[0].nodeValue;
        newItem.checked = false;

        list.push(newItem);
        updateLocalStorage(list);
    }

    function updateLocalStorage(newList) {
        localStorage.setItem('list', JSON.stringify(newList));
    }

    function reloadLocalStorage() {
        var listToLS = [];
        for (var j = 0; j < list.childNodes.length; j++) {
            var item = {};
            item.date = list.childNodes[j].dataset.date;
            item.value = list.childNodes[j].childNodes[0].nodeValue;
            item.checked = list.childNodes[j].classList.contains('checked');

            listToLS.push(item);
        }
        updateLocalStorage(listToLS);
    }


    function populateList() {
        var listItems = getListFromStorage();

        list.innerHTML = '';
        for (var i = 0; i < listItems.length; i++) {
            var li = document.createElement("li");
            li.dataset.date = listItems[i].date;
            li.appendChild(document.createTextNode(listItems[i].value));
            if (listItems[i].checked === true) {
                li.className = 'checked';
            }
            addElement(list, li);
        }

        countItems();
    }

    var sourceDragged;

    function isbefore(sourceDragged, targetUnder) {
        if (sourceDragged.parentNode == targetUnder.parentNode) {
            for (var current = sourceDragged; current; current = current.previousSibling) {
                if (current === targetUnder) {
                    return true;
                }
            }
        }
        return false;
    }

    function dragEnter(e) {
        if (isbefore(sourceDragged, e.target)) {
            e.target.parentNode.insertBefore(sourceDragged, e.target);
        }
        else {
            e.target.parentNode.insertBefore(sourceDragged, e.target.nextSibling);
        }
    }

    function dragStart(e) {
        sourceDragged = e.target;
    }

    function dragEnd() {
        reloadLocalStorage();
    }


    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
            editStorage(ev.target);

            countItems(list);
        }
    }, false);

    var addButton = document.getElementById("addBtn");

    addButton.addEventListener('click', function () {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var text = document.createTextNode(inputValue);
        li.appendChild(text);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            addElement(list, li);
        }
        document.getElementById("myInput").value = "";

        addToStorage(li);

    }, false);

    function addElement(target, el) {
        el.draggable = true;
        el.addEventListener('dragstart', dragStart, false);
        el.addEventListener('dragend', dragEnd, false);
        el.addEventListener('dragenter', dragEnter, false);
        createCloseButton(el);
        createEditButton(el);
        target.appendChild(el);
    }

    function createCloseButton(nodeList) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        nodeList.appendChild(span);
        span.addEventListener('click', function (ev) {
            if(ev.target.tagName === 'SPAN') {
                var li = this.parentElement;
                var ul = li.parentElement;

                removeFromStorage(li);
                ul.removeChild(li);

                countItems(list);
            }
        }, false);
    }

    var modal = document.getElementById('myModal');

    var closeModal = document.getElementById('close-modal');

    closeModal.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    var editedList = '';
    var saveBtn = document.getElementById('saveChange');
    var cancelBtn = document.getElementById('cancelModal');

    cancelBtn.addEventListener('click', function (ev) {
        modal.style.display = "none";
    });

    saveBtn.addEventListener('click', function (ev) {
        var text = document.createTextNode(this.parentElement.querySelector('input').value);
        editedList.removeChild(editedList.childNodes[0]);
        editedList.insertBefore(text, editedList.firstChild);

        editStorage(editedList);
        modal.style.display = "none";
    });

    function createEditButton(nodeList) {
        var button = document.createElement("BUTTON");
        var txt = document.createTextNode("Edit");
        button.className = "editBtn";
        button.appendChild(txt);
        nodeList.appendChild(button);

        button.addEventListener('click', function (ev) {
            modal.style.display = "block";
            var input = modal.querySelector('input');
            input.value = this.parentElement.childNodes[0].nodeValue;
            editedList = this.parentElement;
        }, false);
    }

    function countItems() {
        var count = 0;
        var summary = document.getElementById("summary");
        if (summary.firstChild) {
            summary.removeChild(summary.firstChild)
        }
        if (list.childNodes.length !== 0) {
            for (var i = 0; i < list.childNodes.length; i++) {
                count += (list.childNodes[i].className === "checked") ? 1 : 0;
            }
            var text = document.createTextNode("Count of checked items are : " + count);
            summary.appendChild(text);
        }
    }
});