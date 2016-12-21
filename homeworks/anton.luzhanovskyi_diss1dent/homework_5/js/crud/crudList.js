function CrudList() {
    this.item = $('[data-item]');
    this.$items = $('[data-items]');
    this.tpl = {
        item : this.$items.find(this.item).get(0).outerHTML,
        add : this.$items.find($('[data-item-add]')),
        deleteAll : this.$items.find($('[data-delete-all]')),
        selectAll : this.$items.find($('[data-select-all]'))
    };

    this.counters = {
        selectedTpl : this.$items.find($('[data-total-selected ]')).get(0),
        unselectedTpl : this.$items.find($('[data-total-unselected ]')).get(0),
        selected : 0,
        total : 0
    };

    this.$items.find(this.item).remove();
    this.buildList();
    this.listenEvents();
}

CrudList.prototype = {

    buildList : function () {
        /*todo:localstorage*/
        this.createCrudItem();
    },

    createCrudItem : function () {
        var newItem = new CrudListItem(this.tpl.item, this.counters, this.updateCounter);
        this.$items.append(newItem.$item);
        this.counters.total++;
        this.updateCounter();
    },

    listenEvents : function () {
        this.tpl.add.on('click', this.createCrudItem.bind(this));
        this.tpl.deleteAll.on('click', this.deleteAll.bind(this));
        this.tpl.selectAll.on('click', this.selectAll.bind(this));
    },

    deleteAll : function () {
        var self = this,
            elem;
        $(this.$items.find($('[data-item]'))).each(function (index, item) {
            elem = $(item).find('[data-select]');
            if (elem.prop('checked')) {
                $(item).remove();
                self.counters.selected--;
                self.counters.total--;
            }
        });

        this.updateCounter();
    },

    selectAll : function () {
        var self = this,
                   elem;
        $(this.$items.find($('[data-item]'))).each(function (index, item) {
            elem = $(item).find('[data-select]');
            if (!elem.prop('checked')) {
                elem.prop("checked" , true);
                $(item).addClass('table-success');
                self.counters.selected++;
            }
        });
        this.updateCounter();
    },

    updateCounter : function () {
        $(this.counters.selectedTpl).children('span').html(this.counters.selected);

        $(this.counters.unselectedTpl).children('span').html(
            this.counters.total - this.counters.selected
        );
    }

};