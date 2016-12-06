(function() {
    var originSetTimeout = window.setTimeout;
    window.setTimeout = function(delay, callback) {
        return originSetTimeout(callback, delay);
    };
    var originSetInterval = window.setInterval;
    window.setInterval = function(callback, delay) {
        this.setTimeout(delay, function() {
            callback();
            setInterval(callback, delay);
        });
    };

    function fncToDelay(param) {
        console.log('Delayed run : ' + param);
    };

    setTimeout(1000, function() {
        fncToDelay('"setTimeout"');
    });

    setInterval(function() {
        fncToDelay('"setInterval"');
    }, 1000);

    function freeze(delay, fnc) {
        var timeout;
        var clear;
        return function() {
            var args = arguments;
            if (timeout) {
                clear = true;
            };
            timeout = setTimeout(delay, function() {
                fnc.apply(this, args);
            });
            if (clear) {
                clearTimeout(timeout);
            };
        }
    };
    var frozenFunc = freeze(1000, fncToDelay);
    frozenFunc('1');
    frozenFunc('2');
    frozenFunc('3');
    frozenFunc('4');
    frozenFunc('5');
    frozenFunc('6');
    frozenFunc('7');
    frozenFunc('8');
    frozenFunc('9');

    function originalFnc(string) {
        var result = string.replace(/\w+\s*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
        console.log(result);
    }

    function filterDigits(string) {
        var re = /(\d+)/g;
        var result = string.replace(re, "");
        return result;
    }

    function filterSpecial(string) {
        var re = /([!@#$%^&*()+=]+)/g;
        var result = string.replace(re, "");
        return result;
    }

    function filterWhiteSpaces(string) {
        var re = /(\s+)/g;
        var result = string.replace(re, " ");
        return result;
    }

    function createPipe(originalFnc, decorators) {
        return function() {
            var params = arguments[0];
            for (var i = 0; i < decorators.length; i++) {
                params = decorators[i](params);
            }
            return originalFnc(params);
        }
    }
    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);
    pipe('on345l90y    te**x((((t     h$&er@@@e');
})();