function Task(options) {

    this.row = $(options.row);

    this.title = options.title;

    this.id = options.id;

    this.completed = options.completed;

    this.cells = {
        id: this.row.find('[data-id]'),
        title: this.row.find('[data-title]'),
        complete : this.row.find('[data-complete]'),
        remove : this.row.find('[data-delete]')
    };

    this.render();

    this.listenEvents();

}
Task.prototype.render = function () {

    this.cells.id.text(this.id);

    this.cells.title.text(this.title);

    this.completed && this.row.addClass('completed');

};

Task.prototype.remove = function () {

    this.updateTasks(true);

    this.offEvents();

    this.row.remove();

};

Task.prototype.complete = function () {

    this.completed = !this.completed;

    this.completed ? this.row.addClass('completed') : this.row.removeClass('completed');

    this.updateTasks();

};

Task.prototype.startEditingTitle = function () {

    var thisTask = this,
        input = $('<input type="text" value="'+this.title+'">');

    this.cells.title.empty();

    this.cells.title.append(input);

    input.focus();

    input.bind('keyup', function (e) {
        event.keyCode === 13 && thisTask.finishEditingTitle(e);
    });

    input.blur(this.finishEditingTitle.bind(this));

};

Task.prototype.finishEditingTitle = function (e) {

    this.title = this.cells.title.find('input').val();

    this.cells.title.html(this.title);

    this.updateTasks();
};

Task.prototype.updateTasks = function (remove) {

    var thisTask = this,
        allTasks = window.taskApp.tasks;

    allTasks.forEach(function (task, index) {

        if (task.id == thisTask.id) {
            remove ? allTasks.splice(index, 1) : allTasks.splice(index, 1, thisTask)
        }

    });

    localStorage.setItem('tasks', JSON.stringify(allTasks));
    window.taskApp.countTotal();

};

Task.prototype.listenEvents = function () {

    this.cells.complete.on('click', this.complete.bind(this));

    this.cells.remove.on('click', this.remove.bind(this));

    this.cells.title.on('dblclick', this.startEditingTitle.bind(this));

};

Task.prototype.offEvents = function () {

    this.cells.complete.off('click', this.complete.bind(this));

    this.cells.remove.off('click', this.remove.bind(this));

    this.cells.title.off('dblclick', this.startEditingTitle.bind(this));

};

