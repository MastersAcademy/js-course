(function () {

    function createRandomArray (numberOfElements)
    {
        var array = [];
        for (var i = 0; i < numberOfElements; i++){
            array[i] = Math.floor((Math.random() + 0.01) * 100);
        }
        return array;
    }

    function findMinMax(arrayToFind, param){
        var i = 0;
        var mElement = arrayToFind[i];
        var k = 1;
        if (param == 'min') {k = -1};
        while (i < arrayToFind.length) {
            if (0 > (k * ((mElement - arrayToFind[i])))){
                mElement = arrayToFind[i];
            }
            i++;
        }
        return mElement;
    };

    function convertArrayToObj (array) {

        var obj = {};

        /* Staff to convert array to obj
         //...
         */

        return obj;

    }

    // task 1
    var arrayNatural = [];

    // task 2
    arrayNatural = createRandomArray(100);

    console.log(arrayNatural);

    // task 3
    var arrayToFind = [3, 6, 0, -6, 12];

    var resultMax = findMinMax(arrayToFind, 'max');

    var resultMin = findMinMax(arrayToFind, 'min');

    console.log(resultMax); // 12

    console.log(resultMin); // -6

})();
