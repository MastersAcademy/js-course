// Display popup
function ContactPopup() {
    this.$elBtn = $("[data-btn-contact]");
    this.$elPopup = $("[data-popup]");

    this.listenEvents();
}
ContactPopup.prototype = {
    listenEvents : function() {
        this.$elBtn.on("click", this.showPopup.bind(this));
        this.$elPopup.on("click", this.hidePopup.bind(this));
    },
    showPopup : function() {
        this.$elPopup.removeClass("invisible");

        this.$elPopup.fadeTo("fast", 1);
    },
    hidePopup : function(e) {
        if(e.target.className === "popup") {
            this.$elPopup.fadeTo("fast", 0, function() {
                this.$elPopup.addClass("invisible");
            }.bind(this));
        }
    }
};