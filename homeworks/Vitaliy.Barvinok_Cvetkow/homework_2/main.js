(function () {

    // 1

    var arr = [];

    // 2

    for (var i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * 100 + 1));
    }

    console.log(arr);

    // 3

    var arrayToFind = [3, 6, 0, -6, 12];

    var resultMax = findMinMax(arrayToFind, 'max');

    var resultMin = findMinMax(arrayToFind, 'min');

    function findMinMax(arrayToFind, MinMax) {

        if (MinMax == 'max') {
            return Math.max.apply(null, arrayToFind);
        }

        else if (MinMax == 'min') {
            return Math.min.apply(null, arrayToFind);
        }
    }

    console.log(resultMax);

    console.log(resultMin);

    // 4

    function convertArrayToObj(array){
        var obj = {};
        var i = 97, j = 0, k = 1;
        while (j < array.length) {
            if (i<=122){
                obj['\'' + String.fromCharCode(i) + '\''] = array[j];
                i++;
            } else {
                obj['\'' + k + '\''] = array[j];
                k++;
            }
            j++;
        }
        return obj;
    }

    console.log(convertArrayToObj(arrayOfRandNumbers));

// 5

    var newData = [2, 12, 22, 6, 32];

    var oldData = [12, 5, 7, 17, 22, 32];

    var index;

    function filterNew(arr1, arr2) {
        for (var i = 0; i < arr2.length; i++) {
            index = arr1.indexOf(arr2[i]);
            if (index > -1) {
                arr1.splice(index, 1);
            }
        }
    }

    filterNew(newData, oldData);

    console.log(newData);

})();