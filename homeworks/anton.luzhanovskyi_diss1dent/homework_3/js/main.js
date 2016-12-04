(function () {

    /* task 1 */

    (function(newSetTimeout) {

        window.setTimeout = function (delay, callback) {

            return newSetTimeout.call(this, callback, delay);

        };

    })(window.setTimeout);

    /* task 2 . notice clearInterval is not changed (its not asked) */

    window.setInterval = function(callback, delay) {

        setTimeout(delay, function repeat() {

            callback();

            setTimeout(delay, repeat);

        });

    };

    /* task 3 */

    function fncToDelay (param) {

        console.log('Delayed run : ' + param);

    }

    function freeze (delay, fnc) {

        var timeout, args, firstargument;

        return function () {

            if (firstargument == undefined) {

                firstargument = arguments; // remember first argument

            }

            args = firstargument;

            if(timeout){

                clearTimeout(timeout);

            }

            timeout = setTimeout(delay, function () {

                fnc.apply(this, args);

            });

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

    /* task 4 */

    function originalFnc (string) {

        var capitalize = function (txt) {

            return txt.charAt(0).toUpperCase() + txt.slice(1);

        };

        var result = string.replace( /\w\S*/g, capitalize); //  search and replace A-Za-z0-9_ with whitespace and capitalize it

        console.log(result);
    }

    function filterDigits (string) {

        return string.replace(/[0-9]/g, '');  // search and replace 0-9
    }

    function filterSpecial (string) {

        return string.replace(/[!@#$%^&*()+=]/g, ''); // search and replace !@#$%^&*()+=
    }

    function filterWhiteSpaces (string) {

        return string.replace(/  +/g, ' ');  // search and replace 2 whitespace
    }

    function createPipe(originalFnc, filters) {

        return function (string) {

            filters.forEach(function (filter) {

                string = filter(string);

            });

            return originalFnc.call(this, string);

        }

    }

    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);

    pipe('on345l90y    te**x((((t     h$&er@@@e'); // logs 'Only Text Here'

})();