(function () {
//Create new array
var arrHundred = [];
/*Adding to the array hundred integers from 1 to 100
 a separate function generating a random integer
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + 1;
}
var lowValue = 1;
var topValue = 100;
    for (var i = 0; i<=99; i++){
        arrHundred.push(getRandomInt(lowValue, topValue));
        }
console.log('*****Exercise № 1-2******');
console.log(arrHundred);
console.log('*************************');
//Search function and output to the console the maximum or minimum element
function findMinMax(arrayToFind, str) {
    var arraySort = arrayToFind.sort(function (a, b) {
        return a-b;
    });
    if (str == 'min'){
        return arraySort[0];
    }
    else if (str == 'max'){
        return arraySort[arraySort.length-1];
    }
}
console.log('*****Exercise № 3********');
console.log('Minimal elements in array:');
console.log(findMinMax(arrHundred, 'min'));
console.log('Maximal elements in array:');
console.log(findMinMax(arrHundred, 'max'));
//Search function and output to the console the maximum or minimum element version 2
function findMinMaxVer2(arr, str) {
    var sortArray = arr;
    if (str == 'max'){
        return Math.max.apply(null,sortArray);
    }
    else if (str == 'min') {
        return Math.min.apply(null, sortArray);
    }
}
console.log('Minimal elements in array:');
console.log(findMinMaxVer2(arrHundred, 'min'));
console.log('Maximal elements in array:');
console.log(findMinMaxVer2(arrHundred, 'max'));
//Array conversion function into an object
function convertArrayToObj(array) {
    var obj = {};
    var j = 1;
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < array.length; i++){
        if (i < 26) {
            obj[alphabet.charAt(i)] = array[i];
        }
        else if (i > 25) {
/*If I do so obj[' ' + j++] = array[i],
first the console.log will be displayed letters and then numbers*/
            obj[j++] = array[i];
        }
    }
    return obj;
}
console.log('*****Exercise № 4********');
console.log(convertArrayToObj(arrHundred));
//Array filtering function
function filterNew(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++){
        for (var j = 0; j < arr2.length; j++){
            if (arr1[i] == arr2[j]){
                arr1.splice(i, 1);
            }
        }
    }

}
var newData = [2, 12, 22, 6, 32];
var oldData = [12, 5, 7, 17, 22, 32];
    filterNew(newData, oldData);
    console.log('*****Exercise № 5********');
    console.log(newData);
//Array filtering function correct working version
function filterNewVersion2(arrOne, arrTwo) {
    var i = 0;
    while (i < arrOne.length){
        for (var j = 0; j < arrTwo.length; j++){
            if (arrOne[i] == arrTwo[j]){
                arrOne.splice(i, 1);
                }
        }
        i++;
    }
}
var arr1 = [2, 2, 3, 3, 15 ] ;
var arr2 = [2, 3, 10];
    filterNewVersion2(arr1, arr2);
    console.log(arr1);
})();