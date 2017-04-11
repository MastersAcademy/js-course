(function () {

    // 1. Create empty array
    var arrayToFind = [];

    // //2. Add to array integer numbers from 1 to 100
    for (var i = 1; i <= 100; i++) {
        arrayToFind.push(Math.ceil(Math.random() * 100))
    }

    console.log(arrayToFind);

    //3. The search function of the maximum and minimum number of array
    function findMinMax(arrayToFind, status) {
        var result;

        if (status == 'max' || status == 'min') result = getResult();

        return result;

        function getResult() {
            return Math[status].apply(null, arrayToFind);
        }
    }

    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');

    console.log(resultMax);
    console.log(resultMin);

    // 4. Function to convert an array into an object
    function convertArrayToObj(array) {
        var result = {};
        var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

        for (var i = 0; i < array.length; i++) {
            var el = array[i];
            var alphLen = alphabet.length;
            i < alphLen ? result[alphabet[i]] = el : result[i - alphLen + 1] = el;
        }

        return result;
    }

    var result = convertArrayToObj(arrayToFind);

    console.log(result);

    // 5. Function filter of two array
    function filterNew(arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
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
