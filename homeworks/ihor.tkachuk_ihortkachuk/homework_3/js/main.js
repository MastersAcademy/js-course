(function () {

    /**
     * Overwrite default SetTimeout function.
     *
     * @param {Function} defaultFn - Original function.
     * @returns {Function}
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
     * @param {Function} callback - The function will be executed after a delay.
     * @param {Number} delay - The intervals (in milliseconds) on how often to execute the callback function.
     */
    function customSetInterval(callback, delay) {
        setTimeout(delay, function () {
            callback();
            customSetInterval(callback, delay);
        });
    }

    /**
     * Export customSetInterval function.
     */
    window.setInterval = customSetInterval;

    /**
     * Helper function that displays a message in the console of browser.
     *
     * @param param
     */
    function fncToDelay(param) {
        console.log('Delayed run : ' + param);
    }

    /**
     * Freeze function on a given delay.
     *
     * @param {Number} delay - Time in milliseconds for which freeze function.
     * @param {Function} fnc - The function will be executed after a delay.
     * @returns {Function}
     */
    function freeze(delay, fnc) {
        var timeout;

        return function () {
            var args = arguments;

            if (!timeout) {
                timeout = setTimeout(delay, function () {
                    fnc.apply(this, args);
                    timeout = null;
                });
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

    /**
     * Decorator for filter string.
     *
     * @param {Function} originalFnc
     * @param {Array} filters - Array of filters.
     * @returns {Function}
     */
    function createPipe(originalFnc, filters) {

        return function (string) {
            var result = string;

            for (var i = 0; i < filters.length; i++) {
                result = filters[i](result);
            }

            return originalFnc(result);
        }
    }

    /**
     * Capitalize first letter of each word in string
     *
     * @param {String} string - String to capitalize.
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
     * @param {String} string - String to remove.
     * @returns {String}
     */
    function filterDigits(string) {
        return string.replace(/\d+/g, '');
    }

    /**
     * Remove all special symbols from string.
     *
     * @param {String} string - String to remove.
     * @returns {String}
     */
    function filterSpecial(string) {
        return string.replace(/[!@#$%^&*()+=]/g, '');
    }

    /**
     * Replace two and more white spaces to one.
     *
     * @param {String} string - String to remove.
     * @returns {String}
     */
    function filterWhiteSpaces(string) {
        return string.replace(/\s\s+/g, ' ');
    }

})();