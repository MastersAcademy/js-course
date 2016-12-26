(function () {

    var popupSingleton;
    popupSingleton = {

        $el: $('[data-image-popup]'),

        listenEvents: function () {
            this.$el.find('[data-save]').on('click', this.editUsername.bind(this)),

            this.$el.find('[data-close]').on('click', this.hide.bind(this))

        },

        show: function (data, tplUser) {

            this.tplUser = tplUser;

            this.model = data;

            this.render();

            this.$el.removeClass('hidden');
        },

        render: function () {

            this.$el.find('[data-large]').prop('src', this.model.webformatURL);

            this.$el.find('[data-user-input]').val(this.model.user);

        },

        hide: function () {
                this.$el.addClass('hidden');
        },

        editUsername: function () {

            this.imageModel = this.model;

            this.imageModel.user = this.$el.find('[data-user-input]').val();


            $.ajax({

                type: 'PUT',

                url: '/images/' + this.model.id,

                data: {
                    image: this.imageModel
                }

            })
                .done(function () {

                    this.tplUser.text('Author of image is ' + this.imageModel.user);

                }.bind(this))

                .fail(function (error) {

                    alert(error.statusText);

                });

            this.$el.addClass('hidden');
        }


    };

    if (window.imagesApp) {

        window.imagesApp.popup = popupSingleton;

    }
    else {

        window.imagesApp = {

            popup: popupSingleton

        }

    }

    popupSingleton.listenEvents();

})();