function TodoList () {

    this.$el = $('[data-todos]');
    this.todoTpl = this.$el.find('[data-todo-item]').get(0).outerHTML;
    this.$el.empty();
    this.model = window.appData.data;
    this.buildList();


}

TodoList.prototype = {

    buildList : function () {
        this.model.forEach(this.createTodoItem.bind(this));
        window.countTodo.count();

    },

    createTodoItem : function (todoData) {
        var newItem = new TodoItem(this.todoTpl, todoData);
        this.$el.append(newItem.$el);
    }
};
