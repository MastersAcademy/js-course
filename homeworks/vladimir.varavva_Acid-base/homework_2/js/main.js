(function () {
  'use strict';
 
// 1
 
    var integers = [];
  
// 2

    function getRandom(min, max) {
      return Math.round( Math.random() * (max - min) + min );
    }
  
    for (var i = 0; i < 100; i++) {
      integers[i] = getRandom(1, 100);
    }
  
    console.log(integers);

// 3

    function compareNumeric(a, b) {
      return a - b;
    }
    
    function findMinMax(arr, str) {
      arr = arr.sort(compareNumeric);
      if (str === 'min') return arr[0];
      else if (str === 'max') return arr[arr.length - 1];
    }
  
    var arrayToFind = [3, 6, 0, -6, 12],
        resultMax = findMinMax(arrayToFind, 'max'),
        resultMin = findMinMax(arrayToFind, 'min');
  
    console.log(resultMax);
    console.log(resultMin);
  
// 4

    function convertArrayToObj(arr) {
      var key, 
          obj = {};   
      for (var i = 0; i < arr.length; i++) {
        key = i < 26 ? String.fromCharCode(i + 97) : i - 25;
        obj[key] = arr[i];
      }
      return obj;
    }
  
    console.log( convertArrayToObj(arrayToFind) );
    console.log( convertArrayToObj(integers) );

// 5

  function filterNew(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
      for (var n = 0; n < arr2.length; n++) {
        if (arr1[i] === arr2[n]) {
          arr1.splice(i, 1);
          i--;
        }
      }
    }
  }

  var newData = [2, 12, 22, 6, 32],
      oldData = [12, 5, 7, 17, 22, 32],
      
      arr1 = [2, 2, 3, 3, 15 ],
      arr2 = [2, 3, 10]; 

  filterNew(newData, oldData);
  console.log(newData); 
  
  filterNew(arr1, arr2);
  console.log(arr1);

})();


