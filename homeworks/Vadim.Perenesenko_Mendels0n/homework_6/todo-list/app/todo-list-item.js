function TodoItem(tpl,data) {

    this.$el = $(tpl);
    this.data = data;
    this.tpl = {
        preview : this.$el.find('[data-todo]'),
        checkbox : this.$el.find('[data-done]'),
        removeBtn : this.$el.find('[data-delete]')
    };
    this.render();
    this.listenEvents();
}

TodoItem.prototype = {

    render : function () {
        this.tpl.preview.text(this.data.todo);
        this.$el.addClass(this.data.done ? 'done' : '');
    },
    done : function () {
        if(this.data.done == true){
            this.data.done = false;
            this.$el.removeClass('done');
        }else{
            this.data.done = true;
            this.$el.addClass('done');
        }
        window.appData.edit(this.data);
        window.countTodo.updateCount();
    },
    todoEdit : function () {
        window.editTodo.editItem(this);
    },

    listenEvents : function () {
        this.tpl.removeBtn.on('click', this.remove.bind(this));
        this.tpl.preview.on('dblclick',this.todoEdit.bind(this));
        this.tpl.checkbox.on('click',this.done.bind(this));

    },

    offEvents : function () {
        this.tpl.removeBtn.on('click', this.remove.bind(this));
        this.tpl.preview.on('dblclick',this.todoEdit.bind(this));
        this.tpl.checkbox.on('click',this.done.bind(this));

    },
    remove : function () {
        this.conf = confirm('Remove todo?', '');
        if(this.conf){
            this.$el.remove();
            window.appData.deleteItem(this.data);
            this.offEvents();
        }
        window.countTodo.updateCount();
    }

};
