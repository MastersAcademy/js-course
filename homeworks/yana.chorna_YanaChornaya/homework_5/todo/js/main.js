document.addEventListener('DOMContentLoaded', function() {

    var list = document.querySelector('.list'),
        button = document.querySelector('.add-task'),
        textInput = document.querySelector('.input-text'),
        done = document.querySelector('.done'),
        needTodo = document.querySelector('.need-todo'),
        checkAll = document.querySelector('.check-all'),
        clear = document.querySelector('.clear'),
        filterNeed = document.querySelector('.filter-need'),
        filterDone = document.querySelector('.filter-done'),
        filterAll = document.querySelector('.filter-all');

    /*---------------------Local storage----------------------------*/

    function getList() {
        var todoArray = localStorage.getItem('todo');
        return (todoArray != null) ? JSON.parse(todoArray) : [];
    }

    /*-----------------------Add item-------------------------*/

    button.addEventListener('click', function(){
        if (textInput.value != "") {
            addItem(textInput.value);
            textInput.value = "";
        }
    });

    textInput.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
            if (textInput.value != "") {
                addItem(textInput.value);
                textInput.value = "";
            }
        }
    });

    function addItem(text) {
        var listArray = getList(),
            id = listArray.length,
            item = {
                id: id,
                text: text,
                isChecked: false
            };
        listArray.push(item);
        localStorage.setItem('todo', JSON.stringify(listArray));
        show(listArray);
    }

    function show(todo){
        list.innerHTML = '';
        [].slice.call(todo).forEach(function (item) {
            var newLi = document.createElement('li');
            newLi.setAttribute('data-id', item.id);
            newLi.innerHTML = '<span class="fa fa-check-circle-o check"></span>' + '<span class="text">' + item.text + '</span>' + '<span class="fa fa-times remove"></span>';
            if (item.isChecked == true) {
                newLi.classList.add('checkLine');
            }
            list.appendChild(newLi);
        });
        count();
    }
    /*---------------------Remove and checked--------------------------------*/

    list.addEventListener('click', function(e) {
        var listArray = getList();
        var target = e.target,
            id = target.parentElement.getAttribute('data-id');
        if (target.classList.contains('remove')) {
            [].slice.call(listArray).forEach(function (item, i) {
                if (item.id == id) {
                    listArray.splice(i, 1);
                }
            });
            localStorage.setItem('todo', JSON.stringify(listArray));
            show(listArray);
        }
        else if (target.classList.contains('check')) {
            [].slice.call(listArray).forEach(function (item) {
                if (item.id == id) {
                    item.isChecked = !item.isChecked;
                }
            });
            localStorage.setItem('todo', JSON.stringify(listArray));
            show(listArray);
        }
    });

    /*-----------------------Check all and clear all-----------------------------------*/

    checkAll.addEventListener('click', function(){
        var listArray = getList();
        [].slice.call(listArray).forEach(function(item){
            item.isChecked = true;
        });
        localStorage.setItem('todo', JSON.stringify(listArray));
        show(listArray);
    });

    clear.addEventListener('click', function(){
        localStorage.clear('todo');
        show(getList());
    });

    /*-------------------------Filter----------------------------*/

    filterNeed.addEventListener('click', function(){
        var listChildren = list.children;
        [].slice.call(listChildren).forEach(function(item){
            if (item.classList.contains('checkLine')){
                item.style.display = "none";
            }
            else {
                item.style.display = "inline-block";
            }
        });
    });

    filterDone.addEventListener('click', function(){
        var listChildren = list.children;
        [].slice.call(listChildren).forEach(function(item){
            if (!item.classList.contains('checkLine')){
                item.style.display = "none";
            }
            else {
                item.style.display = "inline-block";
            }
        });
    });

    filterAll.addEventListener('click', function(){
        var listChildren = list.children;
        [].slice.call(listChildren).forEach(function(item){
            item.style.display = "inline-block";
        });
    });

    /*-------------------------Change text-------------------------*/

    list.addEventListener('dblclick', function(e){
        var target = e.target,
            str = target.innerHTML,
            listArray = getList(),
            id = target.parentElement.getAttribute('data-id');

        if (target.classList.contains('text')) {
            target.style.display = "none";
            var input = document.createElement('INPUT');
            input.setAttribute("type", "text");
            input.setAttribute('value', str);
            input.classList.add("input-change");
            target = target.parentNode.replaceChild(input,target);
            input.focus();
            input.addEventListener('blur', function(){
                target.innerHTML = input.value;
                input = input.parentNode.replaceChild(target,input);
                target.style.display = "inline";
                [].slice.call(listArray).forEach(function(item){
                    if (item.id == id) {
                        item.text = target.innerHTML;
                    }
                });
                localStorage.setItem('todo', JSON.stringify(listArray));
                show(listArray);
                count();
            })
        }
    });

    /*------------------------Count-------------------------*/
    function count() {
        var allItems = list.children.length;
        var selectedItems = document.getElementsByClassName('checkLine').length;
        var doneItems = allItems - selectedItems;
        done.innerHTML = selectedItems;
        needTodo.innerHTML = doneItems;
    }


    show(getList());


});