(function () {

    // 1) Empty array

    var myArray = [];

    // 2) Add in array 100 whole numbers between 1 and 100 using Math.random() method

    var sum = 0;

    for (var i = 0; i < 100; i++) {

        myArray[i]=Math.floor(Math.random() * 100 + 1);

        sum = sum + myArray[i];
    }

    console.log(myArray);

    // 3) Function to find and output in console min and max elements in array

    var arrayToFind = [3, 6, 0, -6, 12];
    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');

    function findMinMax(arrayToFind, MinMax) {

        if (MinMax == 'max') {
            return Math.max.apply(null, arrayToFind);
        }

        else if (MinMax == 'min') {
            return Math.min.apply(null, arrayToFind);
        }
    }

    console.log(resultMax);
    console.log(resultMin);

    // 4) A function to convert array to object

    function convertArrayToObj (myArray) {

        var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        var obj = {};
        var o = 1;

        for (var i = 0; i < myArray.length; i++) {

            if (i > abc.length) {
                obj[o++] = myArray[i];
            }

            else if (i < abc.length) {
                obj[abc[i]] = myArray[i];
            }
        }

        return obj;
    }

    console.log(convertArrayToObj(myArray));

    // 5) An array filter function

    function filterNew(arr1, arr2) {
        for (var i=0; i < arr1.length; i++) {
            for (var j=0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    arr1.splice(i, 1);
                    i = -1;
                }
            }
        }
    }

    var arr1 = [2, 2, 3, 3, 15];
    var arr2 = [2, 3, 10];
    filterNew(arr1, arr2);
    console.log(arr1);

})();