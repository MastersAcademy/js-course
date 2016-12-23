function ListItem(text) {
    this.$ul = $("[data-content-list]");
    this.text = text;
    // Creates all new elements.
    this.liElem();
    this.inputElem();
    this.textElem();
    this.delBtnElem();
    // Show it.
    this.render();
}
ListItem.prototype = {

    liElem : function() {
        this.$el = $("<li class=\"list-element\">");
    },
    inputElem : function() {
        var $elem = $("<input class=\"checkbox-done\" type=\"checkbox\" data-checkbox-done>");

        GlobalEventListener.prototype.listenClickEvent($elem, function() {
            ////////////////
        });

        this.$el.append($elem);
    },
    textElem : function() {
        var $elem = $("<div class=\"text\">");
        $elem.text(this.text);
        this.$el.append($elem);
    },
    delBtnElem : function() {
        var $elem = $("<div class=\"button-delete-task\" data-delete-button>");
        $elem.text("X");

        GlobalEventListener.prototype.listenClickEvent($elem, GlobalFunctional.prototype.deleteTask);

        this.$el.append($elem);
    },
    render : function() {
        this.$ul.append(this.$el);
    }
};