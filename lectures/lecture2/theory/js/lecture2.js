(function () {

    //context();
    function context () {

        console.clear();

        console.log(this.document === document); // true

        // In web browsers, the window object is also the global object:

        console.log(this === window); // true

        console.log(this); // true

        this.a = 37;

        console.log(window.a); // 37

        function f1(){
            return this;
        }

        console.log(f1() === window); // the window is the global object in browsers

        var singleton = {

            name : 'Singleton',

            getName : function () {

                console.log(this === window);

                return this.name;

            }

        };

        console.log(singleton.getName());

        function showThisInStrict(){
            "use strict";

            return this;

        }

        console.log('This in strict function: ' + showThisInStrict());

    }

    //closuresAndDecorators();

    function closuresAndDecorators () {

        function outside(x) {

            function inside(y) {

                return x + y;

            }

            return inside;

        }

        var fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it

        var result = fn_inside(5); // returns 8

        var result1 = outside(3)(5); // returns 8

        function fncToDelay (param) {

            console.log('Delayed run : ' + param);

        }

        function freeze (delay, fnc) {

            var timeout;

            return function () {

                var args = arguments;

                if(timeout){

                    clearTimeout(timeout);

                }

                timeout = setTimeout(function () {

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

    }


    //recursion();
    function recursion () {

        console.clear();

        function factorial(n){

            if ((n === 0) || (n === 1))

                return 1;

            else

                return (n * factorial(n - 1));

        }

        console.log(factorial(10));

    }

})();