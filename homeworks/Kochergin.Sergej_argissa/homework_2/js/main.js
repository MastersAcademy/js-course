(function () {
    /* 1 */
    var array = [];

    /* 2 */

    for (var i = 0; i < 100; i++) {
        array.push(getRandomInt(1, 100));
    }
    console.log(array);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /* 3 */

    function findMinMax(array, params) {
        if (params == 'max') {
            return Math.max.apply(null, array);
        }
        if (params == 'min') {
            return Math.min.apply(null, array);
        }
    }

    console.log(findMinMax(array, 'min'));
    console.log(findMinMax(array, 'max'));

    /* 4 */

    function convertArrayToObj(array) {

        var names = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var obj = {};
        var j = 1;

        for (i = 0; i < names.length; i++) {

            obj[names[i]] = array[i];

        }

        if (i != array.length) {

            while (i < array.length) {

                obj[j] = array[i];
                i++;
                j++;

            }

        }

        return obj;

    }

    console.log(convertArrayToObj(array));

    /* 5 */

    var newData = [2, 12, 5, 8, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];

    function filterNew(array1, array2) {

        for (var i = 0; i < array1.length; i++)
            for (var j = 0; j < array2.length; j++) {

                if (array1[i] == array2[j]) {

                    array1.splice(i, 1);

                }

            }

    }

    filterNew(newData, oldData);
    console.log(newData);
})();
