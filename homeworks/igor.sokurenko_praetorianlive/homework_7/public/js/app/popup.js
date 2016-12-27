(function () {

    var popupSingleton = {

        $el : $('[data-image-popup]'),

        listenEvents : function () {
            this.$el.find('[data-save]').on('click', function(){
                this.model.user = this.$el.find('[data-user]').val();
                this.saveItemFromServer();
                this.hide();
            }.bind(this));
            

        },

        show : function (data, obj) {
       
            this.model = data;
            
            this.itemObject = obj;

            this.render();

            this.$el.removeClass('hidden');
        },

        render : function () {

            this.$el.find('[data-large]').prop('src', this.model.webformatURL);
            this.$el.find('[data-user]').val(this.model.user);
        },

        hide : function () {

            this.$el.addClass('hidden');

        },
        
        saveItemFromServer : function () {

        $.ajax({

            type : 'PUT',

            url : '/images/' + this.model.id,
            
            contentType: "application/json; charset=utf-8",
            
            dataType: "json",
              
            data: JSON.stringify({image: this.model})

        })
        .done(function (response) {
            
            this.itemObject.tpl.user.html(this.model.user);
           
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