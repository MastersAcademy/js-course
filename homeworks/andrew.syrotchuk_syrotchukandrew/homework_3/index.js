(function () {

    //window.setTimeout(2000, functionToDelay, 'timeout');

    var timeOut = window.setTimeout;

    window.setTimeout = function (delay, callback) {

        var args = arguments;

        if (args.length > 2) {

            return timeOut(function () {

                callback.apply(this, Array.prototype.slice.call(args, 2))

            }, delay);
        }

        else {

            return timeOut(callback, delay);
        }
    };


    // window.setInterval(functionToDelay, 2000, 'interval');

    window.setInterval = function (callback, delay) {

        var args = arguments;

        var intervalID = window.setInterval.poolID ? ++window.setInterval.poolID : window.setInterval.poolID = 1;

        window.setInterval[intervalID] = function () {

            if (args.length > 2) {

                callback.apply(this, Array.prototype.slice.call(args, 2));
            }

            else {

                callback();
            }

            setTimeout(delay, window.setInterval[intervalID]);
        };

        setTimeout(delay, window.setInterval[intervalID]);

        return intervalID;
    };


    // var frozenFunction = freeze(1000, functionToDelay);
    // frozenFunction('1');
    // frozenFunction('2');
    // frozenFunction('3');

    function functionToDelay(arg) {

        console.log('Delayed run : ' + arg);
    }

    function freeze(delay, callback) {

        var timeoutID;

        return function () {

            var args = arguments;

            if (timeoutID) {

                return;
            }

            timeoutID = setTimeout(delay, function () {

                callback.apply(this, args);

            });
        }
    }


    //var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);
    //pipe('on345l90y    565(())))***@#$%^&444464    te**x((((t    6#$%^&59**)(489     h$&er**()((@@@e');

    function createPipe(originalFnc, arrayFunctions) {

        return function (string) {

            for (var i = 0; i < arrayFunctions.length; i++) {

                string = arrayFunctions[i](string);
            }

            originalFnc(string);
        }
    }

    function originalFnc(string) {

        console.log(string.replace(

            /\w\S*/g,

            function (txt) {

                return txt.charAt(0).toUpperCase() + txt.substr(1)
            }));
    }

    function filterDigits(string) {

        return string.replace(/[0-9]/g, '');
    }

    function filterSpecial(string) {

        return string.replace(/[!@#$%^&*()+=]/g, '');
    }

    function filterWhiteSpaces(string) {

        return string.replace(/\s+/g, ' ');
    }
})();