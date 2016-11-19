(function () {

    var timeOut = window.setTimeout;

    window.setTimeout = function (delay, callback) {

        return timeOut(callback, delay, Array.prototype.slice.call(arguments, 2));
    };

    window.setInterval = function (callback, delay) {

        var intervalID = window.setInterval.poolID ? ++window.setInterval.poolID : window.setInterval.poolID = 1;

        var args = arguments;

        window.setInterval[intervalID] = function () {

            callback.apply(this, Array.prototype.slice.call(args, 2));

            setTimeout(delay, window.setInterval[intervalID]);
        };

        setTimeout(delay, window.setInterval[intervalID]);

        return intervalID;
    };

    //setTimeout(2000, console.log, 'ok');
    //setInterval(console.log, 2000, 'ok');

    function functionToDelay(arg) {

        console.log('Delayed run : ' + arg);

    }

    function freeze(delay, callback) {

        var timeoutID, args = [];

        return function () {

            args.push(arguments);

            if (timeoutID) {

                clearTimeout(timeoutID);
            }

            timeoutID = setTimeout(delay, function () {

                callback.apply(this, args[0]);

            });

        }

    }

    var frozenFunction = freeze(1000, functionToDelay);

    frozenFunction('1');
    frozenFunction('2');
    frozenFunction('3');

    function originalFnc(string) {

        console.log(string.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1);
            })
        )
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
    
    function createPipe(originalFnc) {

        var arg = Array.prototype.slice.call(arguments, 1);

        return function () {

            arg.forEach(function (element, index) {
                element.apply(this, arg[index]);
            });


        }
    }

    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);


})();