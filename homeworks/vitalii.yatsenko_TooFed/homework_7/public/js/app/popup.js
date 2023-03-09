(function() {
    
    var popupSingleton = {
        
        $el: $('[data-image-popup]'),
        $user: $('[data-user]'),
        $save: $('[data-save]'),
        $updateInfo: $('[data-pict-info]'),
        
        listenEvents: function() {
            this.$save.on('click', this.hide.bind(this))
        },
        
        show: function(data, infoTpl) {
            this.infoTpl = infoTpl;
            this.model = data;
            this.render();
            this.$el.removeClass('hidden');
        },
        
        render: function() {
            this.$el.find('[data-large]').prop('src', this.model.webformatURL);
            this.$user[0].value = (this.model.user);
        },
        
        hide: function() {
            this.saveUserNameToServer();
            //this.$el.addClass('hidden');
        },
        
        saveUserNameToServer: function() {
            this.model.user = this.$user[0].value;
            $.ajax({
                type: 'PUT',
                url: '/images/' + this.model.id,
                data: this.model
            }).done(function(response) {
                this.infoTpl.text(response.user + ':' + this.model.downloads);
                this.$el.addClass('hidden');
            }.bind(this)).fail(function(error) {
                //console.log(this.model);
                alert(error.statusText);
                this.$el.addClass('hidden');
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