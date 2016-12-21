function TodoList() {

    this.$element = $('[data-todolist]');

    this.itemTemplate = this.$element.find('[data-todolist-item]').get(0).outerHTML;

    this.$element.empty();

    this.model = JSON.parse(localStorage.getItem('todo')) || [];

    this.buildList();

    this.count();
}

TodoList.prototype = {

    buildList: function () {

        this.model.forEach(this.createTodoItem.bind(this));
    },

    createTodoItem: function (itemData, index) {

        var newItem = new TodoItem(this.itemTemplate, itemData, index);

        this.$element.append(newItem.$element);
    },

    count : function () {

        var allListItems = window.LocalStorageManager.todos.length;

        var selectedList = window.LocalStorageManager.getChecked();

        $('[data-done]').html('').html(selectedList);

        $('[data-last]').html('').html(allListItems - selectedList);

        $('[data-all]').html('').html(allListItems);
    }
};
