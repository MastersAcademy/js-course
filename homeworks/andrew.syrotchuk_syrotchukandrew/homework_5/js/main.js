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
    var flag = false;
    var sourceDragged;

    function show() {
        var todos = get_todos();
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
            span = document.createElement("SPAN");
            xMark = document.createTextNode("Edit");
            span.appendChild(xMark);
            span.className = "edit";
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
    }

    function add(todoItem) {
        var todos = get_todos();
        todos.push({'todoItem': todoItem, 'checked': false});
        localStorage.setItem('todo', JSON.stringify(todos));
        show();
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
        show();
    }

    function remove(id) {
        var todos = get_todos();
        todos.splice(id, 1);
        localStorage.setItem('todo', JSON.stringify(todos));
        show();
    }

    unorderedList.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI' && flag === false) {
            var id = ev.target.getAttribute('id').substr(5);
            edit(id);
        } else if (ev.target.classList.contains('close') && flag === false) {
            id = ev.target.parentNode.getAttribute('id').substr(5);
            remove(id);
        } else if (ev.target.classList.contains('edit') && flag === false) {
            flag = true;
            var li = ev.target.parentNode;
            var div = document.createElement('DIV');
            div.setAttribute('id', 'popup');
            var input = document.createElement('INPUT');
            input.value = li.firstChild.textContent;
            var buttonCancel = document.createElement('BUTTON');
            buttonCancel.appendChild(document.createTextNode('Cancel'));
            buttonCancel.addEventListener('click', function () {
                div.remove();
                flag = false;
                show();
            }, false);
            var buttonSave = document.createElement('BUTTON');
            buttonSave.appendChild(document.createTextNode('Save'));
            buttonSave.addEventListener('click', function (event) {
                edit(li.getAttribute('id').substr(5), event.target.parentNode.firstChild.value);
                flag = false;
                div.remove();
            }, false);
            input.setAttribute('type', 'text');
            div.appendChild(input);
            div.appendChild(buttonCancel);
            div.appendChild(buttonSave);
            document.body.appendChild(div);
        }
    }, false);


    var divAddingElement = document.getElementById('myDIV');
    divAddingElement.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'SPAN' && flag === false) {
            newElement();
        }
    }, false);


    var inputAddingElement = document.getElementById('myInput');
    inputAddingElement.addEventListener('keydown', function (ev) {
        if (ev.keyCode === 13 && flag === false) {
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
        var para = document.getElementById('count');
        if (para.firstChild) {
            para.removeChild(para.firstChild);
        }
        if (selectedList !== allListItems) {
            var t = document.createTextNode("You have " + selectedList + " from " +
                allListItems + " selected items in the to do list.");
        } else {
            t = document.createTextNode("You have managed all your to do list.");
        }
        para.appendChild(t);
    }

    show();
}, false);