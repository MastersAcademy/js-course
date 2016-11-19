(function (){
    
    // Task 1

    function setTimeOut(delay, func) {

        return function tick() {
            var savedThis = this;
            var savedArgs = arguments;
            setTimeout(function () {
                func.apply(savedThis, savedArgs)
            }, delay);
        };
    }

    /*Проверка:
    function f(x) {
    console.log( x );
    }

    var f1000 = setTimeOut(1000, f);
    var f1500 = setTimeOut(1500, f);

    f1000("тест"); // выведет "тест" через 1000 миллисекунд
    f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
    */

    // Task 2

    function setInterval(func, delay) {
        return setTimeOut(delay, function tick() {
            var savedThis = this;
            var savedArgs = arguments;
            setTimeout(function () {
                func.apply(savedThis, savedArgs)
            }, delay);
            return setTimeOut(delay, tick);
        });
    }

    /*Проверка:
    function f(x) {
    console.log( x );
    }

    var f1000 = setInterval(f, 1000);
    var f1500 = setInterval(f, 1500);

    f1000("тест"); // выведет "тест" через 1000 миллисекунд
    f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
    */

    // Task 3
    function fncToDelay (param) {
        console.log('Delayed run : ' + param);
    }

    function freeze(delay, fnc) {
        var timeout;
        return function() {
            var args = arguments;
            if (timeout) {
                return;
            }
            timeout = setTimeout(function() {
                fnc.apply(this, args);
            }, delay);
        }
    }

    /*Проверка:
    var frozenFunc = freeze(1000, fncToDelay);

    frozenFunc('1');
    frozenFunc('2');
    frozenFunc('3');
    frozenFunc('4');
    frozenFunc('5');
    frozenFunc('6');
    frozenFunc('7');
    frozenFunc('8');
    frozenFunc('9');*/

    // Task 4

    function originalFnc (string) {
        var arr = string.split(' ');
        var result;
  
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
  
        result = arr.join(' ');
        console.log(result);
    }


    function filterDigits (string) {
        var arr = string.split('');
        var result; 
  
        for (var i = 0; i < arr.length; i++){
            if (arr[i] == '1' || arr[i] == '2' || arr[i] == '3' ||
                arr[i] == '4' || arr[i] == '5' || arr[i] == '6' ||
                arr[i] == '7' || arr[i] == '8' || arr[i] == '9' ||
                arr[i] == '0') {
                arr.splice(i, 1);
                i--;
            }
            if (i === 0) {
                arr[i] = arr[i].toUpperCase();
            }
        }
  
        result = arr.join('');
        return result;
    }

    function filterSpecial (string) {
        var arr = string.split('');
        var result; 
  
        for (var i = 0; i < arr.length; i++){
            if (arr[i] == '!' || arr[i] == '@' || arr[i] == '#' ||
                arr[i] == '&' || arr[i] == '%' || arr[i] == '^' ||
                arr[i] == '$' || arr[i] == '*' || arr[i] == '(' ||
                arr[i] == ')' || arr[i] == '+' || arr[i] == '=') {
                arr.splice(i, 1);
                i--;
            }
        }
  
        result = arr.join('');
        return result; 
    }

    function filterWhiteSpaces (string) {
  
        var doubleSpaces = /\s{2,}/;
        var result = string;

        while (result.search(doubleSpaces) != -1) {
            result = result.replace(doubleSpaces, " ");
        }
        return result; 
    }


    function createPipe(fnc, filters) {
  
        return function(result) {
            for (var i = 0; i < filters.length; i++) {
                result = filters[i](result);
            }
            fnc(result);
        }
    }

    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);

    pipe('on345l90y    te**x((((t     h$&er@@@e'); // logs 'Only Text Here' 
})(); 