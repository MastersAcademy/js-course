function LocalStorage() {
    this.$el = $("[data-content-list]");
}
LocalStorage.prototype = {
    saveData : function() {
        var $all = this.$el.children(),
            allTaskObj = {};
        $all.each(function(i, elem) {
            var taskObj = {
                text : $(elem).find($("[data-task-text]")).text(),
                status : $(elem).find($("[data-checkbox-done]")).prop("checked")
            };
            allTaskObj[i] = taskObj;
        });
        localStorage.setItem("toDoList", JSON.stringify(allTaskObj));
    },
    loadData : function() {
        var allTaskObj = JSON.parse(localStorage.getItem("toDoList"));

        for(var key in allTaskObj) {
            new ListItem(allTaskObj[key].text, allTaskObj[key].status);
        }
    }
};