(function(){
    console.log("===========---------- Homework 3");

    // Task 1: Reverse setTimeout arguments
    function test() {
        console.log("Test");
    }
    var oldSetTimeout = setTimeout;
    function newSetTimeout(delay, callback) {
        return oldSetTimeout(callback, delay);
    }
    setTimeout = newSetTimeout;
    setTimeout(2000, test);

    // Task 2: window.setTimeout include in window.setInterval
    function newSetInterval(callback, delay) {
        setTimeout(delay, function run() {
            callback();
            setTimeout(delay, run);
        });
    }
    setInterval = newSetInterval;
    setInterval(test, 2000);

    // Task 3: Modify  function freeze to get in decorator the first parametr
    function fncToDelay(param) {
        console.log('Delayed run : ' + param);
    }
    function freeze(delay, fnc) {
        var timeout;
        return function() {
            var args = arguments;
            if (!timeout) {
                timeout = setTimeout(function() {
                    fnc.apply(this, args);
                }, delay);                                 }
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

    // Task 4: Modify input string by filters
    function originalFnc(string) {
        var word = string.split(" ");
        for (var i = 0; i < word.length; i++){
            var j = word[i].charAt(0).toUpperCase();
            word[i] = j + word[i].substr(1);
        }
        console.log(word.join(" "));
    }
    function filterDigits(string) {
        return string.replace(/\d/g, "");
    }
    function filterSpecial(string) {
        return string.replace(/[!@#$%^&*()+=]/g, "");
    }
    function filterWhiteSpaces (string) {
        return string.replace(/(\s){2,}/g, " ");
    }
    // console.log(originalFnc(filterSpecial(filterDigits(filterWhiteSpaces(testStr)))));
    function createPipe(originalFnc, arr) {
        return function() {
            function recFunc(strTemp, x) {
                if (x < arr.length) {
                    strTemp = recFunc(arr[x].apply(this, new Array(strTemp)), ++x);
                }
                return strTemp;
            }
            originalFnc.apply(this, new Array(recFunc(arguments[0], 0)));
        }
    }
    var arrayFilters = [filterDigits, filterSpecial, filterWhiteSpaces];
    var pipe = createPipe(originalFnc, arrayFilters);
    pipe('on345l90y    te**x((((t     h$&er@@@e'); // logs 'Only Text Here'

})();