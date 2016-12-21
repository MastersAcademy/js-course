(function () {

    var popupSingleton = {

        $el : $('[data-image-popup]'),

        listenEvents : function () {

            this.$el.on('click', this.hide.bind(this))

        },

        show : function (data) {

            this.model = data;

            this.render();

            this.$el.removeClass('hidden');
        },

        render : function () {

            this.$el.find('[data-large]').prop('src', this.model.webformatURL);

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