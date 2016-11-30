(function () {

    //First Task

    var originST = window.setTimeout;

    window.setTimeout = function setTimeout(delay, callback) {
        return originST(callback, delay);
    };

    //Second Task

    var originSI = window.setInterval;

    window.setInterval = function (callback, delay) {

        setTimeout(delay, function callPulse() {
            callback();
            setTimeout(delay, callPulse);
        });

    };

    //Task Three

    function fncToDelay (param) {

        console.log('Delayed run : ' + param);

    }

    function freeze (delay, fnc) {

        var timeout, firstItem;

        return function () {

            var args = arguments;

            timeout = setTimeout(delay, function () {

                fnc.apply(this, args);

            });

            if (timeout && firstItem) {

                clearTimeout(timeout);

            }

            firstItem = true;

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

    //Task Four

    function createPipe (originalFnc, arrFunc) {

        return function(string) {

            var result = originalFnc(string);

            arrFunc.forEach(function (f) {
                if (typeof f == "function") {
                    result = f(result);
                }
            });

            return result;
        };
    }

    function originalFnc (string) {

        if (typeof string == "string") {
            return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }

        return string;
    }

    function filterDigits (string) {

        if (typeof string == "string") {

            return string.replace(/\d/g, '');
        }

        return string;
    }

    function filterSpecial (string) {

        if (typeof string == "string") {
            return string.replace(/[!@#$%\^&*()+=?<>{}]/g, '');
        }

        return string;
    }

    function filterWhiteSpaces (string) {

        if (typeof string == "string") {
            return string.replace(/\s+/g, ' ');
        }

        return string;
    }

    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);

    var test = pipe('on345l90y    te**x((((t     h$&er@@@e'); // logs 'Only Text Here'
    console.log(test);

})();

