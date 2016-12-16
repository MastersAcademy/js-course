function TodoList(todos) {
    this.todos = todos;
    this.list = document.querySelector('[data-todo-list]');
    this.todoTpl = this.list.querySelector('[data-todo-item]');
    this.addBtn = document.querySelector('[data-todo-add]');
    this.input = document.querySelector('[data-todo-input]');

    this.list.children[0].remove();

    this.buildList();
    this.listenEvents();
}

TodoList.prototype = {
    buildList: function () {
        this.todos.forEach(this.createTodo.bind(this));
    },

    listenEvents : function () {
        this.addBtn.addEventListener('click', this.addTodo.bind(this));
    },
    
    createTodo: function (todo) {
        var newTodo = new TodoItem(this.todoTpl, todo);
        this.list.appendChild(newTodo.item.cloneNode(true));
    },

    addTodo: function () {
        if (this.input.value) {
            var me = this;
            var newTodo = new TodoItem(this.todoTpl, {
                id: me.todos.length++,
                text: me.input.value,
                completed: false
            });
            this.list.insertBefore(newTodo.item.cloneNode(true), this.list.children[0]);
            this.input.value = '';
            console.log(newTodo);
        }
    }
        
};
