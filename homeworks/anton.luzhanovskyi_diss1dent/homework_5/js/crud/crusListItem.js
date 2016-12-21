function CrudListItem(tpl, counters, updatecounter) {
    this.$item = $(tpl);
    this.counters = counters;
    this.updatecounters = updatecounter;
    this.tpl = {
        content : this.$item.find('[data-content]'),
        status : this.$item.find('[data-select]'),
        delete : this.$item.find('[data-delete]')
    };

    this.listenEvents();
}

CrudListItem.prototype = {

    listenEvents : function () {
        this.tpl.delete.on('click', this.remove.bind(this));
        this.tpl.status.on('change', this.status.bind(this));
        this.tpl.content.on('dblclick', this.edit.bind(this));
    },

    offEvents : function () {
        this.tpl.delete.off('click', this.remove.bind(this));
    },

    remove : function () {
        this.offEvents();
        this.$item.remove();
        if (this.tpl.status.prop("checked")) {
            this.counters.selected--;
            this.counters.total--;
        } else {
            this.counters.total--;
        }

        this.updatecounters();
    },

    status : function () {
        if (this.tpl.status.prop( "checked" ) ) {
            this.$item.addClass('table-success');
            this.counters.selected++;
            this.updatecounters();

        } else {
            this.$item.removeClass('table-success');
            this.counters.selected--;
            this.updatecounters();
        }
    },

    edit : function () {
        var content = this.tpl.content,
            input = document.createElement("input"),
            textarea = document.createElement("textarea");

        content.html().length < 50 ? container = input : container = textarea;
        container.value = content.html();
        content.html("") ;
        content.append(container);
        container.focus();
        container.onblur = function () {
            content.html(this.value);
        };
    }

};