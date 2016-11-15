(function () {
    var numbers = [];

    for (var i = 0; i < 100; i++) {
        numbers[i] = (Math.floor(Math.random() * 100) + 1);
    }

    console.log(numbers);

    function findMinMax(array, value) {
        if (value == "max") {
            return Math.max.apply(null, array);
        }

        if (value == "min") {
            return Math.min.apply(null, array);
        }
    }

    var resultMax = findMinMax(numbers, "max");
    var resultMin = findMinMax(numbers, "min");

    console.log(resultMax);
    console.log(resultMin);

    function convertArrayToObj(array) {
        var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var obj = {};
        var j = 1;

        for (var i = 0; i < array.length; i++) {
            if (i < abc.length) {
                obj[abc[i]] = array[i];
            } else {
                obj[j++] = array[i];
            }
        }

        return obj;
    }
    console.log(convertArrayToObj(numbers));

    function filterNew(arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    arr1.splice(i , 1);
                    i--;
                }
            }
        }
    }

    var newData = [2, 2, 3, 3, 15];
    var oldData = [2, 3, 10];

    filterNew(newData, oldData);

    console.log(newData);
})();
