function TodoItem(tpl, data) {
    this.item = tpl;
    this.data = data;
    this.tpl = {
        text: this.item.querySelector('[data-todo-text]'),
        deleteBtn: this.item.getElementsByTagName('i')[1],
        editBtn: this.item.querySelector('[data-todo-edit]'),
        checkbox: this.item.querySelector('input[type="checkbox"]')
    };
    // console.log(this.tpl.deleteBtn);
    this.render();
    this.listenEvents();
}

TodoItem.prototype = {
    render: function () {
        this.tpl.text.innerHTML = this.data.text;
    },

    listenEvents: function () {
        console.log(this.tpl.deleteBtn);
        this.tpl.deleteBtn.addEventListener('click', this.delete.bind(this));
        this.tpl.checkbox.addEventListener('change', this.complete.bind(this));
    },

    offEvents: function () {
        this.tpl.deleteBtn.removeEventListener('click', this.delete.bind(this));
        this.tpl.checkbox.removeEventListener('change', this.complete.bind(this));
    },

    complete: function () {
        console.log('completed!');
    },
    
    delete: function () {
        this.offEvents();
        console.log('delete!');
    }
};

