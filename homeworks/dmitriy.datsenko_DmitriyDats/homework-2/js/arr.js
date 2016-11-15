(function () {

    // 1.Create an empty array.

    var arr = [];

    // 2.Add to it 100 of integers from 1 to 100 by the method Math.random ().

    for (var i = 0; i < 100; i++) {
        arr[i] = Math.floor((Math.random() * 100) + 1);
    }
    console.log(arr);

    /* 3.And send the search function in the console output the maximum or minimum element. The function
     should be called findMinMax, take in an array of options for searching and a string specifying the action function.
     The function must return a found item Example of function */

    function findMinMax(array, number) {
        if (number == 'max') {
            return Math.max.apply(null, array);
        }
        else if (number == 'min') {
            return Math.min.apply(null, array);
        } else {
            alert('Bad');
        }
    }

    var arrayToFind = [3, 6, 0, -6, 12];

    var resultMax = findMinMax(arrayToFind, 'max');

    var resultMin = findMinMax(arrayToFind, 'min');

    console.log(resultMax);

    console.log(resultMin);

    // 4.Write a function to convert an array of type Object:

    function convertArrayToObj(myArray) {

        var obj = {};

        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        for (var i = 0, j = 1; i < myArray.length, j < myArray.length; i++, j++) {

            if (i < 26) {
                obj[alphabet[i]] = myArray[i];
            }
            else if (j > 26) {
                obj[j - alphabet.length] = myArray[i];
            }
        }
        return obj;
    }

    var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 16, 17, 18, 19, 20];
    console.log(convertArrayToObj(myArray));


    /* 5.Write filter function array filterNew (arr1, arr2). The function should accept the input of the two arrays and
     remove from the first array elements, which are in the first and in the second array. The function returns nothing
     and modifies the array directly first. Example of functions: */

    function filterNew(arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    arr1.splice(i, 1);
                    i--
                }
            }
        }
    }

    var arr1 = [2, 2, 3, 3, 15];

    var arr2 = [2, 3, 10];

    filterNew(arr1, arr2);

    console.log(arr1);
})();