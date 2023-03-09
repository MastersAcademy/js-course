var year = {

    elem : document.querySelector('[data-date]'),
    date : new Date(),

    insert: function() {
        this.elem.innerHTML = this.date.getFullYear();
        this.elem.setAttribute('datetime', this.date.getFullYear());
    }
};

year.insert();
