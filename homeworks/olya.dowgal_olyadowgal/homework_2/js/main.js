(function () {

    var arr = [];

    for (var i = 0; i < 100; i++) {
        arr[i] = Math.floor(Math.random() * 99 + 1);
    }

    function findMinMax(arrToFind, strFunc) {
        var temp;
        if (strFunc == "max") {
            temp = Number.MIN_VALUE;
            arrToFind.forEach(function (element) {
                    if (temp < element) temp = element;
                }
            );
            return ("Max in array is: " + temp);

        } else {
            if (strFunc == "min") {
                temp = Number.MAX_VALUE;
                arrToFind.forEach(function (element) {
                        if (temp > element) temp = element;
                    }
                );
                return ("Min in array is: " + temp);
            } else {
                return ("Your's string had some problems. It's looks like :" + strFunc + ". When it's must be min of max.");
            }
        }
    }

    function arrToObj(arrToConvert) {
        var obj = {};
        var charCount = 26;
        var num = 1;
        for (var i = 0; i < arrToConvert.length; i++) {
            if (charCount > 0) {
                obj[String.fromCharCode(97 + i)] = arrToConvert[i];
            } else {
                obj[num] = arrToConvert[i];
                num++;
            }
            charCount--;
        }
        return obj;
    }

    function filterNew(arr1, arr2) {
        arr2.forEach(function (element) {
                var ind = arr1.indexOf(element);
                while (ind != -1) {
                    arr1.splice(ind, 1);
                    ind = arr1.indexOf(element);
                }
            }
        )
    }

    //Task 1,2 test

    console.log(arr);

    //Task 3 test

    var testMin = findMinMax(arr, "min");
    var testMax = findMinMax(arr, "max");
    var testException = findMinMax(arr, "equals");
    console.log(testMin);
    console.log(testMax);
    console.log(testException);

    //Task 4 test

    var objTest = arrToObj(arr);
    console.log(objTest);

    //Task 5 test

    var arrTest1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var arrTest2 = [2, 4, 6, 8];
    filterNew(arrTest1, arrTest2);
    console.log(arrTest1);

})();