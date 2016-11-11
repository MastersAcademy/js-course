(function () {
    var numbers = [];

    for (var i = 0; i < 100; i++) {
        numbers[i] = (Math.floor(Math.random() * (100 - 1 + 1)) + 1);
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
})();
