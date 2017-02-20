(function () {

    window.popup = {
        elem : document.querySelector(".pop-up"),
        show: function () {
            this.elem.classList.add("pop-up-show");
        },
        hide: function () {
            this.elem.classList.remove("pop-up-show");
        }

    };
})();
    
