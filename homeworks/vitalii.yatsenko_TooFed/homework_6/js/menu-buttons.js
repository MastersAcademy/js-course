(function() {
    
    /*var input = document.getElementById('task');
    var modal = document.getElementById('myModal');
    var table = document.querySelector('tbody');
    var checked = table.querySelectorAll(':checked');*/
    
    var MenuButtons = {

        input : document.getElementById('task'),
        modal : document.getElementById('myModal'),
        table : document.querySelector('tbody'),

        $addItem : $("#add-item"),
        $delItem : $("#del-item"),
        $markDone : $("#mark-done"),
        $markNotDone : $("#mark-not-done"),
        $markAll : $("#mark-all"),

        listenEvents : function() {
            //console.log($('tbody:checked'));
            this.$addItem.click(this.addItem.bind(this));
            this.$delItem.click(this.delItem.bind(this));
            this.$markDone.click(this.markDone.bind(this));
            this.$markNotDone.click(this.markNotDone.bind(this));
            this.$markAll.click(this.markAll.bind(this));
        },

        addItem : function() {
            var taskbody = document.createElement('tr');
            taskbody.innerHTML = ('<th><input type="checkbox" name="items"><span>type your task</span></th>');
            this.table.appendChild(taskbody);
            $('.counter').html($('[style ="text-decoration: line-through"]').length + '/' + $('th:not(#head-table)').length);
        },

        delItem : function() {
            var checked = this.table.querySelectorAll(':checked');
            for (var i = 0; i < checked.length; i++) {
                checked[i].parentNode.parentNode.remove();
            }
            $('.counter').html($('[style ="text-decoration: line-through"]').length + '/' + $('th:not(#head-table)').length);
        },

        markDone : function() {
            var checked = this.table.querySelectorAll(':checked');
            for (var i = 0; i < checked.length; i++) {
                checked[i].parentNode.setAttribute('style', 'text-decoration: line-through');
            }
            $('.counter').html($('[style ="text-decoration: line-through"]').length + '/' + $('th:not(#head-table)').length);
        },

        markNotDone : function() {
            var checked = this.table.querySelectorAll(':checked');
            for (var i = 0; i < checked.length; i++) {
                checked[i].parentNode.removeAttribute('style');
            }
            $('.counter').html($('[style ="text-decoration: line-through"]').length + '/' + $('th:not(#head-table)').length);
        },

        markAll : function() {
            var input = this.table.querySelectorAll('input');
            var i = 0;
            if ($("#mark-all:checked").length === 1) {
                for (i; i < input.length; i++) {
                    $(input[i]).prop("checked", true);
                }
            }
            if ($("#mark-all:checked").length === 0) {
                for (i; i < input.length; i++) {
                    $(input[i]).prop("checked", false);
                }
            }
        }
    };

    window.MenuButtons = MenuButtons;
    MenuButtons.listenEvents();

    /*
    $("#add-item").click(function() {
        var taskbody = document.createElement('tr');
        taskbody.innerHTML = ('<th><input type="checkbox" name="items"><span>type your task</span></th>');
        table.appendChild(taskbody);
        $('.counter').html($('[style ="text-decoration: line-through"]').length + '/' + $('th:not(#head-table)').length);
    });
    
    $("#del-item").click(function() {
        var checked = table.querySelectorAll(':checked');
        for (var i = 0; i < checked.length; i++) {
            checked[i].parentNode.parentNode.remove();
        }
        $('.counter').html($('[style ="text-decoration: line-through"]').length + '/' + $('th:not(#head-table)').length);
    });
    
    $("#mark-done").click(function() {
        var checked = table.querySelectorAll(':checked');
        for (var i = 0; i < checked.length; i++) {
            checked[i].parentNode.setAttribute('style', 'text-decoration: line-through');
        }
        $('.counter').html($('[style ="text-decoration: line-through"]').length + '/' + $('th:not(#head-table)').length);
    });
    
    $("#mark-not-done").click(function() {
        var checked = table.querySelectorAll(':checked');
        for (var i = 0; i < checked.length; i++) {
            checked[i].parentNode.removeAttribute('style');
        }
        $('.counter').html($('[style ="text-decoration: line-through"]').length + '/' + $('th:not(#head-table)').length);
    });
    
    $("#mark-all").click(function() {
        var input = table.querySelectorAll('input');
        var i = 0;
        if (this.checked === true) {
            for (i; i < input.length; i++) {
                // input[i].setAttribute('checked');
                $(input[i]).prop("checked", true);
            }
        }
        if (this.checked === false) {
            console.log('false');
            for (i; i < input.length; i++) {
                // input[i].removeAttribute('checked');
                $(input[i]).prop("checked", false);
            }
        }
    });*/

})();