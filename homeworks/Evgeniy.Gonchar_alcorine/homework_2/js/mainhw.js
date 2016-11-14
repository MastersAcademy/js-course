(function () {
// Create empty array
    var newArray = [];
// add random value to array from 1 to 100
    for (var i = 0; i < 100; i++) {
        newArray[i] = Math.floor((Math.random() * 100) + 1);
    }
    console.log(newArray);

// Find Min and Max value
    function findMinMax(array, val) {
        var sorting = array.sort(function (a, b) {
            if (a > b) {
                return 1;
            } else {
                return -1;
            }
        });
        if (val == 'min') {
            return sorting[0];
        } else if (val == 'max') {
            return sorting[sorting.length - 1];
        }

    }

    var arrayToFind = [7, 25, -9, -3, 76];

    var resultMax = findMinMax(arrayToFind, 'max');

    var resultMin = findMinMax(arrayToFind, 'min');


    console.log(resultMax); //76
    console.log(resultMin); //-9

// Convert array to object

    function convertArrayToObject(newArr) {
        var obj = {};
        var fieldName = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var o = 1;
        for (var i = 0; i < newArr.length; i++) {
            if (i < fieldName.length) {
                obj[fieldName[i]] = newArr[i];
            } else if (i > fieldName.length) {
                obj[o] = newArr[i];
                o++;
            }
        }

        return obj;
    }

    console.log(convertArrayToObject(newArray));

// Filter array
    function filterNew(arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            for (var o = 0; o < arr2.length; o++) {
                if (arr1[i] == arr2[o]) {
                    arr1.splice(i, 1);
                }
            }
        }

    }

    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];
    filterNew(newData, oldData);
    console.log(newData);
})();

