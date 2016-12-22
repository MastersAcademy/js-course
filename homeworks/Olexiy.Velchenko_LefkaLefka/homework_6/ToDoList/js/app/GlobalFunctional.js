function GlobalFunctional() {

}

GlobalFunctional.prototype = {
    dropDown : function(event) {
        // Hide all elements in list.
        if($(event.target).is(":checked")) {
            $("[data-content-list]").hide(100);
        }
        else
            // Show all elements in list.
            if(!$(event.target).is(":checked")) {
                $("[data-content-list]").show(100);
            }
    },
    addNewTask : function(event) {
        // Uf pressed "Enter" - add new task.
        if(event.target.keyCode === 13) {
            /////////////////////////////////////////////////////
            // add new task
            console.log("add");
        }
        else
            // If pressed "Esc" - exit from printing.
            if(event.target.keyCode === 27) {
                // Deleted all which printed.
                $(event.target).val("");
                // Removed focus.
                $(event.target).blur();
            }
    },
    showAll : function() {
        /////////////////////////////////////////////////////
        console.log("all");
    },
    showActive : function() {
        /////////////////////////////////////////////////////
        console.log("active");
    },
    showCompleted : function() {
        /////////////////////////////////////////////////////
        console.log("completed");
    },
    deleteCompleted : function() {
        /////////////////////////////////////////////////////
        // this.listenClickEvent($("[data-delete-button]"));
        console.log("delete completed");
    }
};