(function () {

    var popupSingleton = {

        $el : $('[data-image-popup]'),

        listenEvents : function () {

            window.onclick = this.closemodal.bind(this);

            $( "form[name='updateimage']" ).submit(this.update.bind(this))
        },

        show : function (data, tpl) {

            this.parentEl = tpl;

            this.model = data;

            this.render();

            this.$el.removeClass('hidden');
        },

        render : function () {

            this.$el.find('[data-large]').prop('src', this.model.webformatURL);

            $tpl = {

                user : this.$el.find('[data-user]'),

                views : this.$el.find('[data-views]')

            };

            $tpl.user.val(this.model.user);

            $tpl.views.html(this.model.views);

        },

        hide : function () {

            this.$el.addClass('hidden');

        },

        closemodal : function (event) {

            if (event.target == this.$el.get(0)) {

                this.hide();

            }

        },

        update : function (event) {

            event.preventDefault();

            imageModel = this.model;

            imageModel.user = this.$el.find('[data-user]').val();

            $.ajax({

                type : 'put',

                url : '/images/' + this.model.id,

                data : {

                    image : imageModel

                }

            })

            .done(function(res) {

                this.hide();

                this.$el.find('[data-user]').val(imageModel.user);

                this.parentEl.user.html(this.model.user);

            }.bind(this))

            .fail(function() {

                alert( "error updating" );

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