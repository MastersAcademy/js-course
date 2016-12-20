function TodoItem(template, modelData, index) {

    this.$element = $(template);

    this.model = modelData;

    this.index = index;

    this.template = {

        item: this.$element,

        content: this.$element.find('[data-todolist-item-content]'),

        removeBtn: this.$element.find('[data-todolist-item-close]')
    };

    this.render();

    this.listenEvents();
}

TodoItem.prototype = {

    render: function () {

        this.template.content.text(this.model.todoItem);

        this.template.item.attr("data-todolist-item-id", this.index);

        this.model.checked ? this.template.item.addClass('checked') : this.template.item.removeClass('checked');
    },

    listenEvents: function () {

        this.template.removeBtn.on('click', this.remove.bind(this));

        this.$element.on('click', this.check.bind(this));
    },

    remove : function () {

        this.offEvents();

        window.todoApp.LocalStorageManager.removeFromLocaleStorage(this.index);
    },

    check : function () {

        window.LocalStorageManager.editLocalStorage(this.index);
    },

    offEvents : function () {

        this.template.removeBtn.off('click', this.remove.bind(this));
    }
};