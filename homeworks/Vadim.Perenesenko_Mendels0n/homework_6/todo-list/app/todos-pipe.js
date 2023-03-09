(function () {
    var pipeTodo = {

        completeBtn: $('[data-pipe-complete]'),

        activeBtn: $('[data-pipe-active]'),
        pipeAll : $('[data-pipe-all]'),
        listenEvents: function () {
            this.activeBtn.on('click', this.pipeActive.bind(this));
            this.completeBtn.on('click', this.pipeComplete.bind(this));
            this.pipeAll.on('click',this.pipeAllShow.bind(this));
        },
        pipeComplete: function () {
            $("li.done").show();
            $("li:not(.done)").hide();

        },
        pipeActive : function () {
            $("li.done").hide();
            $("li:not(.done)").show();
        },
        pipeAllShow : function () {
            $("li").show();
        }

    };
    window.pipeTodo = pipeTodo;
    pipeTodo.listenEvents();
})();