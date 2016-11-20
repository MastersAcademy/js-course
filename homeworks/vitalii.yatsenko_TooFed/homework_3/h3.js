(function () {

    // 1 task
    var timeout = window.setTimeout; 
    
    window.setTimeout = function(delay, fn) {
        return timeout.call(this , fn, delay);
    }
    
    // 2 task
    window.setInterval = function(fn, delay) {
        return setTimeout(delay, function recursion(){
            fn();
            setTimeout(delay, recursion)
        });    
    }

    //setInterval(function(){console.log('123')}, 1000);

    //3 task
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
            }
        }
    }

    var frozenFunc = freeze(1000, fncToDelay);
    
    // frozenFunc('1');
    // frozenFunc('2');
    // frozenFunc('3');
    // frozenFunc('4');
    // frozenFunc('5');
    // frozenFunc('6');
    // frozenFunc('7');
    // frozenFunc('8');
    // frozenFunc('9');

    // 4 task
    function createPipe(originalFnc, filterArray){
        return function (inputString){
            var temp;
            for (var i = 0; i < filterArray.length; i++) {
                if (i==0){
                    temp = filterArray[i](inputString);
                }
                else {
                    temp = filterArray[i](temp);
                }
            }
            originalFnc(temp);
        }
    }
    
    function filterDigits(inputString){
        result = inputString.replace(/\d/g, '');
        return result;
    }

    function filterSpecial(inputString){
        result = inputString.replace(/[!@#$%^&*()+=]/g, '');
        return result;
    }

    function filterWhiteSpaces(inputString){
        result = inputString.replace(/\s+/g, ' ');
        return result;
    }

    function filterLowerCase(inputString){
        result = inputString.replace(/\b(\w+)\b/g, function(str){
            return str.toLowerCase();
        });
        return result;
    }

    function filterPointComma(inputString){
        result = inputString.replace(/[.,]/g, '');
        return result;
    }

    function originalFnc(inputString) {
        result = inputString.replace(/\b(\w+)\b/g, function(str){
            return str[0].toUpperCase() + str.slice(1);
        });
        
        console.log(result);
    }

    var pipe = createPipe(originalFnc, [filterPointComma, filterDigits, filterSpecial, filterWhiteSpaces, filterLowerCase]);
    //pipe ('oN345l9,.0y !@#$%,^&*()  tE.**x((((t     h$&er@@@e');

})();