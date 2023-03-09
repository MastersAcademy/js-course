function ImagesList () {

    this.$el = $('[data-items]');

    this.imageTpl = this.$el.find('[data-image-item]').get(0).outerHTML;

    this.$el.empty();

    //this.images = window.appData;
    this.getData();
    
}

ImagesList.prototype = {

    getData : function () {
        
        $.get('/images')
        
        .done(function (response) {
            
            this.images = response;
            
            this.buildList();
            
        }.bind(this))
        
        .fail(function (error) {

            alert(error.statusText);

        });
        
    },
    
    buildList : function () {

        this.images.forEach(this.createImageItem.bind(this));

    },

    createImageItem : function (imageData) {

        var newItem = new ImageItem(this.imageTpl, imageData);

        this.$el.append(newItem.$el);

    }

};