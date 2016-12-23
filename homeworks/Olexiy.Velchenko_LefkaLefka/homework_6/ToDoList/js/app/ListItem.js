function ListItem(text, status) {
    this.$ul = $("[data-content-list]");
    this.text = text;
    this.status = status;

    this.listener = GlobalEventListener.prototype;
    this.functional = GlobalFunctional.prototype;

    this.buildItem();
}
ListItem.prototype = {
    buildItem : function() {
        // Creates all new elements.
        this.liElem();
        this.inputElem();
        this.textElem();
        this.delBtnElem();
        // Show it.
        this.render();
    },
    liElem : function() {
        this.$el = $("<li class=\"list-element\">");
    },
    inputElem : function() {
        var $elem = $("<input class=\"checkbox-done\" type=\"checkbox\" data-checkbox-done>");
        this.status === true ? $elem.prop("checked", true) : $elem.prop("checked", false);

        this.listener.listenClickEvent($elem, this.functional.countToDoLeft.bind(this.functional));

        this.$el.append($elem);
    },
    textElem : function() {
        var $elem = $("<div class=\"text\" data-task-text>");
        $elem.text(this.text);

        var modifyTask = new EditTask($elem);
        this.listener.listenDblClickEvent($elem, modifyTask.replace.bind(modifyTask));

        this.$el.append($elem);
    },
    delBtnElem : function() {
        var $elem = $("<div class=\"button-delete-task\" data-delete-button>");
        $elem.text("X");

        this.listener.listenClickEvent($elem, this.functional.deleteTask.bind(this.functional));

        this.$el.append($elem);
    },
    render : function() {
        this.$ul.append(this.$el);
    }
};