(function () {
    var countTodo = {

        active : $('[data-count-act]'),
        complete : $('[data-count-com]'),
        all: $('[data-count-all]'),
        data : window.appData.data,
        count : function () {
            var countCom = 0;
            var countAct = 0;
            var countAll = 0;
            this.data.forEach(function (item) {
                if(item.done){
                    countCom++;
                }else{
                    countAct++;
                }
            });
            countAll = countCom + countAct;
            this.all.text(countAll);
            this.active.text(countAct);
            this.complete.text(countCom);
        },
        updateCount : function () {
            this.count();
        }
    };
    window.countTodo = countTodo;

})();