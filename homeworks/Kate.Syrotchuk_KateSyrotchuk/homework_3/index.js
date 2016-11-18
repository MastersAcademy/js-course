(function () {

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

            timeout = setTimeout(function () {

                fnc.apply(this, args[0]);

            }, delay);

        }

    }
    //
    // var frozenFunc = freeze(1000, fncToDelay);
    //
    // frozenFunc('1');
    // frozenFunc('2');
    // frozenFunc('3');
    // frozenFunc('4');
    // frozenFunc('5');
    // frozenFunc('6');
    // frozenFunc('7');
    // frozenFunc('8');
    // frozenFunc('9');

    //task 4

    function originalFnc (string) {

        var result = string + ' a ';
        //...
        console.log(result);
    }

    function filterDigits (string) {

        //...
        var result = string + ' b ';

        return result;
    }

    function filterSpecial (string) {

        //...! @ # $ % ^ & * ( ) + =

        var result = string + ' c ';

        return result;
    }

    function filterWhiteSpaces (string) {

        //...
        var result = string + ' d ';

        return result;
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

    pipe('str');
    // pipe('on345l90y    te**x((((t     h$&er@@@e'); // logs 'Only Text Here'
})();
