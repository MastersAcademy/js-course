(function () {

    /**
     * Overwrite default SetTimeout function
     *
     * @param setTimeout
     * @returns {Function}
     */
    function customSetTimeout(setTimeout) {
        return function (delay, callback) {
            return setTimeout(callback, delay);
        };
    }

    /**
     * Export customSetTimeout function
     */
    window.setTimeout = customSetTimeout(setTimeout);

    /**
     * Overwrite default setInterval function
     *
     * @param setInterval
     */
    function customSetInterval(setInterval) {

    }

    /**
     * Export customSetInterval function
     */
    window.setInterval = customSetInterval(setInterval);

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

    function createPipe(originalFnc) {

    }

    function originalFnc(string) {


        console.log(result);
    }

    function filterDigits(string) {
        return string.replace(/\d+/g, '');
    }

    function filterSpecial(string) {
        return string.replace(/[^a-zA-Z ]/g, '');
    }

    function filterWhiteSpaces(string) {
        return string.replace(/\s\s+/g, ' ');
    }

    // var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);

    // pipe('on345l90y    te**x((((t     h$&er@@@e'); // logs 'Only Text Here'
})();