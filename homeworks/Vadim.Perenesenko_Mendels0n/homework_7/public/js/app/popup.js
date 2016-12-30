(function () {

    var popupSingleton = {
        user : $('[data-user]'),
        $el : $('[data-image-popup]'),

        listenEvents : function () {

            this.$el.find('[data-submit]').on('click',this.editUser.bind(this));

        },

        show : function (data,tpl) {
            this.model = data;

            this.user = tpl;

            this.render();
            this.$el.removeClass('hidden');
        },

        render : function () {
            this.$el.find('[data-large]').prop('src', this.model.webformatURL);
            this.$el.find('[data-user]').val(this.model.user)

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