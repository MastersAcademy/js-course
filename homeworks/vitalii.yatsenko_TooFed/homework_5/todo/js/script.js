(function() {
    
    $(".table tr").click(function() {
        if (this.firstChild.id === 'head-table') {
            console.log(this);
        } else if (this.className === 'selected') {
            $(this).removeClass('selected');
            console.log(this);
        } else {
            $(this).addClass('selected').siblings().removeClass('selected');
        }
        console.log(this);
    });
    
    $("#add-item").click(function() {
        var taskbody = document.createElement('tr');
        taskbody.innerHTML = ('<th><input type="checkbox" name="items">test</th>');
        var table = document.querySelector('.table');
        table.appendChild(taskbody);
    });
    
    $("#del-item").click(function() {
        var tr = document.querySelector('.selected');
        tr.remove();
    });

    $("#mark-done").click(function(){
       // var checked = document.getElementsByAttribute('checked','');
        var checked = document.getElementsBy('checked');
       // querySelectorAll("[xlink|href='"+id+"']");
        
        console.log(checked);

    })

})();