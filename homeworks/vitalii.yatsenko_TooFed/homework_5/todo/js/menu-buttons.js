(function() {
    
    var input = document.getElementById('task');
    var modal = document.getElementById('myModal');
    var table = document.querySelector('tbody');
    var checked = table.querySelectorAll(':checked');
    
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
    });

})();