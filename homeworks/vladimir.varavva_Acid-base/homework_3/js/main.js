(function() {
    'use strict';

    //1
    var nativeSetTimeOut = window.setTimeout;
    window.setTimeout = newSetTimeout();
    function newSetTimeout() {
        var i = 1;
        return function(delay, callback) {
            var args = Array.prototype.slice.call(arguments, 2);
            if (typeof callback === 'function') {
                nativeSetTimeOut(function() {
                    callback.apply(this, args);
                }, delay);
            }
            return i++;
        };
    }

    //2
    window.setInterval = newSetInterval();
    function newSetInterval() {
        var i = 1;
        return function(callback, delay) {
            var args = Array.prototype.slice.call(arguments, 2);
            setTimeout(delay, function loop() {
                callback.apply(this, args);
                setTimeout(delay, loop);
            });
            return i++;
        };
    }

    //3
    function freeze(delay, fnc) {
        var timeout = true;
        return function() {
            var args = arguments;
            timeout = nativeSetTimeOut(function() {
                if (timeout) {
                    fnc.apply(this, args);
                    timeout = false;
                }
            }, delay);
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
        return console.log(result);
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