(function () {

    //task #1

    var timeOut = window.setTimeout;

    window.setTimeout = function (delay, callback) {

        var args = Array.prototype.slice.call(arguments);

            return timeOut(function () {
                callback.apply(this, args.slice(2));
            }, delay);

    };

    funcWithParam = function (a, b) {
        console.log(a + b);
    };

    funcWithoutParam = function () {
        console.log(' function without parameters');
    };

    setTimeout(2000, funcWithParam, 3, 3);
    setTimeout(2000, funcWithoutParam);

    //task #2

    window.setInterval(fncToDelay, 2000, 'interval');

    window.setInterval = function (callback, delay) {

        var args = arguments;

        var intervalID = window.setInterval.ids ? ++window.setInterval.ids : window.setInterval.ids = 1;

        window.setInterval[intervalID] = function () {

            callback.apply(this, Array.prototype.slice.call(args, 2));

        };

        setTimeout(delay, window.setInterval[intervalID]);

        return intervalID;
    };

    //task #3

    function fncToDelay (param) {

        console.log('Delayed run : ' + param);

    }

    function freeze (delay, fnc) {

        var timeout;
        var args = [];

        return function () {

            args.push(arguments);

            if(timeout){
                clearTimeout(timeout);
            }

            timeout = setTimeout(delay, function () {
                fnc.apply(this, args[0]);
            }); // use new method setTimeout, that already overridden
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

    //task 4

    function originalFnc (string) {

        var result = string.replace(/\b\w/g, function(l){ return l.toUpperCase() });
        console.log(result);
    }

    function filterDigits (string) {

        return string.replace(/\d+/g, '');
    }

    function filterSpecial (string) {

        //...! @ # $ % ^ & * ( ) + =

        return  string.replace(/[!@#$%^&*()]/g,'');
    }

    function filterWhiteSpaces (string) {

        return string.replace(/  +/g, ' ');
    }

    function createPipe(originalFnc, arrFunc) {
        var arrFunctions  = arrFunc;
        return function (str) {
            var result;
            result = arrFunctions.reduce(function(previousValue, currentFunction) {
                return currentFunction(previousValue);
            }, str);

            originalFnc(result);
        }

    }

    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);

    pipe('on345l90y      t2e!@#$%^&*()xt     h$&0er@@@e'); // logs 'Only Text Here'
})();
