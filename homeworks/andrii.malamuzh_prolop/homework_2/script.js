(function () {
    var numbers = [];

    for (var i = 0; i < 100; i++) {
        numbers[i] = (Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    }

    console.log(numbers);
})();
