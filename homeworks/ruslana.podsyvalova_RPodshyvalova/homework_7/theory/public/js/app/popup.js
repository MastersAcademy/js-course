(function() {
    var popupSingleton = {
        $el : $('[data-image-popup]'),

        listenEvents : function() {
            this.$el.find('[data-save]').on('click', function() {
                this.model.user = this.$el.find('[data-user-login]').val();
                this.updateItemFromServer.bind(this)(); 
                this.hide.bind(this)();   
            }.bind(this));
           
        },
        
        show : function(itemObj) {
            this.model = itemObj.model;
            this.render();
            this.$el.removeClass('hidden');
            this.$user = itemObj.tpl.user;
        },

        render : function() {
            this.$el.find('[data-large]').prop('src', this.model.webformatURL);  
            this.$el.find('[data-user-login]').prop('value', this.model.user);
        },

        hide : function() {
            this.$el.addClass('hidden');
        },
        
        updateItemFromServer:  function() {
            $.ajax({
                method: 'PUT',
                url : '/images/' + this.model.id,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify({image: this.model})
            })
            
            .done(function(response) {
                if (response) {
                    this.$user.html(response.user);
                } else {
                    alert("Sorry, user\'s name wasn\'t changed.");
                }
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

        };

    }

    popupSingleton.listenEvents();
})();