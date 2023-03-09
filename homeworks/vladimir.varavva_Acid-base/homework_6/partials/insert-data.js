function InsertData() {

    this.name = document.querySelector('[data-name]');
    this.spec = document.querySelector('[data-spec]');
    this.desc = document.querySelector('[data-desc]');

    this.xhr = new XMLHttpRequest();
    this.xhr.open('GET', 'js/data.json');
    this.xhr.send();
    this.listenEvents();
}

InsertData.prototype = {

    insert: function(data) {
        data = this.xhr.responseText;
        data = JSON.parse(data);
        if (window.location.pathname === '/' ||
            window.location.pathname === '/index.html') {
            this.name.innerHTML = data.name;
            this.spec.innerHTML = data.spec;
            this.desc.innerHTML = data.desc;
        }
    },

    listenEvents: function() {
        this.xhr.addEventListener("load", this.insert.bind(this));
    }
};

module.exports = new InsertData();
