'use strict';
(function () {
    //___________________________________________________1th task_____________________________________________________//
    // first task: Create array
    var newArray = [];
    //________________________________________________________________________________________________________________//

    //___________________________________________________2nd task_____________________________________________________//
    // second task: Add to array 100 random number
    function createArray() {
        for (var i = 0; i < 100; i++ ) {
            newArray.push(Math.floor(Math.random() * 100));
        }
        console.log(newArray);
    }
    createArray();
    //________________________________________________________________________________________________________________//

    //___________________________________________________3rd task_____________________________________________________//
    //third task: Search max and min number in array
    var arrayToFind = [3,6,0,-6,12]
    function findMinMax(array,actions) {
        if (actions == 'max') {
            return Math.max.apply(null,array);
        } else if (actions == 'min') {
            return Math.min.apply(null,array);
        }
    }
    console.log(findMinMax(arrayToFind, 'max'));
    console.log(findMinMax(arrayToFind, 'min'));
    //________________________________________________________________________________________________________________//

    //___________________________________________________4th task_____________________________________________________//
    // fourth task: Write a function to convert an array to object
    function convertArrayToObject() {
        var obj = {};
            for (var i = 0; i <= newArray.length; i++){
                if (i <= 25){
                    obj[String.fromCharCode(i + 97)] = newArray[i];
                    }
                else {
                    var numb = i - 25;
                    obj[numb.toString()] = newArray[i];
                }
            }
        return obj;
    }

    console.log(convertArrayToObject());
    //________________________________________________________________________________________________________________//

    //__________________________________________________5th task______________________________________________________//
    // fifth task: Write function to filter two array
    function filterNew(arr1,arr2) {
        for (var i = 0; i < oldData.length; i++){
            for (var j = newData.length - 1; j !== 0 ; j--) {
                if (newData[j] == oldData[i]){
                    newData.splice(j,1);
                }
            }
        }

    }
    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];
    filterNew(newData, oldData);
    console.log(newData); // in console : [2, 6];
    //________________________________________________________________________________________________________________//
})();