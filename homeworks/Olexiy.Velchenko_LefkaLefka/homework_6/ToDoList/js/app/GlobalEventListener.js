function GlobalEventListener() {
    // this.init();
}

GlobalEventListener.prototype = {
    init : function() {
        this.listenCheckboxChange($("[data-drop-down]"),
            window.toDoList.globalFunctional.dropDown);
        this.listenKeyPressed($("[data-new-task]"),
            window.toDoList.globalFunctional.addNewTask.bind(window.toDoList.globalFunctional));

        this.listenClickEvent($("[data-filter-all]"),
            window.toDoList.filters.showAll.bind(window.toDoList.filters));
        this.listenClickEvent($("[data-filter-active]"),
            window.toDoList.filters.showActive.bind(window.toDoList.filters));
        this.listenClickEvent($("[data-filter-completed]"),
            window.toDoList.filters.showCompleted.bind(window.toDoList.filters));

        this.listenClickEvent($("[data-remove-completed]"),
            window.toDoList.globalFunctional.deleteCompleted.bind(window.toDoList.globalFunctional));
    },
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