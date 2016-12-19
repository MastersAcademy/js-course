function Table(tableModel, rowPattern) {
    this.$tableModel = $(tableModel);
    this.rowPattern = rowPattern;
    this.listenEvents();
}
    
Table.prototype = {
    addRow: function () {
        var newRow =  this.rowPattern;
        $("[data-table-body]").append(newRow);
    },

    listenEvents: function () {
        
        // set cell table like editable
        this.$tableModel.on("dblclick", "[data-task]", function() {
            $(this).prop("contenteditable", true);
        });
     
        // action for add row button
        this.$tableModel.on("click", "[data-add-row]", function() {
            this.addRow();
            this.statisticsByTasks();
        }.bind(this));
        
        // action for remove row button
        this.$tableModel.on("click", "[data-remove-row]", function() {
            $(this).parent().closest("tr").remove();  
        });
        
        this.$tableModel.on("click", "[data-status-task]", function() {
            $(this).parent().parent().toggleClass("set_background");
            $(this).toggleClass("checked");
        });
    },
    
    statisticsByTasks: function () {
        this.$tableModel.parent().find("[data-done-task]").html($("[data-status-task]:checked").length);
        this.$tableModel.parent().find("[data-need-done-task]").html($("[data-status-task]:not(:checked)").length);
    }
};