(function() {
    
    $(".table").on('click', 'tr', function() {
        if (this.firstChild.id === 'head-table') {} else if (this.className === 'selected') {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected').siblings().removeClass('selected');
        }
    });
    
    var modal = document.getElementById('myModal');
    var closeContact = document.getElementById('close_contact_button');
    
    closeContact.onclick = function() {
        modal.style.display = "none";
    };
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
    
    var okButton = document.getElementById('submit');
    var input = document.getElementById('task');
    
    $(".table").on('dblclick', 'tr', function() {
        var task = this.querySelector('span');
        modal.style.display = "block";
        input.value = task.innerHTML;
        $("#submit").click(function() {
            task.innerHTML = input.value;
            modal.style.display = "none";
        });
    });
    
    $("#add-item").click(function() {
        var taskbody = document.createElement('tr');
        taskbody.innerHTML = ('<th><input type="checkbox" name="items"><span>type your task</span></th>');
        var table = document.querySelector('tbody');
        table.appendChild(taskbody);
        var task = taskbody.querySelector('span');
        modal.style.display = "block";
        input.value = task.innerHTML;
        $("#submit").click(function() {
            task.innerHTML = input.value;
            modal.style.display = "none";
        });

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
    
    $("#mark-all").click(function() {
        var table = document.querySelector('tbody');
        //var checked = table.querySelectorAll(':checked');
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

    $('[data-not-done]').click(function(){
        $('[style ="text-decoration: line-through"]').parent().attr('hidden', true);
        $('th:not([style ="text-decoration: line-through"])').parent().attr('hidden', false);
    });

    $('[data-done]').click(function(){
        $('[style ="text-decoration: line-through"]').parent().attr('hidden', false);
        $('th:not([style ="text-decoration: line-through"], #head-table)').parent().attr('hidden', true);
    });

    $('[data-all]').click(function(){
        $('tr').attr('hidden', false);
    });
})();