// Creates list popup content
function ContentPopupList() {
    this.$el = $("[data-popup-list]");
    this.model = window.appDataContact;
    this.$el.empty();

    this.buildList();
}
ContentPopupList.prototype = {
    buildList : function() {
        for(var key in this.model) {
            this.createListItem(key, this.model[key]);
        }
    },
    createListItem : function(name, info) {
        this.$el.append($("<li>").append(name + ": " + info));
    }
};