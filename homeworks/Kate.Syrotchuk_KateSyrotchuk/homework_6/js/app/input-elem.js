(function () {

    var inputElem = {

        $el : $('[data-input]'),

        $value: $('[data-input-value]')['0'],

        $addBtn: $('[data-input-button]'),

        listenEvents : function () {

            this.$addBtn.on('click', this.addTodoItem.bind(this));

        },

        addTodoItem : function () {

            var today = new Date();

            var data = {

                value: this.$value.value,

                date: '' + today.valueOf(),

                checked : false

            };

            window.lStorage.addElem(data);

            window.todoApp.todoList.createTodoItem(data);

            this.$value.value = '';

        }
    };

    window.inputEl = inputElem;

    inputElem.listenEvents();
})();

