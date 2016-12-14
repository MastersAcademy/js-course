(function() {
    $(".table").on('click', 'tr', function() {
        if (this.firstChild.id === 'head-table') {
            //console.log(this);
        } else if (this.className === 'selected') {
            $(this).removeClass('selected');
            //console.log(this);
        } else {
            $(this).addClass('selected').siblings().removeClass('selected');
        }
        //console.log(this);
    });
    $("#add-item").click(function() {
        var taskbody = document.createElement('tr');
        taskbody.innerHTML = ('<th><input type="checkbox" name="items">test</th>');
        var table = document.querySelector('tbody');
        table.appendChild(taskbody);
    });
    $("#del-item").click(function() {
        var tr = document.querySelector('.selected');
        tr.remove();
    });
    $("#mark-done").click(function() {
        // var checked = document.getElementsByAttribute('checked','');
        var table = document.querySelector('tbody');
        var checked = table.querySelectorAll(':checked');
        for (var i = 0; i < checked.length; i++) {
            checked[i].parentNode.setAttribute('style', 'text-decoration: line-through');
        }
    });
    $("#mark-not-done").click(function() {
        // var checked = document.getElementsByAttribute('checked','');
        var table = document.querySelector('tbody');
        var checked = table.querySelectorAll(':checked');
        for (var i = 0; i < checked.length; i++) {
            checked[i].parentNode.removeAttribute('style');
        }
    });
    
    $("#mark-all").click(function(){
        var table = document.querySelector('tbody');
        //var checked = table.querySelectorAll(':checked');
        var input = table.querySelectorAll('input');
        var i=0;
        if(this.checked === true){
            for (i ; i < input.length; i++){
                // input[i].setAttribute('checked');
                $(input[i]).prop("checked", true);
            }
        }
        if(this.checked === false){
            console.log('false');
            for (i ; i < input.length; i++){
                // input[i].removeAttribute('checked');
                $(input[i]).prop("checked", false);
            }
        }
    })
})();
