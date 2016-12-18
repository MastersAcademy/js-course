// Display image 
function Image() {
    this.$image = $("[data-image]");
    this.$image.empty();
    this.model = window.appData;
this.render();
}
Image.prototype = {
    render : function() {
        this.$image.prop("src", this.model.img);
    }
};