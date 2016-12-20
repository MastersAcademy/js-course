(function() {

    var RadioButtons = {

        $allItems : $('[data-all]'),
        $doneItems : $('[data-done]'),
        $notDoneItems : $('[data-not-done]'),

        listenEvents : function () {
            this.$allItems.click(this.showAll.bind(this));
            this.$doneItems.click(this.showDone.bind(this));
            this.$notDoneItems.click(this.showNotDone.bind(this));
        },

        showAll : function(){
            $('tr').attr('hidden', false);
        },

        showDone : function(){
            $('[style ="text-decoration: line-through"]').parent().attr('hidden', false);
            $('th:not([style ="text-decoration: line-through"], #head-table)').parent().attr('hidden', true);
        },

        showNotDone : function(){
            $('[style ="text-decoration: line-through"]').parent().attr('hidden', true);
            $('th:not([style ="text-decoration: line-through"])').parent().attr('hidden', false);
        }
    };

    window.RadioButtons = RadioButtons;
    RadioButtons.listenEvents();


/*    $('[data-not-done]').click(function(){
        $('[style ="text-decoration: line-through"]').parent().attr('hidden', true);
        $('th:not([style ="text-decoration: line-through"])').parent().attr('hidden', false);
    });

    $('[data-done]').click(function(){
        $('[style ="text-decoration: line-through"]').parent().attr('hidden', false);
        $('th:not([style ="text-decoration: line-through"], #head-table)').parent().attr('hidden', true);
    });

    $('[data-all]').click(function(){
        $('tr').attr('hidden', false);
    });*/

})();