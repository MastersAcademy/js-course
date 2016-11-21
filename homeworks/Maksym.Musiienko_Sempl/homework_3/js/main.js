(function (){
    
    // Task 1
    
    var winSetTimeout = window.setTimeout;
    
    window.setTimeout = function (delay, callback) {
        
        var args = [];            
        args[0] = callback;
        args[1] = delay;

        return winSetTimeout.apply(null, args);
        
    };
   
    //test
    //setTimeout(3000, function(){console.log("Hello");});

    // Task 2

    function chgSetInterval(callback, delay) {
        
        setTimeout(delay, function () {
            callback();
            chgSetInterval(callback, delay);
        });

    }

    window.setInterval = chgSetInterval;

    //test
    //setInterval(function(){console.log("Hello");}, 3000);
   

    // Task 3
    function fncToDelay (param) {
        
        console.log('Delayed run : ' + param);
    }


    function freeze(delay, fnc) {

        var timeout;

        return function() {

            var args = arguments;

            if (timeout) {

                return timeout;

            }                          
                
            timeout = setTimeout(delay, function() {
                fnc.apply(this, args);
            });
                
        }
    }
    
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
    */

    // Task 4
    function createPipe(originalFnc, filters) {
  
        return function(result) {
            
            for (var i = 0; i < filters.length; i++) {

                result = filters[i](result);

            }
           
            originalFnc(result);

        }
    }

    function originalFnc (string) {
        
        var arrStr = string.toLowerCase().split(' '),
            result;
  
        for (var i = 0; i < arrStr.length; i++) {

            arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1);
       
        }
  
        result = arrStr.join(' ');
        console.log(result);

    }


    function filterDigits (string) {
        
        var result = string.replace(/\d+/g, '');

        return result;

    }

    function filterSpecial (string) {

        var result = string.replace(/[!@#$%^&*()+=]/g, '');

        return result;

    }

    function filterWhiteSpaces (string) {

        var result = string.replace(/\s\s+/g, ' '); 

        return result;

    }

    //var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);

    //pipe('on345l90y    te**x((((t     h$&er@@@e'); // logs 'Only Text Here'

})();