(function () {

    var popupSingleton = {

        $el : $('[data-image-popup]'),

        $saveButton : $('[data-button-save]'),

        listenEvents : function () {

            this.$saveButton.on('click', this.saveName.bind(this));

        },

        saveName: function () {

            var newName = this.$el.find('[data-input-username]').val();

            var newData = {
                image: this.model
            };

            newData.image.user = newName;

            $.ajax({
                url: "/images/" + this.model.id,
                method: 'put',
                data: newData,
                dataType: 'json',
                success : function (response) {
                    this.userNameTpl.html('Username: ' + response.user);
                    this.$el.hide();
                }.bind(this),
                error: function (error) {
                    alert(error.statusText);
                }
            });
        },

        show : function (data, userNameTpl) {

            this.userNameTpl = userNameTpl;

            this.model = data;

            this.render();

            this.$el.removeClass('hidden');
        },

        render : function () {

            this.$el.find('[data-large]').prop('src', this.model.webformatURL);

            this.$el.find('[data-input-username]').val(this.model.user);

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