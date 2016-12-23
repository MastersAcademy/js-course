function EditTask(elem) {
    this.$el = $(elem);
}
EditTask.prototype = {
    replace : function() {
        var $newElem = $("<input class=\"text-edit\" type=\"text\">"),
            $oldElem = this.$el;

        $newElem.prop("value", this.$el.text());
        $oldElem.after($newElem);
        $oldElem.hide();

        $newElem.focus();
        // Closure this.$el -> $oldElem:
        $newElem.on("blur", function() {
            $oldElem.text($newElem.prop("value"));
            $oldElem.show();
            $newElem.remove();
        });
    }
};