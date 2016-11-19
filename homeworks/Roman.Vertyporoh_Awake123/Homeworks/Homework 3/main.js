(function () {

    

    //.3

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

    // frozenFunc('1');
    // frozenFunc('2');
    // frozenFunc('3');
    // frozenFunc('4');
    // frozenFunc('5');
    // frozenFunc('6');
    // frozenFunc('7');
    // frozenFunc('8');
    // frozenFunc('9');

})();