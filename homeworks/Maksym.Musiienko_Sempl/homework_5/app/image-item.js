function ImageItem(tpl, modelData) {

    this.$el = $(tpl);

    this.model = modelData;

    this.tpl = this.$el.find('#image');
           
    this.render();

    this.listenEvents();

}

ImageItem.prototype = {

    render : function () {

        this.tpl.prop('src', this.model.prev);

    },

    listenEvents : function () {

        this.tpl.on('click', this.showLarge.bind(this));

        
    },

    offEvents : function () {

        this.tpl.off('click', this.showLarge.bind(this));

        
    },

    showLarge : function () {

        window.imagesApp.popup.show(this.model);

    }

    
};