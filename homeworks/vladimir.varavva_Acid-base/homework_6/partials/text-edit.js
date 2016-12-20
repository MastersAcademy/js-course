function TextEdit() {

    this.name = document.querySelector('[data-name]');
    this.spec = document.querySelector('[data-spec]');
    this.desc = document.querySelector('[data-desc]');
    this.textarea = document.createElement('textarea');
    this.listenEvents();
}

TextEdit.prototype = {

    edit: function(e) {
        this.elem = e.target;
        this.textarea.value = this.elem.innerHTML;
        this.elem.innerHTML = '';
        this.elem.appendChild(this.textarea);
        this.textarea.focus();
    },

    save: function() {
        this.text = document.querySelector('textarea');
        if (this.text) this.text.parentNode.innerHTML = this.text.value;
    },

    listenEvents: function() {
         if (window.location.pathname === '/' ||
             window.location.pathname === '/index.html') {
             this.name.addEventListener('dblclick', this.edit.bind(this));
             this.spec.addEventListener('dblclick', this.edit.bind(this));
             this.desc.addEventListener('dblclick', this.edit.bind(this));
             document.addEventListener('focusout', this.save.bind(this));
        }
    }
};

module.exports = new TextEdit();
