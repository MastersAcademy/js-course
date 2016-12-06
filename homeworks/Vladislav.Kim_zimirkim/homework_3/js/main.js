(function () {

    function switch_signature (function_to_switch) {
        return function() {
            var args = Array.prototype.slice.call(arguments);
            return function_to_switch.apply(null, args.reverse());
        };
    }

    window.setTimeout = switch_signature(window.setTimeout);

    window.setInterval = function (callback, delay) {
        return setTimeout(delay, function loop() {
            callback();
            setTimeout(delay, loop);
        });
    };

    function fncToDelay (param) {
        console.log('Delayed run : ' + param);
    }

    function freeze (delay, fnc) {
        var timeout;
        return function () {
            var args = arguments;
            if(!timeout){
            timeout = setTimeout(delay,function () {
                fnc.apply(this, args);
                });
            }
        }
    }

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

    function createPipe(originalFnc, arr_of_filters) {
        return function(string) {
            var buff;
            for (var i = 0; i < arr_of_filters.length; i++) {
                if (i == 0) {
                    buff = arr_of_filters[i](string);
                }
                else {
                    buff = arr_of_filters[i](buff);
                }
            }
            originalFnc(buff);
        }
    }

    function originalFnc (string) {
        result = string.charAt(0).toUpperCase()+string.slice(1);
        console.log(result);
    }

    function filterDigits (string) {
        result = string.replace(/\d/g,'');
        return result;
    }

    function filterSpecial (string) {
        result = string.replace(/[!@#$%^&*()+=]/g,'')
        return result;
    }

    function filterWhiteSpaces (string) {
        result = string.replace(/\s\s+/g,' ')
        return result;
    }

    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);

    pipe('on345l90y    te**x((((t     h$&er@@@e');

})();
