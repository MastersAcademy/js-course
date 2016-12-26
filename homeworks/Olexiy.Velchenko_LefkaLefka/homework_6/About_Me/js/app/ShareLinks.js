// Creates list share-links
function ShareLinks() {
    this.$el = $("[data-share-links]");
    this.linkTmpl = this.$el.find("[data-share-link]").get(0).outerHTML;
    this.$el.empty();
    this.model = window.appShareLinks;

    this.buildList();
}
ShareLinks.prototype = {
    buildList : function() {
        for(var key in this.model) {
            this.createLinkItem(key, this.model[key]);
        }
    },
    createLinkItem : function(name, url) {
        var newItem = new ShareLink(this.linkTmpl, name, url);

        this.$el.append($("<li>").append(newItem.$el));
    }
};