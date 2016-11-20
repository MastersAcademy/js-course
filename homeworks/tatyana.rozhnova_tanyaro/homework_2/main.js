(function () {

    var array = [];
    for (i = 0; i < 100; i++) {
        array[i] = Math.ceil(Math.random() * 100);
    }
    console.log(array);


    function findMinMax(arr, option) {
        switch (option) {
            case 'min':
                var min = 100;
                arr.forEach(function (e) {
                    if (e < min)
                        min = e;
                });
                return min;
            case 'max':
                var max = 1;
                arr.forEach(function (e) {
                    if (e > max)
                        max = e;
                });
                return max;
            default:
                return 'choose min or max value';
        }
    }

    console.log('Min:', findMinMax(array, 'min'));
    console.log('Max:', findMinMax(array, 'max'));


    function convertArrayToObj(arr) {
        var obj = {};
        var letters = Array.apply(null, {length: 26}).map(function (x, i) {
            return String.fromCharCode(97 + i)
        });

        for (var i = 0; i < array.length; i++) {
            if (i < letters.length) {
                obj[letters[i]] = arr[i]
            } else {
                obj[String(i - letters.length)] = arr[i]
            }
        }
        return obj;
    }

    console.log(convertArrayToObj(array));

    var array1 = [];
    var array2 = [];
    for (i = 0; i < 10; i++) {
        array1[i] = Math.ceil(Math.random() * 10);
        array2[i] = Math.ceil(Math.random() * 10);
    }

    function filterNew(arr1, arr2) {
        for (i = 0; i < arr1.length; i++) {
            if (arr2.indexOf(arr1[i]) != -1) {
                arr1.splice(i, 1);
                i--
            }
        }
    }

    console.log('array1:',array1);
    console.log('array2:',array2);
    filterNew(array1, array2);
    console.log('filtered array1:',array1);

})();

