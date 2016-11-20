(function () {

    //3.

    function fncToDelay (param) {

        console.log('Delayed run : ' + param);

    }

    function freeze (delay, fnc) {

        var timeout;

        var temp =[];

        return function () {

            var args = [].slice.call(arguments);

                for (var i=0; i<args.length; i++){

                    temp.push(args[i]);

                }

                if(timeout){

                    clearTimeout(timeout);

                }

                timeout = setTimeout(function () {

                    fnc.apply(this, temp);

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

    //4.

    //var str = 'on345l90y    te**x((((t     h$&er@@@e';

    function createPipe (originalFnc, array){

        return function (result) {

            for (var i = 0; i < array.length; i++) {

                result = array[i](result);

            }

            originalFnc(result);
        }
    }

    function originalFnc(str) {

        result = str.replace(/\w\S*/g, function(string) {

            return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();});

        console.log(result);
    }

    //console.log(originalFnc(str));

    function filterDigits (str){

        result = str.replace(/\d/g,'');

        return result;

    }

    //console.log(filterDigits(str));

    function filterSpecial (str) {

        result = str.replace(/[!@#$%^&*()+=]/g, '');

        return result;

    }
    //console.log(filterSpecial(str));

    function filterWhiteSpaces (str) {

        result = str.replace(/\s+/g, ' ');

        return result;

    }

    //console.log(filterWhiteSpaces(str));

    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);

    pipe ('on345l90y    te**x((((t     h$&er@@@e');

})();
