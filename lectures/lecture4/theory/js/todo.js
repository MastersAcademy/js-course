document.addEventListener('DOMContentLoaded', function() {
    var listEl = document.querySelector('.todo-list'),
        newBtn = document.querySelector('#new-todo-item'),
        list = [],
        id = 0;

    newBtn.addEventListener('click', function() {
        var item = {id: id++};
        list.push(item);
        item.el = document.createElement('li');
        item.el.innerHTML = '<input type="text"><button data-delete="' + item.id + '">Delete</button>';
        listEl.appendChild(item.el);
    });

    listEl.addEventListener('click', function(e) {
        var id;
        if(id = e.target.getAttribute('data-delete')) {
            list.some(function(item, idx) {
                if(item.id == id) {
                    item.el.parentNode.removeChild(item.el);
                    list.splice(idx, 1);
                    return true;
                }
            });
        }
    });
});