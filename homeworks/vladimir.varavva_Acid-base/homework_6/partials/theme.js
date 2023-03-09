function Theme() {

    this.body = document.querySelector('body');
    this.listenEvents();
}

Theme.prototype = {

    change: function(e) {
        this.theme = e.target.dataset.theme;
        if (this.theme) {
            this.body.dataset.theme = this.theme;
            localStorage.setItem('theme', this.theme);
        }
    },

    load: function() {
        if (localStorage.getItem('theme')) {
            this.body.dataset.theme = localStorage.getItem('theme');
        }
    },

    listenEvents: function() {
        document.addEventListener('click', this.change.bind(this));
        document.addEventListener('DOMContentLoaded', this.load.bind(this));
    }
};

module.exports = new Theme();
