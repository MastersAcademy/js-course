(function () {
    var editTodo = {
        preview : $('[data-todo]'),

        editItem: function (event) {
            var target = event;

            var textfield = document.createElement('input');
            textfield.value = target.data.todo;
            target.tpl.preview.text(null);
            target.tpl.preview.append(textfield);
            textfield.focus();
            textfield.onblur = function () {
                 target.data.todo = textfield.value;
                 target.tpl.preview.text(textfield.value);
                 textfield.remove();
                window.appData.edit(target.data);

            };

        }
    };
    window.editTodo = editTodo;
})();
