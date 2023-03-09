$( document ).ready(function() {
    var $listEl = $('.todo-list'),
        $newBtn = $('#new-todo-item'),
        list = [],
        id = 0;

    $newBtn.on('click', function() {
        var item = {id: id++};
        list.push(item);
        item.el = $('<li><input type="text"><button data-delete="' + item.id + '">Delete</button></li>');
        $listEl.append(item.el);
    });

    $listEl.on('click', '[data-delete]', function(e) {
        var id = $(e.target).data('delete');
        list.some(function(item, idx) {
            if(item.id == id) {
                $(e.target).parent().remove();
                list.splice(idx, 1);
                return true;
            }
        });
    });
});