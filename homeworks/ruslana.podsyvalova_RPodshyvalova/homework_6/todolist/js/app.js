(function() {
    var list = new List();
    list.restoreTasksFromLocalStorage();
    list.statisticsByStateTasks();

    $("body").on("click", "[data-all-tasks]", function() {
        list.showAllTasks();
    });

    $("body").on("click", "[data-delete-tasks-btn]", function() {
        list.deleteAllTasks();
        list.statisticsByStateTasks();
    });

    $("body").on("click", "[data-mark-tasks-executed]", function() {
        list.markedAllTasksLikeExecuted();
        list.statisticsByStateTasks();   
    });

    $("body").on("click", "[data-executed-tasks]", function() {
        list.showExecutedTasks();   
    });

    $("body").on("click", "[data-not-executed-tasks]", function() {
        list.showNotExecutedTasks();
    });

    $(window).bind("beforeunload", function() {
        list.saveTasksToLocalStorage();
    }); 
    
})();