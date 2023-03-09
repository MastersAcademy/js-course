(function () {
    var appData = {

        data : [],

        setData : function () {
            this.data = JSON.parse(localStorage.getItem('data') || '[]' )
        },
        addItem : function (item) {
            this.data.push(item);
            this.update();
        },
        deleteItem : function (item) {
            this.data.forEach(function (e, i, arr) {
                if (e.id == item.id) {
                    arr.splice(i, 1);
                }
            });
            this.update();
        },
        edit : function (item) {
            this.data.forEach(function (e,i,arr) {
                if(e.id === item.id){
                    arr[i].todo = item.todo;
                    arr[i].done = item.done;
                }
            });
            this.update();
        },
        update : function () {
            localStorage.setItem('data', JSON.stringify(this.data));
        }
    };
    window.appData = appData;
    appData.setData();
})();
