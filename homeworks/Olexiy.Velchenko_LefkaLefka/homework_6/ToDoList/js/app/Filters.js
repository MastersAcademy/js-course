// Filters for tasks.
function Filters() {
    this.$list = $("[data-content-list]");
}
Filters.prototype = {
    // Show all tasks.
    showAll: function () {
        this.$list.children().each(function(i, elem) {
            $(elem).show();
        });
    },
    // Show unfinished tasks.
    showActive: function () {
        this.$list.find($("[data-checkbox-done]")).each(function(i, elem) {
            // If task finished - hide
            if($(elem).is(":checked")) {
                $(elem).parent().hide();
            }
            // If task unfinished - show
            if(!$(elem).is(":checked")) {
                $(elem).parent().show();
            }
        });
    },
    // Show completed tasks.
    showCompleted: function () {
        this.$list.find($("[data-checkbox-done]")).each(function(i, elem) {
            // If task finished - show
            if($(elem).is(":checked")) {
                $(elem).parent().show();
            }
            // If task unfinished - hide
            if(!$(elem).is(":checked")) {
                $(elem).parent().hide();
            }
        });
    }
};