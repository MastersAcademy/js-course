(function() {
    // 1-st task
    // copy of main setTimeout function
    var setTimeoutOld = window.setTimeout;
    // create new setTimeout function
    window.setTimeout = function() {
        // look at the parameter
        // if second parametr is function
        if(typeof arguments[1] === "function") {
            // swap it
            [arguments[1], arguments[0]] = [arguments[0], arguments[1]];
        }
        // return old setInterval function with new(swap) or old parameters
        return setTimeoutOld(arguments[0], arguments[1]);
    }
    // try it
    /*function Some() {
        console.log("I am callback function");
    }
    window.setTimeout(5000, Some);*/
    
    // 2-nd task
    // create new setInterval function
    window.setInterval = function(callback, delay) {
        // self-invoking function which call callback function
        (function loop() {
            // call callback function
            var result = callback.call();
            // if it is called
            if(result !== false) {
                // closure
                // in fact here we are waiting for delay(ms) for a new start loop
                window.setTimeout(loop, delay);
            }
        })()
    }
    // try it
    /*function Some() {
        console.log(new Date);
    }
    window.setInterval(Some, 500);*/
    
    // 3-rd task
    function fncToDelay(param) {
        console.log('Delayed run : ' + param);
        console.log(new Date);
    }

    function freeze(delay, fnc) {
        // main timeout
        var timeout;
        return function() {
            var args = arguments;
            // if timer is not busy
            if(!timeout) {
                // run timer for fnc
                timeout = setTimeout(function() {
                    fnc.apply(this, args);
                }, delay);
                // for the next "call main timeout" remove it after execution main timeout(delay + 1)
                setTimeout(function() {
                    timeout = null;
                }, delay + 1);
            }
        }
    }
    // try it
    /*var frozenFunc = freeze(1000, fncToDelay);
    frozenFunc('1');
    frozenFunc('2');
    frozenFunc('3');
    frozenFunc('4');
    frozenFunc('5');
    frozenFunc('6');
    frozenFunc('7');
    frozenFunc('8');
    frozenFunc('9');

    setTimeout(function() {
        frozenFunc('2');
        frozenFunc('3');
        frozenFunc('4');
        frozenFunc('5');
        frozenFunc('6');
    }, 2000);*/
    
    // 4-th task
    function originalFnc(string) {
        // to upper case first letter
        result = string.split(" ");
        for(var i = 0; i < result.length; ++i) {
            result[i] = result[i][0].toUpperCase() + result[i].slice(1);
        }
        console.log(result.join(" "));
    }
    
    function filterDigits(string) {
        // delete all digits
        var result = string.replace(/\d*/g, "");
        return result; 
    }

    function filterSpecial(string) {
        // delete special symbols: ! @ # $ % ^ & * ( ) + =
        var re = /[\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=]*/g
        var result = string.replace(re, "");
        return result; 
    }

    function filterWhiteSpaces(string) {
        // delete WhiteSpaces
        var result = string.replace(/\s+/g, " ");
        return result; 
    }
    
    function createPipe(f, filters) {
        return function() {
            // consistently apply filter
            for(var i = 0; i < filters.length; ++i) {
                // change main arguments
                arguments[0] = filters[i](arguments[0]);
            }
            return f.apply(this, arguments);
        }
    }
    // try it
    /*var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);
    pipe("on345l90y    te**x((((t     h$&er@@@e");
    pipe("т9!0$2#к% 3тa^sd! !!!2  fa@@sdf  947!!е2 d++sf ad=*=f  3#4гт   е02347е")*/;
})();