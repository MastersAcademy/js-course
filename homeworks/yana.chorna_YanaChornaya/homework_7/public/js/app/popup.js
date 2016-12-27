(function () {

    var popupSingleton = {

        $el : $('[data-image-popup]'),

        $close : $('[data-close]'),

        listenEvents : function () {

            this.$close.on('click', this.hide.bind(this));

            this.$el.find('[data-save-user]').on('click', this.changeUser.bind(this))

        },

        show : function (data, user) {

            this.user = user;

            this.model = data;

            this.render();

            this.$el.removeClass('hidden');
        },

        render : function () {

            this.$el.find('[data-large]').prop('src', this.model.webformatURL);

            this.$el.find('[data-input-user]').val(this.model.user)

        },

        hide : function () {

            this.$el.addClass('hidden');

        },


        changeUser : function () {

            var newUser = this.$el.find('[data-input-user]').val();

            this.model.user = newUser;

            $.ajax({

                    type : 'PUT',

                    url : '/images/' + this.model.id,

                    data : {

                        image : this.model

                    }

                })
                .done(function (response) {

                    this.$el.addClass('hidden');

                    this.user.text('User: ' + newUser);

                }.bind(this))

                .fail(function (error) {

                    alert(error.statusText);

                });

        }

    };

    if(window.imagesApp){

        window.imagesApp.popup = popupSingleton;

    }
    else{

        window.imagesApp = {

            popup : popupSingleton

        }

    }

    popupSingleton.listenEvents();

})();