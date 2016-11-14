(function () {

    //task 1
    var array = [];
    console.log(array);

    //task 2
    for (var i=0; i<100; i++) {
        array[i] = Math.floor(Math.random()*100+1);
    }
    console.log(array);

    //task 3
    function findMinMax (arrayToFind, maxOrMin) {
        var min = arrayToFind[0];
        var max = min;

        if (maxOrMin == 'max') {
            for (var i=0; i<arrayToFind.length; i++) {
                if (arrayToFind[i] > max) {
                    max = arrayToFind[i];
                }
            }
            return 'max element of array = ' + max
        }
        if (maxOrMin == 'min') {
            for (i=0; i<arrayToFind.length; i++) {
                if (arrayToFind[i] < min) {
                    min = arrayToFind[i];
                }
            }
            return 'min element of array = ' + min
        }
    }

    console.log(findMinMax(array, 'max'));
    console.log(findMinMax(array, 'min'));


    //task 4
    function convertArrayToObj (array) {
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var obj = {};

        if (array.length < alphabet.length) {
            for (var i=0; i<array.length; i++) {
                obj[alphabet[i]] = array[i]
            }
        }
        else {
            var keyArr = [];

            for (i=0; i<alphabet.length; i++) {
                keyArr.push(alphabet[i]);
            }
            for (i= 1; i<array.length-alphabet.length+1; i++ ) {
                keyArr.push(i.toString());
            }
            for (i= 0; i<array.length; i++) {
                obj[keyArr[i.toString()]] = array[i];
            }
        }
        return obj;

    }
    console.log(convertArrayToObj(array));

    //task 5

    var newData = [2, 12, 22, 6, 32, 56, 99, 78, 115, 98, 97, 96];
    var oldData = [12, 5, 7, 17, 56, 22, 32, 99, 78, 96];

    function filterNew(arr1, arr2) {
        for (var k = 0; k < arr1.length; k++) {
            for (i = 0; i < arr2.length; i++) {
                if (arr1[k] === arr2[i]) {
                    arr1.splice(k, 1);
                }
            }
        }
    }

    filterNew(newData, oldData);
    console.log(newData);

})();