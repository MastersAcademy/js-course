(function () {
    //exercise one.
    var func = function(){

        console.log('okay');

    };

    var _setTimeout = window.setTimeout;

    //window.setTimeout = function(delay, func) {

    //   return _setTimeout.call(this, func, delay);

    //};

    window.setTimeout(500, func);

    //exercise two.

    var delay = _setTimeout.delay;

    window.setInterval(func, delay);

    //exercise three

    function fncToDelay (param) {
        console.log('Delayed run : ' + param);
    }

    function freeze (delay, fnc) {
        var timeout;
        var value;
        return function () {
            if(!value) value = arguments;
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(function () {
                fnc.apply(this, value);
            }, delay);
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

    //exercise four
    function createPipe (){
        return 0;
    }
    
    function originalFnc(string) {
    
    }
    
    function filterDigits(string) {
    
    }
})();
