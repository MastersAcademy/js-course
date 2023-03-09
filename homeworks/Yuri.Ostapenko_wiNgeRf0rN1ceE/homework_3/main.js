(function() {

	//1) Redefinition setTimeout

	var originalTimeOut = window.setTimeout;

	window.setTimeout = function(delay, callback) {

		var params = arguments;

		return originalTimeOut(function() {

			callback.apply(this, params); 

		}, delay);

	};

	//2) Redefinition setInterval

	window.setInterval = function(callback, delay) {

		var params = arguments;

		return setTimeout(delay, function() {

			callback.apply(this, params);

			setInterval(callback, delay);

		});

	};

	//3) Redefinition freeze
    
    function fncToDelay (param) {

         console.log('Delayed run : ' + param);

    }

    function freeze(delay, fnc) {

        var timeout;

        return function () {

            var args = arguments;

            if (timeout) {

                return timeout;

            }

            timeout = setTimeout(delay, function () {

                fnc.apply(this, args);

            });
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

    //4) Сreating a decorator for filters 

    function createPipe (originalFnc, functions) {

        return function(string) {

        var result = string;

        var i = 0;

        while (i < functions.length) {

        	result = functions[i](result);

        	i++;
        }

        originalFnc(result);

        }
    }

    function originalFnc (string) {

        var result = string.toLowerCase().replace(/\b[a-z]/g, function(str) {

            return str.toUpperCase();

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