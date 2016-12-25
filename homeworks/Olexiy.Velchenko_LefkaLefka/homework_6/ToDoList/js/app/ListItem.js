function ListItem(text, status) {
    this.$ul = $("[data-content-list]");
    this.text = text;
    this.status = status;

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

        window.toDoList.globalEventListener.listenClickEvent($elem,
            window.toDoList.globalFunctional.countToDoLeft.bind(window.toDoList.globalFunctional));

        this.$el.append($elem);
    },
    textElem : function() {
        var $elem = $("<div class=\"text\" data-task-text>");
        $elem.text(this.text);

        var modifyTask = new EditTask($elem);
        window.toDoList.globalEventListener.listenDblClickEvent($elem,
            modifyTask.replace.bind(modifyTask));

        this.$el.append($elem);
    },
    delBtnElem : function() {
        var $elem = $("<div class=\"button-delete-task\" data-delete-button>");
        $elem.text("X");

        window.toDoList.globalEventListener.listenClickEvent($elem,
            window.toDoList.globalFunctional.deleteTask.bind(window.toDoList.globalFunctional));

        this.$el.append($elem);
    },
    render : function() {
        this.$ul.append(this.$el);
    }
};