if (window.todoApp) {
    window.todoApp.todoList = new TodoList(data);
} else {
    window.todoApp = {
        todoList: new TodoList(data)
    }
}
