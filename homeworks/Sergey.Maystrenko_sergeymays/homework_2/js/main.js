(function (){

console.log("*******************1. Creating Empty array*********************");

var myArray = [];
console.log(myArray);

console.log("****************2. Fill array with Math.random()*****************");


for (var i = 0; i <= 99; i++) {
    myArray.push(Math.floor(Math.random() * 100 + 1));
}

console.log(myArray);

console.log("*******************3. Finding min/max********************");

function findMinMax(arrayName, searchValue){
    if (searchValue == 'max'){
        return Math.max.apply(Math, arrayName);
    } else if (searchValue == 'min'){
        return Math.min.apply(Math, arrayName);
    }
}

var resultMax = findMinMax(myArray, 'max');

var resultMin = findMinMax(myArray, 'min');

console.log(resultMax);

console.log(resultMin);

console.log("****************4. Convert array to object*****************");



function convertArrayToObj (array) {
var alphabetArray = [];

for (var i = 97; i <= 122; i++){
    alphabetArray.push(String.fromCharCode(i));
}

for (var i = 1; i <= 74; i++){
    alphabetArray.push(i);
}
    var obj = {};

    for (var i = 0; i < array.length; i++) {
        obj[alphabetArray[i]] = array[i];
    }

    return obj;

}

console.log(convertArrayToObj(myArray));

console.log("****************5. Array filter*****************");


function filterNew(arr1, arr2){	
    for (var i = 0; i < arr1.length; i++){
        for (var j = 0; j < arr2.length; j++){
            if (arr1[i] == arr2[j]){
                arr1.splice(i, 1);
                i--;
            }
        }
    }

}
var newData = [1, 2, 3, 3, 4, 5];

var oldData = [1, 3, 5];

filterNew(newData, oldData);

console.log(newData);

})();