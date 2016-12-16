(function() {
    
    var table = document.querySelector('tbody');
    
    for (var i = 0; i < localStorage.length; i++) {
        var taskbody = document.createElement('tr');
        taskbody.innerHTML = localStorage.getItem(i);
        table.appendChild(taskbody);
    }
    
    $('#save').click(function() {
        var tasks = $('table tr:not(#head)');
        for (var i = 0; i < tasks.length; i++) {
            localStorage.setItem(i, tasks[i].innerHTML);
        }
    });
    console.log($('table tr:not(#head)'));
    $('#clear').click(function() {
        localStorage.clear();
    });
})();