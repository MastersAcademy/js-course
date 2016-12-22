function GlobalEventListener() {
    // this.$el = $("[data-delete-button]");

    var functional = new GlobalFunctional();

    this.listenCheckboxChange($("[data-drop-down]"), functional.dropDown);
    this.listenKeyPressed($("[data-new-task]"), functional.addNewTask);

    this.listenClickEvent($("[data-filter-all]"), functional.showAll);
    this.listenClickEvent($("[data-filter-active]"), functional.showActive);
    this.listenClickEvent($("[data-filter-Completed]"), functional.showCompleted);
    this.listenClickEvent($("[data-remove-completed]"), functional.deleteCompleted);
}


GlobalEventListener.prototype = {
    listenClickEvent : function(element, callback) {
        $(element).on("click", callback);
    },
    listenCheckboxChange : function(element, callback) {
        $(element).on("change", callback);
    },
    listenKeyPressed : function(element, callback) {
        $(element).on("keyup", callback);
    }
};