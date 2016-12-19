$(function() {
    var model = "[data-todo-list]"; 
    var rowPattern = '<tr class="bussiness" data-table-row>\n\
        <td class="data" data-task></td><\n\
        <td class="action"><input type="checkbox" class="checkbox" data-status-task/></td>\n\
        <td class="action" data-add-row><button class="plus" data-add-row>+</button></td>\n\
        <td class="action" data-remove-row><button class="minus" data-remove-row>-</button></td></tr>';
    var table = new Table(model, rowPattern);
       
    /*
     *  delete all tasks 
     *  mark all tasks like done tasks
     */
    $("#delete_tasks").click(function() {
        $("table tr.bussiness").remove();
        table.addRow();
        statisticsByTasks();
    });
    
    $("#mark_tasks").click(function() {
        if (!$(window).find($("table input")).is(":checked")) {
            $("table input").prop("checked", true);
        }
        statisticsByTasks();
    });
  
    /*
     *  filters by tasks
     */
    $("#show_all_tasks").on("click", function() {
        $("table").find($("tr")).show();
    });
    
    $("#show_done_tasks").on("click", function(){
        $("table").find($("tr input:checked").parent().parent().show());    
        $("table").find($("tr input:not(:checked)").parent().parent().hide());      
    });
    
    $("#show_will_do_tasks").on( "click", function() {
        $("table").find($("tr input:checked").parent().parent().hide());    
        $("table").find($("tr input:not(:checked)").parent().parent().show()); 
        
    });
    
    /*
     *  statistics by tasks
     */
   
    function statisticsByTasks() {
        var execTasks = $("table input:checked").length;
        $("#done_tasks").text(execTasks);
        var needTasks = $("table input:not(:checked)").length; 
        $("#will_do_tasks").text(needTasks);
    }
    statisticsByTasks();
}); 