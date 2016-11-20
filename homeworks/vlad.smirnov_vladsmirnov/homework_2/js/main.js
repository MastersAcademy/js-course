(function () {


    // First task

    var myArray = [];


    // Second task

    function getRandomArray(min, max, length) {
        var randomArray = [];
        for (var i = 1; i <= length; i++) {
            randomArray.push(Math.floor(Math.random() * (max - min) + min));
        }
        return randomArray;
    }
    myArray = getRandomArray(1,100, 100);
    console.log('Second task result:'+ myArray);


    // Third task

    function findMinMax(arrayToFind, opt) {
        if (opt == 'max') {
            return Math.max.apply(null, arrayToFind);
        }
        if (opt == 'min') {
            return Math.min.apply(null, arrayToFind);
        }
    }
    var resultMax = findMinMax(myArray, 'max');

    var resultMin = findMinMax(myArray, 'min');

    console.log('Third task result(max):'+resultMax);

    console.log('Third task result(min):'+resultMin);


    // Fourth task




    function convertArrayToObj (array) {
        var obj = {};
        for (var i = 0; i <= array.length; i++) {
            if (i <= 25) {
                obj[String.fromCharCode(97 + i)] = array[i];
            } else {
                obj[i - 25] = array[i - 1];
            }
        }
        return obj;
    }
    console.dir(convertArrayToObj(myArray));


    // Fifth task

    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];

    function filterNew(firstArray, secondArray) {
        var index = 0;

        while(index < firstArray.length) {
            var val = firstArray[index];
            var pos = secondArray.indexOf(val);

            if (pos > -1) {
                firstArray.splice(index, 1);
            } else {
                index++;
            }
        }
    }
    filterNew(newData, oldData);
    console.log(newData);


})();