(function () {
    'use strict';

    //1
    var nativeSetTimeOut = window.setTimeout;
//    var setTimeout;

//
    window.setTimeout = function (delay, callback) {
        var args = Array.prototype.slice.call(arguments, 2);

//        return nativeSetTimeOut(callback, delay, args);
        if (typeof callback === 'function') {

        return nativeSetTimeOut(function() {
//            var args = arguments;
            var self = this;
             callback = callback.apply(self, args);
            callback;
        }, delay);
        }
    };

    function add(a, b, c) {
        return console.log('hello, ' + a + ' ' + b + ' ' + c);
    }

        setTimeout(500, add, 'a', 45, null, NaN);



    //2
    window.setInterval = function (callback, delay) {

        var args = Array.prototype.slice.call(arguments, 2),
            timeout;

        (function loop() {
            var result = callback.apply(this, args);
            if (result !== false) {
                timeout = setTimeout(delay, loop);
            }
        }());

        return function () {
            if (timeout) {
                clearTimeout(timeout);
                timeout = 0;
            }
        };
    };

//                setInterval(add, 1500, 42, 45, 45, 45);

})();