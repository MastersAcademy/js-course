function ImagesList () {

    this.$el = $('#list');

    this.imageTpl = this.$el.find('#item').get(0).outerHTML;

    this.$el.empty();

    this.model = window.appData;

    console.log(this.model);

    this.buildList();

    this.slider(this.$el);

}

ImagesList.prototype = {

    buildList : function () {

        this.model.forEach(this.createImageItem.bind(this));

    },

    createImageItem : function (imageData) {

        var newItem = new ImageItem(this.imageTpl, imageData);

        this.$el.append(newItem.$el);

    },

    slider : function (c){

        console.log(c);
        var el = c.get(0);
        var li = el.children;
        console.log(el);
        console.log(li);

        for (var i = 1, j = 0; i < li.length; i++) {
            j=j+150;
            li[i].style.left = j+"px";      
        }
        sendLength(li);

    }

};