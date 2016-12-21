(function () {

    window.LocalStorageManager = {

        todos: JSON.parse(localStorage.getItem('todo')) || [],

        removeFromLocaleStorage: function (index) {

            this.todos.splice(index, 1);

            this.writeToLocalStorage(this.todos);

            new TodoList();
        },

        editLocalStorage: function (index) {

            this.todos[index].checked = !this.todos[index].checked;

            this.writeToLocalStorage(this.todos);

            new TodoList();
        },

        addToLocalStorage: function (todoItem) {

            this.todos.push({'todoItem': todoItem, 'checked': false});

            this.writeToLocalStorage(this.todos);
        },

        writeToLocalStorage: function (todos) {

            localStorage.setItem('todo', JSON.stringify(todos));
        },

        getChecked: function () {

            return this.todos.filter(function (element) {

                return element.checked === true;

            }).length;
        }
    };
})();
