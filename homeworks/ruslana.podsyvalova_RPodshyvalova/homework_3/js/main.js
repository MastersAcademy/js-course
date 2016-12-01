(function() {
    /*
        task 1
     */
    var setTimeoutArchiv = setTimeout;
    setTimeout = function(delay, callback) {
        if (arguments.length === 2 && typeof(callback) === "function"
            && typeof(delay) === "number") {
            return setTimeoutArchiv(callback, delay);
        }
    };
    setTimeout(1000, function() {
        console.log("Hello world! - from task #1");
    });

    /*
        task 2
     */
    setInterval = function(callback, delay) {
        setTimeout(delay, function emulateSetIntervalAct() {
            callback();
            setTimeout(delay,  emulateSetIntervalAct);
        });
    };
    setInterval(function() {
        console.log("Hello world! - from task #2");
    },  2000);

    /*
        task 3
     */
    function fncToDelay(param) {
        console.log("Delayed run : " + param);
    }
    
    // to do canceling(clearTimeout) - for all frozenFunc("2")...frozenFunc("9"), besides frozenFunc("1")
    function freeze(delay, fnc) {
        var timeout;
        var firstTimerId = 0;
        return function() {
            var args = arguments;
            timeout = setTimeout(function() {
                fnc.apply(this, args);
            }, delay);
            if (firstTimerId == 0) {
                firstTimerId = timeout;
            }
            if (timeout > firstTimerId) {
                clearTimeout(timeout);
            }
        }
    }
    var frozenFunc = freeze(1000, fncToDelay);
    frozenFunc("1");
    frozenFunc("2");
    frozenFunc("3");
    frozenFunc("4");
    frozenFunc("5");
    frozenFunc("6");
    frozenFunc("7");
    frozenFunc("8");
    frozenFunc("9");

    /*
        task 4
     */
    function createPipe(originalFunction, arrayOfFilters) {
        return function() {
            function runFilter(strParam, index) {
                if (index > 0) {
                    strParam = runFilter(arrayOfFilters.pop().apply(this, new Array(strParam)), --index);
                }
                return strParam;
            }
            originalFunction.apply(this, new Array(runFilter(arguments[0], arrayOfFilters.length)));
        }
    }
    
    function originalFnc(string) {
        var result = string.replace(/\b[a-z]/g, function() {
            return arguments[0].toUpperCase();
        });
        console.log(result);
    }
    
    function filterDigits(string) {
        return string.replace(/\d+/g, "");
    }
   
    function filterSpecial(string) {
        return string.replace(/[!@#$%^&*()+=]/g, "");
    }
    
    function filterWhiteSpaces(string) {
        return string.replace(/(\s+){1,}/g, " ");
    }

    /*
     there is an opportunity to add a new filter to array, called filters, and run it,
     you need just to describe a new filter, like  function addDotAtTheEnd(string) for example,
     and push it to array - filters
    */
    function addDotAtTheEnd(string) {
        return string + ".";
    }
    
    var filters = [];
    filters.push(filterDigits);
    filters.push(filterSpecial);
    filters.push(filterWhiteSpaces);
    filters.push(addDotAtTheEnd);
    console.log("Results from task #4: ");
    var pipe = createPipe(originalFnc, filters);
    pipe("on345l90y    te**x((((t     h$&er@@@e"); // logs "Only Text Here"
    console.log("\n\n");
})();
