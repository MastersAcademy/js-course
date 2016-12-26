var App = {
    init : function() {
        new Image();
        new Content();
        new ShareLinks();
        new ContentPopupList();
        new ContactPopup();

        this.setDate();
        this.setEvents();
    },
    setDate : function() {
        $("[data-current-year]").text(new Date().getFullYear().toString());
    },
    setEvents : function() {
        $("[data-light-theme]").on("click", function () {
            $("body").addClass("light-theme");
            $("body").removeClass("dark-theme");
        });
        $("[data-dark-theme]").on("click", function () {
            $("body").addClass("dark-theme");
            $("body").removeClass("light-theme");
        });
    }
};
App.init();