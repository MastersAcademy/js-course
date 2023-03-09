/**
 * Created by Summer on 20.11.2016.
 */
(function () {

    function test(){
        return alert("Test")
    }


    // Task 1

    function newSetTime(value){
       return function (delay, func){
           return value(func, delay)
       }
    }
    window.setTimeout = newSetTime(setTimeout);
    //window.setTimeout(2000, test);


    //Task 2

    function newSetInterval(func, delay){
       setTimeout(delay,
           function(){
           newSetInterval(func,delay);
           func();
       } );
    }
    window.setInterval = newSetInterval;
    //window.setInterval(test,2000);


    //Task 3

    function fncToDelay (param) {
        console.log('Delayed run : ' + param);
    }

    function freeze (delay, func) {
        var timeout;
        return function () {
            var args = arguments;
            if(!timeout){
                clearTimeout(timeout);
                timeout = setTimeout(delay, function () {
                func.apply(this, args);
            })
            }
        }
    }
/*
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
*/


    //Task 4

    function originalFnc (string) {
        var result= string.replace(/\b(.)/g, function(s) {return s.toUpperCase();});
        console.log(result)
    }

    function filterDigits (string) {
        var result = string.replace(/\d/g, "");
        return result;
    }

    function filterSpecial (string) {
        var result = string.replace(/[!@#$%^&*()+=]/g, "");
        return result;
    }

    function filterWhiteSpaces (string) {
        var result = string.replace(/  +/g, " ");
        return result;
    }

    function createPipe(originalFnc, fnc) {
        return function (value){
            for(var i=0; i<fnc.length; i++){
                value=fnc[i](value);
            }
            return originalFnc(value);
        }
    }

    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);
    //pipe('on345l90y    te**x((((t     h$&er@@@e');

})();