(function () {

    var popupSingleton = {

        $el: $('[data-image-popup]'),

        listenEvents: function () {

            this.$el.find('[data-save]').on('click', this.save.bind(this));
        },

        show: function (data, user) {

            this.model = data;

            this.user = user;

            this.render();

            this.$el.removeClass('hidden');
        },

        render: function () {

            this.$el.find('[data-large]').prop('src', this.model.webformatURL);

            this.$el.find('[data-input-user]').val(this.model.user)
        },

        save: function () {

            var changedData = {image: this.model};

            changedData.image.user = this.$el.find('[data-input-user]').val();

            $.ajax({

                url: '/images/' + this.model.id,

                type: 'PUT',

                data: changedData,

                success: function () {

                    this.user.html("User: " + this.$el.find('[data-input-user]').val());

                    this.$el.addClass('hidden');

                }.bind(this),

                error: function (error) {

                    alert(error.statusText);
                }
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