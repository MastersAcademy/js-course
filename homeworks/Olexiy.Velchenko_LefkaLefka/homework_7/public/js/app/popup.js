(function () {
    var popupSingleton = {
        $el : $("[data-image-popup]"),
        $input : $("[data-edit-user]"),
        $btnSave : $("[data-save-user]"),
        listenEvents : function () {
            this.$el.on("click", this.hide.bind(this))
            this.$btnSave.on("click", this.save.bind(this));
        },
        show : function (data, tpl) {
            this.tpl = tpl;
            this.model = data;
            this.render();
            this.$el.removeClass("hidden");
        },
        render : function () {
            this.$el.find("[data-large]").prop("src", this.model.webformatURL);
            this.$input.prop("value", this.model.user);
        },
        hide : function (event) {
            if(event.target.className === "popup-overlay") {
                this.$el.addClass("hidden");
            }
        },
        save : function() {
            // alert(this.model.id);
            // $.put("/images:" + this.model.id);
            var imageModel = this.model;
            imageModel.user = this.$input.prop("value");
            $.ajax({
                type : "PUT",
                url : "/images/:" + this.model.id,
                data : {image : imageModel}
            })
            .done(function(response) {
                this.model = response;
                this.tpl.user.text(this.model.user);
                this.$el.click();
                // console.log(response);
            }.bind(this))
            .fail(function(error) {
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