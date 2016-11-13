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
console.log(arrHundred);
//Search function and output to the console the maximum or minimum element
function findMinMax(arrayToFind, str) {
    var arraySort = arrayToFind.sort();
    if (str == 'min'){
        return arraySort
    }

}