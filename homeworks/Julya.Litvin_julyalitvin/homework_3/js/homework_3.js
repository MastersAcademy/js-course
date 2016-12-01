(function () {

    /**__________________________________________
     *
     * task 1
     * setTimeout parameters exchanging
     * __________________________________________
     */

    var oldSetTimeout = window.setTimeout;

    window.setTimeout = function (delay, func) {

        return oldSetTimeout(func, delay);
    };

    /**__________________________________________
     *
     * task 2
     * setInterval rewriting using new setTimeout
     * __________________________________________
     */

    var oldSetInterval;

    function oldSetInterval (func, delay) {

        return function recurs() {

            func();
            oldSetInterval = setTimeout(delay, recurs);
        }
    };

    /**__________________________________________
     *
     * task 3
     * freeze rewriting
     * __________________________________________
     */

    function fncToDelay(param) {

        console.log('Delayed run : ' + param);

    }

    function freeze(delay, fnc) {

        var timeout;

        return function () {

            var args = arguments;

            if (!timeout) {
                timeout = setTimeout(delay, function () {

                    fnc.apply(this, args);

                    clearTimeout(timeout);
                });
            }
        };
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

    /**__________________________________________
     *
     * task 4
     * createPipe decorator
     * __________________________________________
     */

    function originalFnc(string) {

        var regexp = /[^ ]*\b[a-z]/g;

        string = string.replace(regexp, function (str) {

            return str.toUpperCase();
        });

        console.log(string);
    }

    function filterDigits(string) {

        var regexp = /\d/g;

        string = string.replace(regexp, "");

        return string;

    }

    function filterSpecial(string) {

        var regexp = /[!@#$%^&*()+=]/g;

        string = string.replace(regexp, "");

        return string;
    }

    function filterWhiteSpaces(string) {

        var regexp = / {2,}/g;

        string = string.replace(regexp, " ");

        return string;
    }

    function createPipe(originalFnc, functions) {

        return function () {

            var args = arguments;

            args = functions[0].apply(this, args);

            for (var i = 1; i < functions.length; i++) {
                args = functions[i](args);
            }

            originalFnc(args);
        }
    }


    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);

    pipe('on345l90y    te**x((((t     h$&er@@@e');

})();