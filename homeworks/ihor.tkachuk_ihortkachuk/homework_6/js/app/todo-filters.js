function TodoFilters() {
    this.filtersList = $('[data-todo-filter]');

    this.listenEvents();
}

TodoFilters.prototype = {
    listenEvents: function () {
        this.filtersList.on('click', this.filter.bind(this));
    },

    filter: function (e) {
        var model = window.todoApp.storage.get();
        var target = $(e.target);
        var filtered;
        target.siblings().removeClass('active');
        target.addClass('active');

        if (target.text() === 'Active') {
            filtered = model.filter(function (item) {
                return item.completed == false;
            });
            window.todoApp.todoList.buildList(filtered);
        } else if (target.text() === 'Completed') {
            filtered = model.filter(function (item) {
                return item.completed == true;
            });
            window.todoApp.todoList.buildList(filtered);
        } else {
            window.todoApp.todoList.buildList(model);
        }
    }
};

if (window.todoApp) {
    window.todoApp.filters = new TodoFilters();
} else {
    window.todoApp = {
        filters: new TodoFilters()
    }
}
