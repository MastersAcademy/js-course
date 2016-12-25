(function() {
    if(window.toDoList) {
        window.toDoList.globalFunctional = new GlobalFunctional();
        window.toDoList.filters = new Filters();
        window.toDoList.globalEventListener = new GlobalEventListener();
        window.toDoList.localStorage = new LocalStorage();
    }
    else {
        window.toDoList = {
            globalFunctional : new GlobalFunctional(),
            filters : new Filters(),
            globalEventListener : new GlobalEventListener(),
            localStorage : new LocalStorage()
        };
    }

    window.toDoList.globalEventListener.init();

    $(document).ready(function() {
        window.toDoList.localStorage.loadData();
        window.toDoList.globalFunctional.countToDoLeft();

        window.onbeforeunload = function() {
            window.toDoList.localStorage.saveData();
        };
    });
})();