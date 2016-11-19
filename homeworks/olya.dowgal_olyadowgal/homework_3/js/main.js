/**
 * Created by olhadovhal on 11/18/16.
 */

(function () {

    //Task 1

    var defaultTimeout = window.setTimeout;

    window.setTimeout = function (delay, callback) {
        return defaultTimeout(callback, delay);
    };

    // Task 1 Test

    var funcTimeout = function () {
        console.log('own timeOut for 1 time work!');
    };

    window.setTimeout(1000, funcTimeout);

    //Task 2

    var defaultInterval = window.setInterval;

    window.setInterval = function (callback, delay) {
        window.setTimeout(delay, function () {
            callback.call();
            window.setInterval(callback, delay);
        })
    };
    //Task 2 Test

    var funcInterval = function () {
        console.log('own Interval: one more sec left');
    };

    window.setInterval(funcInterval, 1000);

    // return Timeout and Interval to default

    window.setTimeout = defaultTimeout;
    window.setInterval = defaultInterval;

    // Task 3

    function fncToDelay(param) {
        console.log('Delayed run : ' + param);
    }

    function freeze(delay, fnc) {
        var timeout;
        return function () {
            var args = arguments;
            if (!timeout) {
                timeout = setTimeout(function () {
                    fnc.apply(this, args);
                }, delay);
            }
        }

    }

    // Task 3 Test

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

    // Task 4

    function originalFnc(string) {
        var isPrevLetter = false;
        var charArr = [];
        for (var i = 0; i < string.length; i++) {
            if (string[i].match(/[a-zA-Z]/g)) {
                if (isPrevLetter) {
                    charArr[i] = string[i];
                } else {
                    charArr[i] = string[i].toUpperCase();
                }
                isPrevLetter = true;
            } else {
                charArr[i] = string[i];
                isPrevLetter = false;
            }
        }
        var result = charArr.join("");
        console.log('After originalFnc: ' + result);
    }

    function filterDigits(string) {
        return string.replace(/\d+/g, '');
    }

    function filterSpecial(string) {
        return string.replace(/[!@#$%^&*()+=]/g, '');
    }

    function filterWhiteSpaces(string) {
        return string.replace(/\s\s+/g, ' ');
    }

    function createPipe(original, functions) {
        return function (result) {
            functions.forEach(function (func) {
                result = func(result);
                console.log('After ' + func.name + ': ' + result);
            });
            return original(result);
        }
    }

    //Task 4 Test

    const ORIGINAL = originalFnc;
    const FILTER_ARR = [filterDigits, filterSpecial, filterWhiteSpaces];
    const TESTSTRING = 'on345l90y    te**x((((t     h$&er@@@e';
    console.log('Original string: ' + TESTSTRING);
    createPipe(ORIGINAL, FILTER_ARR)(TESTSTRING);

})();