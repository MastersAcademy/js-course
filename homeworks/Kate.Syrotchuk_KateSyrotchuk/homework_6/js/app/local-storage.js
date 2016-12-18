(function () {

    var lStorage = {

        data : [],

        setData : function () {

            this.data = JSON.parse(localStorage.getItem('list') || '[]');

        },

        addElem : function (model) {

            this.data.push(model);

            localStorage.setItem('list', JSON.stringify(this.data));
        },

        removeElem : function (model) {

            this.data.forEach(function (el, index, array) {
                if (el.date === model.date) {
                    array.splice(index, 1);
                }
            });

            this.updateData();

        },

        editElem : function (model) {

            this.data.forEach(function (el, index, array) {
                if (el.date === model.date) {
                    array[index].value = model.value;
                    array[index].checked = model.checked
                }
            });

            this.updateData();

        },

        updateData : function () {

            localStorage.setItem('list', JSON.stringify(this.data));

        }

    };

    window.lStorage = lStorage;

    lStorage.setData();

})();
