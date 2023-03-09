function Popup() {

    this.btn = document.querySelector('.contact-btn');
    this.popup = document.querySelector('.contact-popup');
    this.listenEvents();
}

Popup.prototype = {

    show: function() {
        this.popup.classList.remove('hidden');
    },

    hide: function() {
        this.popup.classList.add('hidden');
    },

    listenEvents: function() {
        if (window.location.pathname === '/' ||
            window.location.pathname === '/index.html') {
            this.btn.addEventListener('click', this.show.bind(this));
            this.popup.addEventListener('click', this.hide.bind(this));
        }
    }
};

module.exports = new Popup();
