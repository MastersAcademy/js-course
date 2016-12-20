(function () {

    window.InputAdding = {


        input: $('[data-input-text]'),

        addButton: $('[data-add-button]'),

        listenEvents: function () {

            this.addButton.on('click', this.addElement.bind(this));
        },

        addElement: function () {

            if (this.input.val() === '') {

                alert("You must write something!");

            } else {

                window.LocalStorageManager.addToLocalStorage(this.input.val());
            }

            this.input.val('');
        }
    }
})();