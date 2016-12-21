function ImageItem(tpl, modelData) {

    this.$el = $(tpl);

    this.model = modelData;

    this.tpl = {

        preview : this.$el.find('[data-preview]'),

        removeBtn : this.$el.find('[data-delete]')

    };

    this.render();

    this.listenEvents();

}

ImageItem.prototype = {

    render : function () {

        this.tpl.preview.prop('src', this.model.previewURL);

    },

    listenEvents : function () {

        this.tpl.preview.on('click', this.showLarge.bind(this));

        this.tpl.removeBtn.on('click', this.remove.bind(this));

    },

    offEvents : function () {

        this.tpl.preview.off('click', this.showLarge.bind(this));

        this.tpl.removeBtn.off('click', this.remove.bind(this));

    },

    showLarge : function () {

        window.imagesApp.popup.show(this.model);

    },

    remove : function () {

        this.offEvents();

        this.removeItemFromServer();

    },

    removeItemFromServer : function () {

        $.ajax({

            type : 'DELETE',

            url : '/images/' + this.model.id

        })
        .done(function (response) {

            this.$el.remove();

        }.bind(this))

        .fail(function (error) {

            alert(error.statusText);

        });


    }

};