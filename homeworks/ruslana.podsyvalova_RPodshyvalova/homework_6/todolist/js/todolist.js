function List() {
    this.$list = $("[data-list]");
    this.clearTask(this.$list.find("[data-item]"));
    this.statisticsByStateTasks();
    this.listenEvents();
}

List.prototype = {
    clearTask: function(itemTask) {
        itemTask.find("[data-content]").val("");
        itemTask.find("[data-state-task]").prop("checked", false);
        if (itemTask.hasClass("colorize_line")) { 
            itemTask.removeClass("colorize_line");
        }
        $("[data-all-tasks]").prop("checked", "true");
        return itemTask;
    },
    
    statisticsByStateTasks: function() {
        var totalTasks = $("[data-content]").filter(function() {
            return $(this).val();
        }).length;
        var executedTasks = $("[data-state-task]:checked").length;
        var notExecutedTasks = totalTasks > 0 ?  totalTasks - executedTasks : 0;
        $("[data-executed-tasks-statistics]").text(executedTasks);
        $("[data-not-executed-tasks-statistics]").text(notExecutedTasks);
    }, 
    
    insertTask: function(liPatternStr) {
        var liElement = liPatternStr.clone();
        liElement = this.clearTask(liElement);
        this.$list.append(liElement);
    },
    
    showAllTasks: function() {
        this.$list.find($("[data-item]")).each(function() {
            if ($(this).hasClass("hiddenObj")) { 
                $(this).removeClass("hiddenObj");
            }
        });
    },
    
    deleteTask: function(itemTask) {
        if (this.$list.find("[data-item]").length > 1) {
            itemTask.remove();
        } else {
            this.clearTask(itemTask); 
            this.showAllTasks();
        }
    },
   
    isEmptyTask: function(itemTask) {
        return itemTask.find("[data-content]").val().length === 0 ? true : false;
    },
    
    deleteAllTasks: function() {
        var thisListObj = this;
        this.$list.find("[data-item]").each(function() {
            thisListObj.deleteTask($(this));
        });
    },

    markedAllTasksLikeExecuted: function() {
        var countOfEmptyItems = 0;
        var thisListObj = this;
        this.$list.find($("[data-state-task]")).each(function() {
            if (!$(this).parent().hasClass("colorize_line")) {
                if (!thisListObj.isEmptyTask($(this).parent())) {
                    $(this).parent().addClass("colorize_line");
                    $(this).prop("checked", "true");
                } else {
                    countOfEmptyItems++;
                }
            }
        });
        if (countOfEmptyItems > 0) {
            alert("you have " + countOfEmptyItems + " empty task(s), please fill it(them)");
        }
    },

    showExecutedTasks: function() {
        this.$list.find($("[data-state-task]")).each(function() {
            if ($(this).prop("checked") !== true) {
                $(this).parent().addClass("hiddenObj");
            } else {
                if ($(this).parent().hasClass("hiddenObj")) { 
                    $(this).parent().removeClass("hiddenObj");
                }
            }
        });
    },

    showNotExecutedTasks: function() {
        this.$list.find($("[data-state-task]")).each(function() {
            if ($(this).prop("checked") === true) {
                $(this).parent().addClass("hiddenObj");
            } else {
               if ($(this).parent().hasClass("hiddenObj")) { 
                    $(this).parent().removeClass("hiddenObj");
                }
            }
        });
    },

    saveTasksToLocalStorage: function() {
        var object = {};
        this.$list.find($("[data-content]")).each(function() {
            var key = $(this).val();
            if (key.length > 0) { //don't save empty task to object
                var value = $(this).siblings("[data-state-task]").prop("checked");
                object[key] = value; 
            } 
        });
        if (Object.keys(object).length > 0) { //don't write empty object to LocalStore
            try {
                localStorage.setItem("keyTasksObj", JSON.stringify(object));
            } catch (e) {
                if (e === QUOTA_EXCEEDED_ERR) {
                    alert("Sorry, not enough storage space for saving information");
                }
            }
        }
    },
    
    restoreTasksFromLocalStorage: function() {
        var object = {};
        if (localStorage.getItem("keyTasksObj") !== null) {
            object = JSON.parse(localStorage.getItem("keyTasksObj"));
            localStorage.removeItem("keyTasksObj");
        }
        var rowCount = 0;
        for (var key in object) {
            this.$list.find($("[data-content]")).eq(rowCount).val(key);
            var flag = Boolean(object[key]);
            if (flag === true) {
                this.$list.find($("[data-state-task]")).eq(rowCount).prop("checked", flag).parent().addClass("colorize_line"); 
            } else {
                this.$list.find($("[data-state-task]")).eq(rowCount).prop("checked", flag); 
            }
            
            rowCount++;
            if (rowCount < Object.keys(object).length) {
                this.insertTask($("[data-item]").eq(0), this.$list);
            }
        }
    },
    
    listenEvents: function() {
        this.$list.on("click", "[data-add-task]", function(event) {
            this.insertTask($(event.target).parent());
            event.stopPropagation();
            this.statisticsByStateTasks();
        }.bind(this));

        this.$list.on("click", "[data-remove-task]", function(event) {
            this.deleteTask($(event.target).parent());
            event.stopPropagation();
            this.statisticsByStateTasks();
        }.bind(this));

        this.$list.on("click", "[data-state-task]", function(event) {
            if (!this.isEmptyTask($(event.target).parent())) {
                $(event.target).parent().toggleClass("colorize_line");
                this.statisticsByStateTasks();
            } else {
                event.preventDefault();
                alert("set content of task first, please");
            }
            event.stopPropagation();
        }.bind(this));

        this.$list.on("click", "[data-move-up-btn]", function(event) {
            var itemTask = $(event.target).parent();
            itemTask.insertBefore(itemTask.prev());
            event.stopPropagation();
            this.statisticsByStateTasks();
        }.bind(this));

        this.$list.on("click", "[data-move-down-btn]", function(event) {
            var itemTask = $(event.target).parent();
            itemTask.insertAfter(itemTask.next());
            event.stopPropagation();
            this.statisticsByStateTasks();
        }.bind(this));

        this.$list.on("blur", "[data-content]", function(event) {
            $(event.target).prop("readonly", true);
            event.stopPropagation();
            this.statisticsByStateTasks();
        }.bind(this));

        this.$list.on("dblclick", "[data-content]", function(event) {
            $(event.target).focus();
            $(event.target).prop("readonly", false);

        });

        //made the list as draggable list
        this.$list.sortable({
            cursor: "move", 
            revert : true, 
            opacity : 0.5
        }).disableSelection();
    }
};