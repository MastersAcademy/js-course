(function () {
    var randomDigits = [];
    for (var i = 0; i < 100; i++) {
        randomDigits[i] = Math.ceil(Math.random() * 100);
    }

    console.log(randomDigits);

    var findMinMax = function (arrayToFind, criteria) {
        var result;
        if (criteria == 'max') {
            result = -Infinity;
            arrayToFind.forEach(function (element) {
                if (element > result) {
                    result = element;
                }
            });
        } else if (criteria == 'min') {
            result = Infinity;
            arrayToFind.forEach(function (element) {
                if (element < result) {
                    result = element;
                }
            });
        } else {
            console.log('Error! Undefined search criteria.');
        }

        return result;
    };

    var arrayToFind = [3, 6, 0, -6, 12];
    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');
    console.log(resultMax);
    console.log(resultMin);

    function convertArrayToObj(array) {
        var obj = {};
        var i = 0;
        array.forEach(function (element) {
            if (i < 26) {
                obj[String.fromCharCode(i+97)] = element;
            } else {
                obj[i - 26] = element;
            }
            i++;
        });
        return obj;
    }

    console.log(convertArrayToObj(randomDigits));

    var filterNew = function (arr1, arr2) {
        arr1.forEach(function (elementArr1) {
            arr2.forEach(function (elementArr2) {
                if (elementArr2 === elementArr1) {
                    delete arr1[arr1.indexOf(elementArr1)];
                }
            });
        });

        var i = 0;

        arr1.forEach(function (element) {
            arr1[i] = element;
            i++;
        });

        arr1.length = i;
    };

    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];
    filterNew(newData, oldData);
    console.log(newData);
})();