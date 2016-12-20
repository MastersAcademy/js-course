(function () {

    window.InputAdding = {

        input: $('[data-input-text]'),

        addButton: $('[data-add-button]'),

        listenEvents: function () {

            this.addButton.on('click', this.addElement.bind(this));

            this.input.on('keydown', this.addElementOnEnter.bind(this));
        },

        addElementOnEnter : function (event) {

            if (event.keyCode === 13) {

                this.addElement();
            }
        },

        addElement: function () {

            if (this.input.val() === '') {

                alert("You must write something!");

            } else {

                window.LocalStorageManager.addToLocalStorage(this.input.val());
            }

            this.input.val('');

            new TodoList();
        }
    };

    InputAdding.listenEvents();
})();