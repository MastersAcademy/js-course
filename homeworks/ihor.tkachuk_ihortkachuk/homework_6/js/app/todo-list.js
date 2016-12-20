function TodoList(initialData) {
    this.todos = initialData || [];
    this.todoIndex = this.todos.length || 1;
    this.list = $('[data-todo-list]');
    this.todoTpl = this.list.find('[data-todo-item]').get(0).outerHTML;
    this.addBtn = $('[data-todo-add]');
    this.input = $('[data-todo-input]');

    this.storageInit();
    this.listenEvents();
}

TodoList.prototype = {

    storageInit: function () {
        window.todoApp.storage.init('todos', this.todos);
        var model = window.todoApp.storage.get();
        this.buildList(model);
    },

    buildList: function (data) {
        this.list.empty();
        data.forEach(this.createTodo.bind(this));
    },

    listenEvents: function () {
        this.addBtn.on('click', this.addTodo.bind(this));
    },

    createTodo: function (todo) {
        var newTodo = new TodoItem(this.todoTpl, todo);
        if (newTodo.data.completed) {
            newTodo.tpl.checkbox.prop('checked', true);
            this.list.append(newTodo.item);
        } else {
            this.list.prepend(newTodo.item);
        }

        var model = window.todoApp.storage.get();
        window.todoApp.stats.count(model);
    },

    addTodo: function () {
        if (this.input.val()) {
            this.todoIndex = this.todoIndex + 1;
            var todo = {
                id: this.todoIndex,
                text: this.input.val(),
                completed: false
            };
            window.todoApp.storage.add(todo);
            var newTodo = new TodoItem(this.todoTpl, todo);
            this.list.prepend(newTodo.item);
            this.input.val('');

            var model = window.todoApp.storage.get();
            window.todoApp.stats.count(model);
        }
    }

};
