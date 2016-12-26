// Display content
function Content() {
    this.model = appData;
    this.$el = $("[data-name]");
    this.$el.empty();
    this.createElement(this.$el, this.model.name);

    this.$el = $("[data-post]");
    this.$el.empty();
    this.createElement(this.$el, this.model.post);

    this.$el = $("[data-info]");
    this.$el.empty();
    this.createElement(this.$el, this.model.info);
}
Content.prototype = {
    createElement : function(element, data) {
        this.$el.append($(element).text(data));

        this.listenEvents($(element));
    },
    listenEvents : function(element) {
        element.on("dblclick", this.changeToInput.bind(element));
    },
    changeToInput : function(element) {
        var newElement = document.createElement("input");
        newElement.className = "input-edit";
        newElement.value = element.target.textContent;
        element.target.replaceWith(newElement);

        newElement.focus();
        // verticalAlignPicture();
        // // Closure parameters:
        newElement.onblur = function() {
            // Save value from "input".
            element.target.textContent = newElement.value;
            // Replace the input to old element.
            newElement.replaceWith(element.target);
        }
    }
};