(function () {

    //1.Переписать дефолтный метод window.setTimeout(callback, delay)

	var nativeSetTimeout = window.setTimeout;
	window.setTimeout = function(delay, callback) {
		var args = arguments;
		return nativeSetTimeout(function() {
			callback.apply(this, args);
   		}, delay);
	};

	//2.Переписать дефолтный метод window.setInterval(callback, delay)

	var nativeSetInterval = window.setInterval;
	window.setInterval = function(callback, delay) {
		var args = arguments;
		setTimeout(delay, function () {
	       	callback.apply(this, args);
	        return setInterval(callback, delay);
	    });
	}

	//3.Переделать функцию freeze из лекции

	function fncToDelay (param) {
        console.log('Delayed run : ' + param);
    }

    function freeze(delay, fnc) {
        var timeout;
        return function () {
            var args = arguments;
            if (!timeout) {
            	timeout = setTimeout(function () {
            		fnc.apply(this, args);
                	timeout = null;
                }, delay);
            }
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

    //4.Написать декоратор следующего вида function createPipe (originalFnc, [fnc1, fnc2, fnc3 ... fncN]). 

    function createPipe (originalFnc, checks) {
     	return function(string) {
     		var result = string;
     		for(var i = 0; i < checks.length; i++) {
     			result = checks[i](result);
     		}
     	    return originalFnc(result);
     	}
    }

    function originalFnc (string) {
		var result = string.toLowerCase().replace(/\b[a-z]/g, function(letter) {
			return letter.toUpperCase();
		});
    	console.log(result);
	}

	function filterDigits (string) {
		var result = string.replace(/[0-9]/g, '');
		return result; 
	}

	function filterSpecial (string) {
		var result = string.replace(/[\!\@\#\$\%\^\&\*\(\)\+\=]/g, '');
	    return result; 
	}

	function filterWhiteSpaces (string) {
	    var result = string.replace(/  +/g, ' ');
	    return result; 
	}

	var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);

	pipe('on345l90y    te**x((((t     h$&er@@@e'); // logs 'Only Text Here' 

})();