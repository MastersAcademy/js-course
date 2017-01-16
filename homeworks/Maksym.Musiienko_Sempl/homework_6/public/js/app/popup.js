(function () {

    var popupSingleton = {

        $el : $('[data-image-popup]'),

        listenEvents : function () {

            // this.$el.on('click', this.hide.bind(this)),
            this.$el.find('[data-submit]').on('click',this.editUser.bind(this));

        },

        show : function (data) {

            this.model = data;

            this.render();

            this.$el.removeClass('hidden');
        },

        render : function () {

            this.$el.find('[data-large]').prop('src', this.model.previewURL);
            this.$el.find('[data-user]').prop('value', this.model.user);
            this.$el.find('[data-user]').focus(function(){this.value =' '});

        },

        editUser : function () {
            this.imageModel = this.model;
            this.imageModel.user = this.$el.find('[data-user]').val();
            $.ajax({

                type : 'PUT',

                url : '/images/' + this.imageModel.id,

                data: {image : this.imageModel}

            })
                .done(function (response) {

                    this.$el.addClass('hidden');
                    this.user.text(this.imageModel.user)


                }.bind(this))

                .fail(function (error) {

                    alert(error.statusText);

                });
        },

        hide : function () {

            this.$el.addClass('hidden');

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