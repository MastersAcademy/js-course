function ImagesList () {

    this.$el = $('[data-items]');

    this.imageTpl = this.$el.find('[data-image-item]').get(0).outerHTML;

    this.$el.empty();

    this.model = window.appData;

    this.buildList();

}

ImagesList.prototype = {

    buildList : function () {

        this.model.forEach(this.createImageItem.bind(this));

    },

    createImageItem : function (imageData) {

        var newItem = new ImageItem(this.imageTpl, imageData);

        this.$el.append(newItem.$el);

    }

};

