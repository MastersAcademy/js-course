document.addEventListener('DOMContentLoaded', function () {

    function get_todos() {
        var todos = [];
        var todos_str = localStorage.getItem('todo');
        if (todos_str != null) {
            todos = JSON.parse(todos_str);
        }

        return todos;
    }

    var unorderedList = document.querySelector('ul');
    var sourceDragged;

    function show(todos) {
        unorderedList.innerHTML = '';
        for (var i = 0; i < todos.length; i++) {
            var li = document.createElement("li");
            li.id = 'todo-' + i;
            li.draggable = true;
            li.addEventListener('dragenter', dragenter, false);
            li.addEventListener('dragstart', dragstart, false);
            li.addEventListener('dragend', dragend, false);
            li.appendChild(document.createTextNode(todos[i].todoItem));
            if (todos[i].checked === true) {
                li.className = 'checked';
            }
            var span = document.createElement("SPAN");
            var xMark = document.createTextNode("\u00D7");
            span.appendChild(xMark);
            span.className = "close";
            li.appendChild(span);
            unorderedList.appendChild(li);
        }
        count();
    }

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

    function dragenter(e) {
        if (isbefore(sourceDragged, e.target)) {
            e.target.parentNode.insertBefore(sourceDragged, e.target);
        }
        else {
            e.target.parentNode.insertBefore(sourceDragged, e.target.nextSibling);
        }
    }

    function dragstart(e) {
        sourceDragged = e.target;
    }

    function dragend() {
        var list = document.querySelector('ul');
        localStorage.clear('todo');
        todoList = [];
        for (var j = 0; j < list.childNodes.length; j++) {
            todoList.push({
                'todoItem': list.childNodes[j].firstChild.textContent,
                'checked': (
                (" " + list.childNodes[j].className + " " ).indexOf(" " + 'checked' + " ") > -1)
            });
        }
        localStorage.setItem('todo', JSON.stringify(todoList));
        show(todoList);
    }

    function add(todoItem) {
        var todos = get_todos();
        todos.push({'todoItem': todoItem, 'checked': false});
        localStorage.setItem('todo', JSON.stringify(todos));
        show(todos);
    }

    function edit(id) {
        var todos = get_todos();
        if (arguments.length > 1) {
            todos[id].todoItem = Array.prototype.slice.call(arguments, 1);
            localStorage.setItem('todo', JSON.stringify(todos));
        } else {
            todos[id].checked = !todos[id].checked;
            localStorage.setItem('todo', JSON.stringify(todos));
        }
        show(todos);
    }

    function remove(id) {
        var todos = get_todos();
        todos.splice(id, 1);
        localStorage.setItem('todo', JSON.stringify(todos));
        show(todos);
    }

    var clickOrDblclick = 0;
    unorderedList.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            var id = ev.target.getAttribute('id').substr(5);
            clickOrDblclick++;
            if (clickOrDblclick == 1) {
                setTimeout(function () {
                    if (clickOrDblclick == 1) {
                        edit(id);
                    } else {
                        var element = ev.target;
                        textDblClicked(ev);

                        function textDblClicked(event) {
                            var textFromElement = element.firstChild.textContent;
                            var newLi = document.createElement("LI");
                            newLi.style.height = '75px';
                            var inputForEditing = document.createElement('INPUT');
                            newLi.appendChild(inputForEditing);
                            inputForEditing.value = textFromElement;
                            element.parentNode.replaceChild(newLi, element);
                            inputForEditing.focus();
                            inputForEditing.addEventListener('blur', editableTextBlurred, false);
                        }

                        function editableTextBlurred(event) {
                            var textFromInput = event.target.value;
                            element.firstChild.textContent = '';
                            element.firstChild.textContent = textFromInput;
                            edit(id, textFromInput);
                            event.target.parentNode.parentNode.replaceChild(element, event.target.parentNode);
                        }
                    }
                    clickOrDblclick = 0;
                }, 300);
            }
        } else if (ev.target.classList.contains('close')) {
            id = ev.target.parentNode.getAttribute('id').substr(5);
            remove(id);
        }
    }, false);

    var divAddingElement = document.getElementById('myDIV');
    divAddingElement.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'SPAN') {
            newElement();
        }
    }, false);


    var inputAddingElement = document.getElementById('myInput');
    inputAddingElement.addEventListener('keydown', function (ev) {
        if (ev.keyCode === 13) {
            newElement();
        }
    }, false);

    function newElement() {
        var inputValue = document.getElementById("myInput").value;
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            add(inputValue);
        }
        document.getElementById("myInput").value = "";
    }

    function count() {
        var allListItems = unorderedList.childElementCount;
        var selectedList = document.getElementsByClassName('checked').length;
        var done = document.getElementById('done');
        done.innerHTML = '';
        done.innerHTML = selectedList;
        var last = document.getElementById('last');
        last.innerHTML = '';
        last.innerHTML = allListItems - selectedList;
        var all = document.getElementById('all');
        all.innerHTML = '';
        all.innerHTML = allListItems;
    }

    var buttons = document.getElementById('buttons');
    buttons.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-all')) {
            localStorage.clear('todo');
            show(get_todos());
        } else if (event.target.classList.contains('check-all')) {
            var listAllTodos = get_todos();
            var check = listAllTodos[0].checked;
            for (var i = 0; i < listAllTodos.length; i++) {
                listAllTodos[i].checked = !check;
            }
            localStorage.setItem('todo', JSON.stringify(listAllTodos));
            show(listAllTodos);
        } else if (event.target.classList.contains('show-all')) {
            show(get_todos());
        } else if (event.target.classList.contains('show-done')) {
            var checkedList = get_todos().filter(function (element) {
                return element.checked;
            });
            show(checkedList);
        } else if (event.target.classList.contains('show-last')) {
            var lastList = get_todos().filter(function (element) {
                return !element.checked;
            });
            show(lastList);
        }
    }, false);


    show(get_todos());

}, false);