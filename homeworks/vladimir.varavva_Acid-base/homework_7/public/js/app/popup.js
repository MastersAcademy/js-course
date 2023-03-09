(function () {


    var popupSingleton = {

        $el: $('[data-image-popup]'),

        saveBtn: $('[data-save]'),

        listenEvents: function () {

            this.saveBtn.on('click', this.hide.bind(this));

            this.saveBtn.on('click', this.saveUser.bind(this));

        },

        show: function (data) {

            this.model = data;

            this.render();

            this.$el.removeClass('hidden');
        },

        render: function () {

            this.$el.find('[data-large]').prop('src', this.model.webformatURL);

            this.$el.find('[data-user-change]').prop('value', this.model.user);

        },

        hide: function () {

            this.$el.addClass('hidden');

        },

        saveUser: function () {

            this.user = window.imagesApp.image.nextElementSibling;

            this.newUser = this.$el.find('[data-user-change]').val();

            this.model.user = this.newUser;

            $.ajax({

                    type: 'PUT',

                    url: '/images/:id',

                    data: { image: this.model }

                })
                .done(function() {

                    this.user.innerHTML = this.newUser;

                }.bind(this))

            .fail(function (error) {

                alert(error.statusText);

            });

        }

    };

    if (window.imagesApp) {

        window.imagesApp.popup = popupSingleton;

    } else {

        window.imagesApp = {

            popup: popupSingleton

        };

    }

    popupSingleton.listenEvents();

})();
