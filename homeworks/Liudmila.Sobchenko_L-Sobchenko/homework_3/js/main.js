(function () {

    //task #1 *****

    this.setTimeout = function () {
        var decorator = setTimeout;
        return function (delay, callback) {
            decorator(callback, delay);
        }
    }();

    setTimeout(1000, function () {
        console.log("1 sec interval gone");
    } );

    //task #2 *****

    var setInterval = function (callback, delay) {
        function decorator() {
            callback();
            setTimeout(delay, decorator);
        }
        setTimeout(delay, decorator);
    };

    setInterval(function () {
        console.log("1 sec timer ");
    }, 1000);

    //task #3 *****

    function fncToDelay(param) {
        console.log('Delayed run : ' + param);
    }

    function freeze(delay, fnc) {
        var timeout;
        return function () {
            if(!timeout) {
                var args = arguments;
                setTimeout(delay, function () {
                    fnc.apply(this, args);
                });
                timeout = args;
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

    //task #4 *****

    function originalFnc (string) {
        var array = string.split(' ');
        for (var i = 0; i < array.length; i++) {
            array[i] = array[i][0].toUpperCase() + array[i].slice(1);
        }
        console.log(array.join(' '));
    }

    function filterDigits (string) {
        return string.replace(/[0-9]/g, '');
    }

    function filterSpecial (string) {
        return string.replace(/[!@#$%^&*()+=]/g, '');
    }

    function filterWhiteSpaces (string) {
        return string.replace(/  +/g, ' ');
    }

    function createPipe(originalFnc, filters) {
        return function (string) {
            for (var i = 0; i < filters.length; i++) {
                string = filters[i](string);
            }
            return originalFnc(string);
        };
    }
    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);

    pipe('on345l90y    te**x((((t     h$&er@@@e'); // logs 'Only Text Here'

})();