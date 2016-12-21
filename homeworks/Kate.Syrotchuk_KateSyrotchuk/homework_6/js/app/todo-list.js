function TodoList () {

    this.$el = $('[data-list-items]');

    this.itemTpl = this.$el.find('[data-item]').get(0).outerHTML;

    this.$el.empty();

    this.model = window.lStorage.data;

    this.buildList();

}

TodoList.prototype = {

    buildList : function () {

        this.model.forEach(this.createTodoItem.bind(this));

    },

    createTodoItem : function (itemData) {

        var newItem = new TodoItem(this.itemTpl, itemData);

        this.$el.append(newItem.$el);

    }

};

