/**
 * Created by rostislav on 13.11.16.
 */
(function () {
// Task-1

    var newArray = [];

//  Task-2:

    var min = 1;
    var max = 100;

    function getRandom(min, max) {

        return Math.floor(Math.random() * (max - min)) + min;
    };

    for (var i = 0; i < max; i++) {

        newArray[i] = getRandom(min, max); //newArray.push(getRandom(min, max));
    }
    ;

    console.log(newArray);

// Task-3

    var arrayToFind = [3, 6, 0, -6, 12];
    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');

    function findMinMax(arrayToFind, minMax) {

        if (minMax == 'max') {
            return Math.max.apply(null, arrayToFind);
        }

        else if (minMax == 'min') {
            return Math.min.apply(null, arrayToFind);
        }
    }

    console.log("max = " + resultMax);
    console.log("min = " + resultMin);

// Task-4

    function convertArrayToObj(array) {

        var az = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var obj = {};
        var num = 1;

        for (var i = 0; i < array.length; i++) {

            if (i < az.length) {
                obj[az[i]] = array[i];
            }

            else if (i >= az.length) {
                obj[num++] = array[i];
            }
        }

        return obj;
    }

    console.log(convertArrayToObj(newArray));

// Task-5

    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];

    function filterNew(newArr, oldArr) {

        for (var i = 0; i < newArr.length; i++)
            for (var j = 0; j < oldArr.length; j++) {

                if (newArr[i] == oldArr[j]) {

                    newArr.splice(i, 1);

                }

            }

    }

    filterNew(newData, oldData);
    console.log(newData);
})();
