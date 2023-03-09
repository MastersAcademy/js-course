(function(){
    console.log("===========---------- Homework 2");

// Task 1: Define array
    var exampleArray = [];

// Task 2: Fill array by random integer numbers
    var i;
    for (i = 0; i < 100; i++) {
        exampleArray[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    }

//Task 3: Searching for Min, Max elements of array
    var arrayToFind = [3, 6, 0, -6, 12];
    function findMinMax(minMaxArray, minMax) {
        if (minMax == 'min') {
            var minValue = minMaxArray[0];
            for (i = 1; i < minMaxArray.length; i++) {
                if (minValue > minMaxArray[i]) minValue = minMaxArray[i];
            }
            return minValue;
        }
        if (minMax == 'max') {
            var maxValue = minMaxArray[0];
            for (i = 1; i < minMaxArray.length; i++) {
                if (maxValue < minMaxArray[i]) maxValue = minMaxArray[i];
            }
            return maxValue;
        }
     }
    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');
    console.log (resultMax);
    console.log (resultMin);

//Task 4: Make obj
    var strObj = "{\n";
    function convertArrayToObj (array) {
        var obj = {};
        for (var i = 0; i < array.length; i++) {
            if (i < 26) {
                obj[String.fromCharCode(97+i)] = array[i];
                strObj += "\t\'" + String.fromCharCode(97+i) + "\'" + " : " + obj[String.fromCharCode(97+i)];
            } else {
                obj[i - 25] = array[i];
                strObj += "\t\'" + (i - 25) + "\'" + " : " + obj[i - 25];
            }
            if (i != array.length-1)  strObj += ",\n";
            else strObj += "\n";
        }
        strObj += "}";

        return obj;
    }

    convertArrayToObj(exampleArray);  //Call function
    console.log(strObj);  //Output result Task 4

// Task 5: Function to filter array
    function filterNew(arr1, arr2) {
        for (i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    arr1.splice(i, 1);
                    i--;
                }
            }
        }
    }

    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];
    filterNew(newData, oldData);
    console.log(newData);

})();