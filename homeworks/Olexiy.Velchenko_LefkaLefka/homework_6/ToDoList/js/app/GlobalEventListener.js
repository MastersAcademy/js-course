function GlobalEventListener() {
    var functional = new GlobalFunctional();
    var filters = new Filters();

    this.listenCheckboxChange($("[data-drop-down]"), functional.dropDown);
    this.listenKeyPressed($("[data-new-task]"), functional.addNewTask.bind(functional));

    this.listenClickEvent($("[data-filter-all]"), filters.showAll.bind(filters));
    this.listenClickEvent($("[data-filter-active]"), filters.showActive.bind(filters));
    this.listenClickEvent($("[data-filter-completed]"), filters.showCompleted.bind(filters));

    this.listenClickEvent($("[data-remove-completed]"), functional.deleteCompleted.bind(functional));
}

GlobalEventListener.prototype = {
    listenClickEvent : function(element, callback) {
        $(element).on("click", callback);
    },
    listenDblClickEvent : function(element, callback) {
        $(element).on("dblclick", callback);
    },
    listenCheckboxChange : function(element, callback) {
        $(element).on("change", callback);
    },
    listenKeyPressed : function(element, callback) {
        $(element).on("keyup", callback);
    }
};