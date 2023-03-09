(function () {

    var popupSingleton = {

        $el: $('[data-image-popup]'),

        listenEvents: function () {

            this.$el.on('click', this.hide.bind(this));

            this.$el.find('[data-user-save]').on('click', this.userEdit.bind(this))

        },

        show: function (data, userTpl) {

            this.userTpl = userTpl;

            this.model = data;

            this.render();

            this.$el.removeClass('hidden');
        },

        render: function () {

            this.$el.find('[data-large]').prop('src', this.model.webformatURL);

            this.$el.find('[data-user-edit]').val(this.model.user);

        },

        hide: function (e) {

            var target = $(e.target);

            if (target.attr('data-image-popup') !== undefined) {

                this.$el.addClass('hidden');

            }

        },

        userEdit: function () {

            var imageModel = this.model;

            var newUser = this.$el.find('[data-user-edit]').val();

            imageModel.user = newUser;

            $.ajax({

                type: 'PUT',

                url: '/images/' + this.model.id,

                data: {
                    image: imageModel
                }

            })
                .done(function () {

                    this.$el.addClass('hidden');

                    this.userTpl.text('Author: ' + newUser);

                }.bind(this))

                .fail(function (error) {

                    alert(error.statusText);

                });
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