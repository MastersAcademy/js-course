(function () {

    /**
     * Overwrite function setTimeout
     *
     * @param setTimeout
     * @returns {Function}
     */
    function mуTimeout(setTimeout) {
        return function (delay, callback) {
            return setTimeout(callback, delay);
        };
    }

    window.setTimeout = mуTimeout(setTimeout);

    setTimeout(1000, function () {
        console.log(11);
    });

    /**
     * Overwrite function setInterval
     *
     * @param callback
     * @param delay
     */
    window.setInterval = function (callback, delay) {

    };

    function fncToDelay(param) {
        console.log('Delayed run : ' + param);
    }

    /**
     *
     * @param delay
     * @param fnc
     * @returns {Function}
     */
    function freeze(delay, fnc) {
        var timeout;

        return function () {
            var args = arguments;

            if (timeout) {
                clearTimeout(timeout);
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


})();