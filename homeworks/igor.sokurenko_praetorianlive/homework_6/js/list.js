$(function () {
    // 1 Task. Create a "close" button and append it to each list item
    var span = $("<span />").addClass("close").html("\u00D7");
    $("ul").find("li").append(span);
    function removeSelectedTask() {
        // Click on a close button to hide the current list item
        $(".close").click(function() {
            $(this).closest("li").first().remove();
        });
    }
    removeSelectedTask();
    
    // Create a new list item when clicking on the "Add" button
    function newElement() {
        var newTask = $("#new_task").val(); 
        if (newTask === "") {
            alert("Please input task content and try again.");
        } else {
            $("ul").append($("<li>")
                .append("<p>" +newTask +"</p>")
                .append($("<span />").addClass("close").html("\u00D7")));
            $("#new_task").text("");
        }
        removeSelectedTask(); 
    }
    $(".addBtn").click(function() {
        newElement();
    });
    
    // 2 Task. Add a "checked" symbol when clicking on a list item
    $("ul").on("click", function(event) {
        var target = $(event.target);
        if (target.is("li > p")) {
            target.parent().toggleClass("checked");
        }
        showTasksInfo(); 
    });
    
    // 3 Task
    var popup = new Popup("#window_popup");
    $("ul").on("dblclick", function(event) {
        var target = $(event.target);
        if (target.is("li > p")) {
            popup.setReplacementObj(target);
            popup.setText(target.html());
            popup.popUpShow();
        }
    });
    
    // 4 Task
    function showTasksInfo() {
        var allTaskCount = $("li").length;
        var doneTaskCount = $("li.checked").length;
        $(".info").html("<p>done - " + doneTaskCount 
        + " tasks; need to do - " + (allTaskCount - doneTaskCount) + " tasks;</p>");
    };
    showTasksInfo();
    
    // 5 Task
    $(".remove_all").click(function() {
        $("li").remove();
    });
    
    $(".done_all").click(function() {
        $("li:not(.checked)").addClass("checked");
    });
    
    // 6 Task
    $(".print_all").click(function() {
        $("li").show();
    });
    
    $(".print_done").click(function() {
        $("li.checked").show();
        $("li:not(.checked)").hide();
    });
    
    $(".print_need").click(function() {
        $("li.checked").hide();
        $("li:not(.checked)").show();
    });
});