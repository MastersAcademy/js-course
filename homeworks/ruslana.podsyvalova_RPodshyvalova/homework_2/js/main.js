(function () {
    // 1) create an empty array
    var array = [];
    console.log("\n\nResults of task 1\n");
    console.log("An empty array has been created. Array has " + array.length + " elements");

    /*
    2) fill the array with 100 integer numbers from 1 to 100,
     used Math.random(), 0 ≤ Math.random() < 1
     */
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (var i = 0; i < 100; i++) {
        array.push(getRandomInteger(1, 100));
    }
    console.log("\n\nResults of task 2\n");
    console.log(array.toString());
    console.log("array\'s length is - " + array.length + " elements");

    /*
    3) function findMinMax(arr , str), it must return minimum or maximum value of array
    first parameter of function is arr - searching array
    second parameter of function is str - string, that can equal one of two parameter: "min" or "max"
    */
    function findMinMax(arr, str) {
        var elementForCompare = arr[0];
        switch (str) {
            case "max":
                for (var i = 1; i < arr.length; i++) {
                    if (arr[i] > elementForCompare) {
                        elementForCompare = arr[i];
                    }
                }
                break;
            case "min":
                for (var j = 1; j < arr.length; j++) {
                    if (arr[j] < elementForCompare) {
                        elementForCompare = arr[j];
                    }
                }
                break;
            default: elementForCompare = null;
        }
        return elementForCompare;
    }
    var arrayToFind = [3, 6, 0, -6, 12];
    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');
    console.log("\n\nResults of task 3\n");
    console.log(resultMax != null ? resultMax : "doesn\'t define criteria of search method!"); // 12
    console.log(resultMin != null ? resultMin : "doesn\'t define criteria of search method!"); // -6

    /*
    4) function fills object's property's values with data from array arr,
    first 26 object's field's keys must named like small letters of English alphabet - a..z,
    other object's field's keys must named like arabic numbers 1..n
    */
    // function convertArrayToObj(arr) cteates object obj ans fills its properties from array's data
    function convertArrayToObj(arr) {
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            if (i < 26) {
                obj[String.fromCharCode(97 + i)] = arr[i];
            } else {
                obj[i-25] = arr[i];
            }
        }
        return obj;
    }
    var arrStorage = [];
    //var count = 10;
    var count = 130;
    for (var k = 0; k < count; k++) {
        arrStorage[k] = k + 1;
    }

    var object = convertArrayToObj(arrStorage);
    // output object
    var objectInTxtFormat = "{\n";
    // define new array - arrOfObjKeys - which consists from object's keys
    var arrOfObjKeys = Object.keys(object);
    function compare(x, y) {
        return x > y ? 1 : -1;
    }

    // test element if it's a char symbol - 'a' (ascii 97) <= element <= 'z' (ascii 122)
    function isItChar(element) {
        return element.charCodeAt() >= 97 && element.charCodeAt() <= 122 ? true : false;
    }

    /*
    sort array of object's keys arrOfObjKeys and determine right keys order in array: at first 'a'..'z' then 1..n
    so define pattern of output.
    Because of content of array of keys arrOfObjKeys is numbers and chars - it is necessary to view char keys as integer,
    so it is possible by use ascii code of char keys
    and transform them to negative values for determine right keys order in array of object's keys,
    at first 'a'..'z' then 1..n
    */
    arrOfObjKeys.sort(function(a, b) {
        var tmp1 = 0, tmp2 = 0;
        if (isItChar(a) && !isItChar(b)) {
            tmp1 = a.charCodeAt() - 200;
            return compare(tmp1, parseInt(b));
        }
        if (!isItChar(a) && isItChar(b)) {
            tmp2 = b.charCodeAt() - 200;
            return compare(parseInt(a), tmp2);
        }
        if (isItChar(a) && isItChar(b)) {
            tmp1 = a.charCodeAt() - 200;
            tmp2 = b.charCodeAt() - 200;
            return compare(tmp1, tmp2);
        }
        if (!isItChar(a) && !isItChar(b)) {
            return compare(parseInt(a), parseInt(b));
        }
    });
    // build output object's fields by order what determine in array of object's keys arrOfObjKeys
    for (var key in arrOfObjKeys) {
        if (arrOfObjKeys.hasOwnProperty(key)) {
            objectInTxtFormat += "\t\'" + arrOfObjKeys[key] + "\' : "+ object[arrOfObjKeys[key]] + ",\n";
        }
    }
    objectInTxtFormat += "\n}";
    console.log("\n\nResults of task 4\n");
    //delete last extra comma from result string objectInTxtFormat before output
    console.log(objectInTxtFormat.replace(/,\s+}\s*$/, "\n}"));

    /*
    5) function filterNew(arr1, arr2) deletes from one array(arr1)
    all elements of second array(arr2)
    */
    function filterNew(arr1, arr2) {
        for (var n = 0; n < arr1.length; n++) {
            for (var m =0; m < arr2.length; m++) {
                if (arr1[n] === arr2[m]) {
                    arr1.splice(n, 1);
                    n--;
                    break;
                }
            }
        }
    }
    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];
    filterNew(newData, oldData);
    console.log("\n\nResults of task 5\n");
    console.log(newData); // in console : [2, 6];
})();
