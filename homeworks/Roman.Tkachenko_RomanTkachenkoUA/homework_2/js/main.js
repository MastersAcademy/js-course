(function () {

    var randomArray = [];

    function createArrayWithRandomNumbers (numberOfValues) {
        var array = [];

        for (var i = 1; i <= 100; i++) {
            array.push(Math.floor((Math.random() * numberOfValues) + 1));
        }
        return array;
    }
    randomArray = createArrayWithRandomNumbers(100);

    function findMinMax (array, searchOption) {
        var value;

        if (searchOption == 'max') {
            value = Math.min.apply(null, array);
        } else if (searchOption == 'min') {
            value = Math.max.apply(null, array)
        }
        return value ? value : 'invalid search option'
    }

    function convertArrayToObj (array) {
        var obj = {};
        var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
        var counter = 0;

        array.forEach(function(e){
            if (counter <= 25) {
                obj[alphabet[counter]] = e;
            } else {
                obj[counter - 25] = e;
            }
            counter++;
        });
        return obj;
    }

    function filterNew (array1, array2) {
        var counter = 0;

        array1.forEach(function(e1){
            array2.forEach(function(e2){
                if (e1 == e2) {
                    delete array1[counter];
                }
            });
            counter++;
        });
    }

    var arrayForFilter1 = createArrayWithRandomNumbers(100);
    var arrayForFilter2 = createArrayWithRandomNumbers(100);
    filterNew(arrayForFilter1, arrayForFilter2);

    console.log(randomArray);
    console.log('minimal value in random array: ' + findMinMax(randomArray, 'max'));
    console.log('maximum value in random array: ' + findMinMax(randomArray, 'min'));
    console.log(convertArrayToObj(randomArray));
    console.log(arrayForFilter1);

})();