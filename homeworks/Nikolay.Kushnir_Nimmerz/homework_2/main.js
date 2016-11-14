(function () {

    "use strict";

    // 1 creating array

    var num = [];

    // 2 adding into array 100 random numbers

    for (var i = 1; i <= 100; i++ ) {
        num.push(Math.floor(Math.random() * (100 - 1) + 1));
    }

    console.log(num);

    //  3 creating function for max or min elements of the array.

    function findMinMax(array, number) {
        if (number == 'max') {
            return Math.max.apply(null, array);
        }
        if (number == 'min') {
            return Math.min.apply(null, array);
        }
    }

    var arrayToFind = [3, 6, 0, -6, 12];

    var resultMax = findMinMax(arrayToFind, 'max');

    var resultMin = findMinMax(arrayToFind, 'min');

    console.log(resultMax);

    console.log(resultMin);


    //  4 function converts the array into an objects.


    function convertArrayToObj(array) {
        var obj = {};
        var countObj = 1;

        array.forEach(function (element, index) {
            if (index <= 26) {
                var prop = String.fromCharCode(97 + index);
                obj[prop] = element;
            } else {
                obj[countObj] = element;
                countObj++;
            }
        });

        return obj;
    }

    console.log( convertArrayToObj(arrayToFind) );
    console.log( convertArrayToObj(num) );

    // 5 remove elements of the first array


    function filterNew(array1, array2) {
        var findElem = 0;
            while (findElem <= array1.length) {
                if (array2.indexOf(array1[findElem]) !== -1) {
                    array1.splice(findElem, 1);
                    continue;
                }
                    findElem++;
            }
    }


    var arr1 = [2, 2, 3, 3, 15 ] ;
    var arr2 = [2, 3, 10];
    filterNew(arr1, arr2);
    console.log(arr1);

})();