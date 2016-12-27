(function () {

    var popupSingleton = {

        $el : $('[data-image-popup]'),

        listenEvents : function () {

            this.$el.find('[data-save]').on('click', this.save.bind(this));

        },

        show : function (data, tpl) {

            this.model = data;

            this.tpl = tpl;

            this.render();

            this.$el.removeClass('hidden');

        },

        render : function () {

            this.$el.find('[data-large]').prop('src', this.model.webformatURL);

            this.$el.find('[data-author]').prop('value', this.model.user);

        },

        save : function () {

            this.offEvents();

            this.saveUserFromServer();

        },

        offEvents : function () {

            this.$el.find('[data-save]').off('click', this.save.bind(this));
        },

        saveUserFromServer : function () {
            
            this.model.user = this.$el.find('[data-author]')[0].value;

            $.ajax({

                type : 'PUT',

                url : '/images/' + this.model.id,

                data: {

                    image : this.model

                }

            })

            .done(function (response) {

                this.$el.addClass('hidden');

                this.tpl.info[0].innerHTML = 'downloads: ' + this.model.downloads + ' author: ' + this.model.user;


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