(function () {
    var createItem = {

        textarea: $('[data-text-area]'),

        addBtn: $('[data-add]'),
        id : 1,
        listenEvents: function () {
            this.addBtn.on('click', this.addItem.bind(this));
        },
        addItem: function () {
            if (!this.textarea.val() == ''){
                var item = {todo: this.textarea.val(), done: false, id: this.id++};
                window.appData.addItem(item);
                window.todoListApp.todoList.createTodoItem(item);
                this.textarea.val(null);
            }else{
                alert('Please fill in the field!');
            }
            window.countTodo.updateCount();
        }

    };
    window.createItem = createItem;
    createItem.listenEvents();
})();