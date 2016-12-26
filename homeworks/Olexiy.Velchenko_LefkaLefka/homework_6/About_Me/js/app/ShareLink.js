// Creates share-link element
function ShareLink(tmplLink, name, url) {
    this.$el = $(tmplLink);
    this.name = name;
    this.url = url;

    this.render();
    this.listenEvents();
}
ShareLink.prototype = {
    render : function() {
        this.$el.prop("text", this.name);
    },
    listenEvents : function() {
        this.$el.on("click", this.showSharePopup.bind(this));
    },
    showSharePopup : function() {
        window.open(this.url + window.location.href.toString(), "", "toolbar=0, status=1, width=600, height=400, position=center");
    }
};