(function () {

    var arrayToFind = [];
    for (var i = 0; i < 100; i++) {
        arrayToFind.push(getRandomIntInclusive(1, 100));
    }
    console.log(arrayToFind);

    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');

    console.log(resultMax);
    console.log(resultMin);

    // Returns max value of array
    // if action equals 'min' it returns min value
    function findMinMax(arrayToFind, action) {
        var resultMin = arrayToFind[0];
        var resultMax = arrayToFind[0];
        arrayToFind.forEach(function (element) {
            if (element > resultMax) {
                resultMax = element;
            } else if (element < resultMin) {
                resultMin = element;
            }
        });
        return action == 'min' ? resultMin : resultMax;
    }

    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    alphabet.reverse();
    var index = 1;
    console.log(convertArrayToObj(arrayToFind));

    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];
    filterNew(newData, oldData);
    console.log(newData); // in console : [2, 6];


    function filterNew(arr1, arr2) {
        var elementsToDelete = [];
        arr2.forEach(function (element, index) {
            var findIndex = arr1.indexOf(element);
            if (findIndex !== -1) {
                elementsToDelete.push(findIndex)
            }
        });
        elementsToDelete.sort();
        while (elementsToDelete.length > 0) {
            arr1.splice(elementsToDelete.pop(), 1);
        }
    }

    function convertArrayToObj(array) {
        var obj = {};
        var field;
        array.forEach(function (element) {
            field = getNextField(field);
            obj[field] = element;
        });
        return obj;

    }

    function getNextField(field) {
        while (alphabet.length > 0) {
            return alphabet.pop();
        }
        return '' + index++;
    }

    // Returns a random integer between min (included) and max (included)
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

})();