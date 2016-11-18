(function () {

    /**
     * Overwrite default SetTimeout function.
     *
     * @param {function} defaultFn - Original function.
     * @returns {function}
     */
    function customSetTimeout(defaultFn) {
        return function (delay, callback) {
            return defaultFn(callback, delay);
        };
    }

    /**
     * Export customSetTimeout function.
     */
    window.setTimeout = customSetTimeout(setTimeout);

    /**
     * Overwrite default setInterval function.
     *
     * @param {function} defaultFn - Original function.
     */
    function customSetInterval(defaultFn) {

    }

    /**
     * Export customSetInterval function.
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

    var frozenFunc = freeze(100, fncToDelay);

    frozenFunc('1');
    frozenFunc('2');
    frozenFunc('3');
    frozenFunc('4');
    frozenFunc('5');
    frozenFunc('6');
    frozenFunc('7');
    frozenFunc('8');
    frozenFunc('9');

    /**
     * Decorator for filter string.
     *
     * @param {function} originalFnc
     * @param {array} filters - Array of filters.
     * @returns {function}
     */
    function createPipe(originalFnc, filters) {

        return function (string) {
            var initialStr = string;

            if (filters) {
                for (var i = 0; i < filters.length; i++) {
                    initialStr = filters[i](initialStr);
                }
            }

            return originalFnc(initialStr);
        }
    }

    /**
     * Capitalize first letter of each word in string
     *
     * @param string
     */
    function originalFnc(string) {
        var result,
            splitStr = string.toLowerCase().split(' ');

        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }

        result = splitStr.join(' ');

        console.log(result);
    }

    /**
     * Remove all digits from string.
     *
     * @param {string} string - String to remove.
     * @returns {string}
     */
    function filterDigits(string) {
        return string.replace(/\d+/g, '');
    }

    /**
     * Remove all special symbols from string.
     *
     * @param {string} string - String to remove.
     * @returns {string}
     */
    function filterSpecial(string) {
        return string.replace(/[!@#$%^&*()+=]/g, '');
    }

    /**
     * Replace two and more white spaces to one.
     *
     * @param {string} string - String to remove.
     * @returns {string}
     */
    function filterWhiteSpaces(string) {
        return string.replace(/\s\s+/g, ' ');
    }

    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);

    pipe('on345l90y    te**x((((t     h$&er@@@e'); // logs 'Only Text Here'
})();