(function () {

    // ************ task 1 ************ //

    var oldTimeout = window.setTimeout;

    window.setTimeout = function (delay, callback) {

        var args = Array.prototype.slice.call(arguments, 2);

        return oldTimeout(callback instanceof Function ? function () {

            callback(args);

        } : callback, delay);

    };

    setTimeout(500, function() {    // test

        console.log('setTimeout 500');

    });

    // ************ task 2 ************ //

    window.globalTimers = [];

    window.setInterval = function (callback, delay) {
        
        var args = Array.prototype.slice.call(arguments, 2);

        var timerId = window.setTimeout(delay, function loop() {
            
            if (window.globalTimers.indexOf(timerId) >= 0) {
                
                callback(args);

                window.setTimeout(delay, loop);

            }
            
        });

        window.globalTimers.push(timerId);
        
        return timerId;

    };

    window.clearInterval = function (intervalID) {

        window.globalTimers.splice(window.globalTimers.indexOf(intervalID),1);
        
        return window.clearTimeout(intervalID);
    };

    (function () {  // test

        var a = 500;
    
        var interval1 = setInterval(function () {
    
            if (a >= 2500) {
    
                clearInterval(interval1);
    
            }
    
            console.log('interval : ' + a);
    
            a = a + 500;
    
        }, 500);

    })();

    // ************ task 3 ************ //

    function fncToDelay (param) {

        console.log('Delayed run : ' + param);

    }

    function freeze (delay, fnc) {

        var timeout;

        return function () {

            var args = arguments;

            if(!timeout){

                timeout = setTimeout(delay, function () {

                    fnc.apply(this, args);

                });

            } else {

                return false;

            }
        }
    }

    var frozenFunc = freeze(3000, fncToDelay);  // test

    frozenFunc('1');
    frozenFunc('2');
    frozenFunc('3');
    frozenFunc('4');
    frozenFunc('5');
    frozenFunc('6');
    frozenFunc('7');
    frozenFunc('8');
    frozenFunc('9');

    // ************ task 4 ************ //

    function createPipe (originalFnc, array) {

        return function (string) {

            var result = array.reduce(function(string, current) {

                return current(string);

            }, string);

            originalFnc(result);
        }
    }


    function originalFnc (string) {

        var result = string.split(' ').map(function(string){

            return string.charAt(0).toUpperCase() + string.slice(1);

        }).join(' ');

        console.log(result);
    }

    function filterDigits (string) {

        return string.replace(/[0-9]/g, "");
    }

    function filterSpecial (string) {

        return string.replace(/[!@#$%^&*()+=]/g,'');
    }

    function filterWhiteSpaces (string) {

        return string.replace(/\s\s+/g, ' ');
    }

    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);

    pipe('on345l90y    te**x((((t     h$&er@@@e'); // logs 'Only Text Here' 

})();
