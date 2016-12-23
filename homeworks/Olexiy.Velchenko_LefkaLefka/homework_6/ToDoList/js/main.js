$(document).ready(function() {
    new GlobalEventListener();
    var localStorage = new LocalStorage();
    localStorage.loadData();
    GlobalFunctional.prototype.countToDoLeft();

    window.onbeforeunload = function() {
        localStorage.saveData();
    };
});