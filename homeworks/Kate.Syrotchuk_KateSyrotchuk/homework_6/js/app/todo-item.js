function TodoItem(tpl, modelData) {

    this.$el = $(tpl);

    this.model = modelData;

    this.tpl = {

        content : this.$el.find('[data-item-content]'),

        removeBtn : this.$el.find('[data-item-delete]'),

        editBtn : this.$el.find('[data-item-edit]')

    };

    this.render();

    this.listenEvents();

}

TodoItem.prototype = {

    render : function () {

        this.tpl.content.text(this.model.value);

        this.$el.attr("data-date", this.model.date);

        this.tpl.content.addClass(this.model.checked ? 'checked' : '')

    },

    listenEvents : function () {

        this.tpl.removeBtn.on('click', this.remove.bind(this));

        this.tpl.editBtn.on('click', this.edit.bind(this));

        this.tpl.content.on('click', this.check.bind(this));

    },

    offEvents : function () {

        this.tpl.removeBtn.off('click', this.remove.bind(this));

    },

    remove : function () {

        this.offEvents();

        window.lStorage.removeElem(this.model);

        this.$el.remove();

    },

    edit : function () {

        window.editableEl = this;

        window.modalEdit.show(this.model);
    },

    check : function () {

        this.model.checked = !this.model.checked;

        this.tpl.content.toggleClass('checked');

        window.lStorage.editElem(this.model);

    }

};