(function() {
    'use strict';

    //1
    var nativeSetTimeout = window.setTimeout;
    window.setTimeout = function(delay, callback) {
        var args = Array.prototype.slice.call(arguments, 2);
        if (callback instanceof Function) {
            return nativeSetTimeout(function() {
                callback.apply(null, args);
            }, delay);
        }
        return nativeSetTimeout(callback, delay);
    };

    //2
    window.setInterval = function(callback, delay) {
        var args = Array.prototype.slice.call(arguments, 2);
        if (callback instanceof Function) {
            return setTimeout(delay, function loop() {
                callback.apply(null, args);
                setTimeout(delay, loop);
            });
        }
        return setTimeout(delay, function loop() {
            eval(callback);
            setTimeout(delay, loop);
        });
    };

    //3
    function freeze(delay, fnc) {
        var timeout;
        return function() {
            var args = arguments;
            timeout = setTimeout(delay, function() {
                if (timeout) {
                    fnc.apply(this, args);
                    timeout = false;
                }
            });
        };
    }

    //4
    function originalFnc(string) {
        var arr = string.split(' '),
            result;
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        result = arr.join(' ');
        console.log(result);
    }

    function filterDigits(string) {
        var result = string.replace(/[0-9]/g, '');
        return result;
    }

    function filterSpecial(string) {
        var result = string.replace(/[!@#$%^&*()+=]/g, '');
        return result;
    }

    function filterWhiteSpaces(string) {
        var result = string.replace(/\s+/g, ' ');
        return result;
    }

    function createPipe(fn, arr) {
        return function(str) {
            for (var i = 0; i < arr.length; i++) {
                str = arr[i](str);
            }
            return fn(str);
        };
    }

})();