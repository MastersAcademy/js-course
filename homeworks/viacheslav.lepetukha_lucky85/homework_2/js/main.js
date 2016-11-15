(function () {
//1------------------------------------------------------------
var arr = [];
//2------------------------------------------------------------
for(var i = 0; i < 100; i++)
  arr[i] = getRandomInt(1, 100);
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//3-------------------------------------------------------------
var arrayToFind = [3, 6, 0, -6, 12];
var resultMax = findMinMax(arrayToFind, 'max');
var resultMin = findMinMax(arrayToFind, 'min');
console.log(resultMax); // 12
console.log(resultMin); // -6
function findMinMax(arr1, find) {
  var findVar = arr1[0];
  if (find == "max") {
    for(var i = 0; i < arr1.length; i++) {
      if (findVar < arr1[i]) {
        findVar = arr1[i];
      } 
    }
  } 
  else if (find == "min") {
    for(var i = 0; i < arr1.length; i++) {
      if (findVar > arr1[i]) {
        findVar = arr1[i];
      } 
    }
  }
  return(findVar);
}
//4---------------------------------------------------------------
function convertArrayToObj (array) {
  var obj = {}, alphabetLength = 26, asciiA = 97;
  for (var i = 0; i < array.length; i++)
    if (i < alphabetLength)
      obj[String.fromCharCode(asciiA + i)] = array[i];
    else
      obj[i - alphabetLength - 1] = array[i];
  console.log(obj);
  return obj;
}
convertArrayToObj (arr);
//5---------------------------------------------------------------

var newData = [2, 12, 22, 6, 32];
var oldData = [12, 5, 7, 17, 22, 32];
filterNew(newData, oldData);
console.log(newData); // in console : [2, 6];
function filterNew(newData, oldData) {
  for (var i = 0; i < newData.length; i++) {
    for (var j = 0; j < oldData.length; j++){
      if (newData[i] == oldData[j]) {
        newData.splice(i, 1);
        i--;
      }
    }
  }
}

})();