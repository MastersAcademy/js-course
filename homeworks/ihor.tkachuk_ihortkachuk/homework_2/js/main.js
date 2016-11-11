(function () {
    var array = [];

    for (var i = 0; i < 100; i++) {
        array.push(getRandomNumber(1, 100))
    }

    /**
     * Function to search for the maximum or minimum element of the array.
     *
     * @param { Array } array - Initial array to search.
     * @param { String } string - String specifying the action function.
     * @returns { Number }
     */
    function findMinMax(array, string) {
        if (string == 'max') {
            return Math.max.apply(null, array);
        }
        if (string == 'min') {
            return Math.min.apply(null, array);
        }
    }

    /**
     * The function converts the array into an object where fields contain the letters of the alphabet.
     *
     * @param { Array } array - Source array.
     * @returns { Object }
     */
    function convertArrayToObj(array) {
        var obj = {};
        var i = 1;

        array.forEach(function (element, index) {
            if (index <= 25) {
                var prop = String.fromCharCode(97 + index);
                obj[prop] = element;
            } else {
                obj[i] = element;
                i++;
            }
        });

        return obj;
    }

    /**
     * Function to remove elements of the first array that are contained in the second array.
     *
     * @param { Array } arr1 - First array.
     * @param { Array } arr2 - Second array.
     */
    function filterNew(arr1, arr2) {
        arr2.forEach(function (element) {
            var index = arr1.indexOf(element);
            if (index !== -1) {
                arr1.splice(index, 1)
            }
        });
    }

    /**
     * Returns a random number between min and max.
     *
     * @param { Number } min - Minimum value.
     * @param { Number } max - Maximum value.
     * @returns { Number }
     */
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

})();