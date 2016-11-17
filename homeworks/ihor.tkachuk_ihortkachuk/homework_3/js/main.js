(function () {
    window.oldSetTimeout = window.setTimeout;

    window.setTimeout = function (delay, callback) {
        return window.oldSetTimeout(callback, delay);
    };

    setTimeout(2000, function () {
        console.log('testing');
    })

})();