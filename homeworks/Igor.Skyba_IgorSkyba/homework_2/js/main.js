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

    function filterNew(array1, array2) {

        for (var a = array1.length; a >= 0; --a) {

            if (array2.indexOf(array1[a]) > -1){
                array1.splice(a, 1);
            }
        }
    }

    var newData = [2, 12, 22, 6, 32];

    var oldData = [12, 5, 7, 17, 22, 32];

    filterNew(newData, oldData);

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
    console.log(newData);
    console.log('******');

})();