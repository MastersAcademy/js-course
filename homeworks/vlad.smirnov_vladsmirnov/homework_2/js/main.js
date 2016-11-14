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
            if (i <= 26) {
                obj[String.fromCharCode(97 + i)] = array[i];
            } else {
                obj[i - 26] = array[i - 1];
            }
        }
        return obj;
    }
    console.dir(convertArrayToObj(myArray));


    // Fifth task

    var newData = [2, 12, 22, 6, 32];

    var oldData = [12, 5, 7, 17, 22, 32];

    function filterNew(firstArray, secondArray) {
        firstArray.forEach(function(item, i) {
            if(secondArray.indexOf(item) + 1){
                delete firstArray[i]
            }
        });
    }
    filterNew(newData, oldData);
    console.dir(newData.filter(function(n){ return n != undefined }));


})();