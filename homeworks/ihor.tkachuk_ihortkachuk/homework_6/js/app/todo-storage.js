(function () {

    var storageSingleton = {
        key: null,

        /**
         * Initialization localStorage.
         *
         * @param {String} key - Name of the key.
         * @param {Array} data - Initial data.
         */
        init: function (key, data) {
            this.key = key;
            if (localStorage) {
                var model = localStorage[key];
                if (model == null || model == undefined) {
                    localStorage.setItem(key, JSON.stringify(data));
                }
            } else {
                throw Error('Sorry but you browser doesn\'t support localStorage ');
            }
        },

        get: function () {
            return JSON.parse(localStorage[this.key]);
        },

        /**
         * Add a new item to localStorage.
         *
         * @param {Object} data
         */
        add: function (data) {
            var model = JSON.parse(localStorage[this.key]);
            model.push(data);
            localStorage[this.key] = JSON.stringify(model);
        },

        /**
         * Remove data from localStorage
         *
         * @param {Object} data
         */
        remove: function (data) {
            var model = JSON.parse(localStorage[this.key]);
            var filtered = model.filter(function (item) {
                return JSON.stringify(item) !== JSON.stringify(data)
            });
            localStorage[this.key] = JSON.stringify(filtered);
        },

        /**
         * Update data in localStorage
         *
         * @param data
         */
        update: function (data) {
            var model = JSON.parse(localStorage[this.key]);
            model.forEach(function (item) {
                if (item.id == data.id) {
                    item.text = data.text;
                    item.completed = data.completed;
                }
            });
            localStorage[this.key] = JSON.stringify(model);
        }

    };

    if (window.todoApp) {
        window.todoApp.storage = storageSingleton;
    }
    else {
        window.todoApp = {
            storage: storageSingleton
        }
    }

})();