(function () {


    //1----
    function newSetTimeout(setTime){
        return function(delay, func){
            setTime(func, delay);
        }
    }
    window.setTimeout = newSetTimeout(window.setTimeout);
    window.setTimeout(1000, function(){alert('hello!')});


    //2----
    window.setInterval = function setInterval(func, delay){
        window.setTimeout (delay, function(){
            func();
            setInterval(func, delay);
        });           
    }
    window.setInterval(function() {
        //console.log('test');
    }, 1000);


    //3----
    //Do not use with first example (method timeout changed), pleas commented first example
    function fncToDelay (param) {
        console.log('Delayed run : ' + param);
    }
    function freeze (delay, fnc) {
        var timeout, args;
        return function () {
            if (args == undefined)
                args = arguments;
            if(timeout)
                clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                fnc.apply(this, args);
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


    //4----
    function createPipe(originF, ollF){
        return function (string) {
                for (i = 0; i < ollF.length; i++)
                    string = ollF[i].apply(this, arguments);
                originF.apply(this, arguments);
        }
    }

    function originalFnc (string) {
        string = string.charAt(0).toUpperCase() + string.substr(1);
        for(var i = 0; i < string.length; i++)
            if (string[i] == ' ') 
                string = string.substr(0, i+1) + string.charAt(i+1).toUpperCase() + string.substr(i + 2);
        console.log(string);
    }

    function filterDigits (string) {
        string = string.replace(/[0-9]/g, '');
        return (string);
    }

    function filterSpecial (string) {
        string = string.replace(/[!@#$%^&*()+=]/g, '');
        return (string);  
    }

    function filterWhiteSpaces (string) {
        string = string.replace(/\s+/g," ");
        return (string);
    }

    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);

    pipe('on345l90y    te**x((((t     h$&er@@@e'); // logs 'Only Text Here'

})();