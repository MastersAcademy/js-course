function TaskManager() {

    this.tasks = this.getTasks();

    this.manager = $('[data-task-manager]');

    this.row = this.manager.find('[data-task]').get(0).outerHTML;

    this.tasks.length && this.buildRows();

    this.countTotal();

}

TaskManager.prototype.buildRows = function () {

    var taskManager = this,
        table       = taskManager.manager.find('.table');

    table.empty();

    this.tasks.forEach(function (task) {

        taskManager.renderNewItem(taskManager.createNewTask(task))

    });

};

TaskManager.prototype.renderNewItem = function (task) {

    this.manager.find('.table').append(task.row);

};

TaskManager.prototype.createNewTask = function (data) {

    return new Task({

        row: this.row,

        title: data.title || data.get('title'),

        id: data.id || (this.tasks.length ? this.getNextId() : 1),

        completed: data.completed || false

    });

};

TaskManager.prototype.getTasks = function () {

    return JSON.parse(localStorage.getItem('tasks')) || [];

};

TaskManager.prototype.addNew = function (event, form) {

    event.preventDefault();

    var formData = new FormData(form),
        newTask  = this.createNewTask(formData);

    if (newTask.title) {

        this.tasks.length === 0 && this.manager.find('.table').empty();

        this.tasks.push(newTask);

        localStorage.setItem('tasks', JSON.stringify(this.tasks));

        this.renderNewItem(newTask);

        this.countTotal();

    } else {

        alert('please post something!');

    }

};

TaskManager.prototype.getNextId = function () {

    return Math.max.apply(null, this.tasks.map(function(task) {

        return task.id

    })) + 1;

};

TaskManager.prototype.countTotal = function () {

    var allTasks = this.tasks,
        $element = $('[data-count]');

    $element.find('[data-total]').text(allTasks.length);

    $element.find('[data-completed]').text(getCompleted());

    $element.find('[data-left]').text(getLeft());

    function getCompleted() {

        return allTasks.filter(function(task) {

            return task.completed === true

        }).length

    }

    function getLeft() {

        return allTasks.filter(function(task) {

            return task.completed === false

        }).length

    }

};
