(function () {
    var numbers = [];

    for (var i = 0; i < 100; i++) {
        numbers[i] = (Math.floor(Math.random() * 100) + 1);
    }

    console.log(numbers);

    function findMinMax(array, value) {
        if (value == "max") {
            return Math.max.apply(null, numbers);
        }

        if (value == "min") {
            return Math.min.apply(null, numbers);
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
            if (i > abc.length) {
                obj[j++] = array[i];
            }

            if (i < abc.length) {
                obj[abc[i]] = array[i];
            }
        }

        return obj;
    }
    console.log(convertArrayToObj(numbers));
})();
