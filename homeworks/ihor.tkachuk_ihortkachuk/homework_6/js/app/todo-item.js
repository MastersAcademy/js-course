function TodoItem(tpl, data) {
    this.item = $(tpl);
    this.data = data;
    this.tpl = {
        label: this.item.find('[data-todo-text]'),
        editInput: this.item.find('[data-todo-edit]'),
        deleteBtn: this.item.find('[data-todo-delete]'),
        editBtn: this.item.find('[data-todo-edit]'),
        checkbox: this.item.find('input[type="checkbox"]')
    };

    this.render();
    this.listenEvents();
}

TodoItem.prototype = {

    render: function () {
        this.tpl.label.html(this.data.text);
    },

    listenEvents: function () {
        this.tpl.deleteBtn.on('click', this.delete.bind(this));
        this.tpl.checkbox.on('change', this.complete.bind(this));
        this.tpl.label.on('dblclick', this.edit.bind(this));
        this.tpl.editInput.on('blur', this.save.bind(this));
    },

    offEvents: function () {
        this.tpl.deleteBtn.off('click', this.delete.bind(this));
        this.tpl.checkbox.off('change', this.complete.bind(this));
        this.tpl.label.off('dblclick', this.edit.bind(this));
        this.tpl.editInput.off('blur', this.save.bind(this));
    },

    edit: function () {
        this.tpl.editInput.removeClass('hidden');
        this.tpl.editInput.val(this.tpl.label.text());
        this.tpl.label.addClass('hidden');
        this.tpl.editInput.focus();
    },

    save: function () {
        this.tpl.editInput.addClass('hidden');
        this.tpl.label.text(this.tpl.editInput.val());
        this.tpl.label.removeClass('hidden');
        this.data.text = this.tpl.editInput.val();

        window.todoApp.storage.update(this.data);
    },

    complete: function () {
        this.data.completed = !this.data.completed;
        window.todoApp.storage.update(this.data);

        if (this.data.completed) {
            this.item.parent().append(this.item);
        } else {
            this.item.parent().prepend(this.item);
        }

        var model = window.todoApp.storage.get();
        window.todoApp.stats.count(model);
    },

    delete: function () {
        window.todoApp.storage.remove(this.data);

        this.offEvents();
        this.item.remove();

        var model = window.todoApp.storage.get();
        window.todoApp.stats.count(model);
    }

};

