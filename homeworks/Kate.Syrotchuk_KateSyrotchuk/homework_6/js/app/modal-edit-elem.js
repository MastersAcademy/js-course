(function () {

    var modalEditElem = {

        $el : $('[data-modal-edit]'),

        $input : $('[data-edit-input]')[0],
        $closeBtn : $('[data-close-modal]'),
        $cancelBtn : $('[data-cancel-edit]'),
        $saveBtn : $('[data-save-edit]'),


        listenEvents : function () {

            this.$closeBtn.on('click', this.hide.bind(this));

            this.$cancelBtn.on('click', this.hide.bind(this));

            this.$saveBtn.on('click', this.edit.bind(this))

        },

        hide : function () {

            this.$el.addClass('hidden');

        },

        show : function (data) {

            this.model = data;

            this.$input.value = this.model.value;

            this.$el.removeClass('hidden');

        },

        edit : function () {

            this.model.value = this.$input.value;

            window.lStorage.editElem(this.model);

            window.editableEl.model.value = this.model.value;

            window.editableEl.render();

            this.$el.addClass('hidden');
        }
    };

    window.modalEdit = modalEditElem;

    modalEditElem.listenEvents();

})();
