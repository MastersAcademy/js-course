(function() {
    
    var LocalStorage = {
        
        table : document.querySelector('tbody'),
        $saveButton : $('#save'),
        $clearButton : $('#clear'),

        listenEvents : function() {
            this.$saveButton.click(this.saveToStorage.bind(this));
            this.$clearButton.click(this.clearStorage.bind(this));
        },

        saveToStorage : function() {
            var tasks = $('table tr:not(#head)');
            for (var i = 0; i < tasks.length; i++) {
                localStorage.setItem(i, tasks[i].innerHTML);
            }
            alert('Saved');
        },

        loadFromStorage : function() {
            for (var i = 0; i < localStorage.length; i++) {
                var taskbody = document.createElement('tr');
                taskbody.innerHTML = localStorage.getItem(i);
                this.table.appendChild(taskbody);
            }
        },

        clearStorage : function() {
            localStorage.clear();
            alert('Cleared');
        }
    };

    window.LocalStorage = LocalStorage;
    LocalStorage.loadFromStorage();
    LocalStorage.listenEvents();


    /*var table = document.querySelector('tbody');
    
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
    //console.log($('table tr:not(#head)'));
    $('#clear').click(function() {
        localStorage.clear();
    });*/
})();