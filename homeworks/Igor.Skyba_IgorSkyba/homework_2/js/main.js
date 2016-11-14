(function () {

    function createRandomNumbersArray (numberOfValues, unique) {

        var array = [];

        if (Number.isInteger(numberOfValues)){

            if (unique) {
                if (numberOfValues > 1000) {
                    numberOfValues = 1000;
                }
                for (var f = 1; f <= numberOfValues; f++) {
                    array.push(findUnique(array, numberOfValues));
                }
            } else {
                for (var i = 1; i <= numberOfValues; i++) {
                    array.push(Math.floor((Math.random() * numberOfValues) + 1));
                }
            }
        }

        return array;
    }

    function findUnique(array, numberOfValues) {

        var $number = Math.floor((Math.random() * numberOfValues) + 1);

        if (array.indexOf( $number ) > -1) {
            return findUnique(array, numberOfValues);
        } else {
            return $number;
        }
    }

    var randomArray = createRandomNumbersArray(100, false);

    function findMinMax (array, searchOption) {

        var value;

        if (searchOption == 'max') {
            value = Math.max.apply(null, array);
        } else if (searchOption == 'min') {
            value = Math.min.apply(null, array)
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

        array1.forEach(function(el1){
            array2.forEach(function(el2){
                if (el1 == el2) {
                    array1.splice(counter, 1);
                }
            });
            counter++;
        });
    }

    var arrayToFilter1 = createRandomNumbersArray(100, false);
    var arrayToFilter2 = createRandomNumbersArray(100, false);

    filterNew(arrayToFilter1, arrayToFilter2);

    console.log('*** Random Numbers Array ***');
    console.log(randomArray);
    console.log('******');
    console.log('*** Max and Min values from array ***');
    console.log('Max - ' + findMinMax(randomArray, 'max'));
    console.log('Min - ' + findMinMax(randomArray, 'min'));
    console.log('******');
    console.log('*** Convert Array To Object ***');
    console.log(convertArrayToObj(randomArray));
    console.log('******');
    console.log('*** Filter Array ***');
    console.log(arrayToFilter1);
    console.log('******');

})();