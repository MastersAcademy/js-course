function GlobalFunctional() {}

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
        if(event.keyCode === 13) {
            // Add new task to list.
            var text = $("[data-new-task]").val();
            // console.log(this.item);
            // this.item.__proto__.buildItem.bind(this.item, text);
            new ListItem(text);
            // Deleted all which printed.
            $("[data-new-task]").val("");
            this.countToDoLeft();
        }
        else
            // If pressed "Esc" - exit from printing.
            if(event.keyCode === 27) {
                // Deleted all which printed.
                $("[data-new-task]").val("");
                // Removed focus.
                $("[data-new-task]").blur();
            }
    },
    deleteTask : function(event) {
        $(event.target).parent().remove();
        this.countToDoLeft();
    },
    deleteCompleted: function () {
        $("[data-checkbox-done]").each(function(i, elem) {
            // If task finished - show
            if($(elem).is(":checked")) {
                $(elem).parent().remove();
            }
        });
        this.countToDoLeft();
    },
    countToDoLeft : function() {
        var $all = $("[data-checkbox-done]"),
            count = 0;

        $all.each(function(i, elem) {
            if(!$(elem).is(":checked")) {
                ++count;
            }
        });
        $("[data-todo-left]").text(count.toString() + " toDo" + (count > 1 ? "s" : "") + " left");
    }
};