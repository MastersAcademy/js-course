function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}
!supports_html5_storage() && alert('You can\'t use localstorage, please allow it or use another browser!');

window.taskApp = new TaskManager();