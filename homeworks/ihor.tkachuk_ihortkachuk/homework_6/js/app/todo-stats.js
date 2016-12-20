(function () {

    var statSingleton = {
        activeCount: $('[data-active-count]'),
        completedCount: $('[data-completed-count]'),

        count: function (model) {
            var that = this;
            this.clear();
            model.forEach(function (item) {
                if (item.completed) {
                    that.completedCount.text(+that.completedCount.text() + 1);
                } else {
                    that.activeCount.text(+that.activeCount.text() + 1);
                }
            });
        },

        clear: function () {
            this.completedCount.text(0);
            this.activeCount.text(0);
        }

    };

    if (window.todoApp) {
        window.todoApp.stats = statSingleton;
    } else {
        window.todoApp = {
            stats: statSingleton
        }
    }

})();
