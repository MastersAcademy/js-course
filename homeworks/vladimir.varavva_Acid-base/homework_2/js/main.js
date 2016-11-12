(function () {
  'use strict';

    /*============================
            1
     ===========================*/
  
    var integer = [];
  
    /*============================
            2
     ===========================*/
  
    function getRandom(min, max) {
      return Math.round( Math.random() * (max - min) + min );
    }
  
    for (var i = 0; i < 100; i++) {
      integer[i] = getRandom(1, 100);
    }
  
    console.log(integer);
  
    /*============================
            3
     ===========================*/
  
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
  
    /*============================
            4
     ===========================*/
  
    function convertArrayToObj(array) {
      var obj = {},
          index = 1,
          value;

      for (var i = 0; i < array.length; i++) {
        if (i < 26) {
          value = String.fromCharCode(index + 96);
          index++;
        } 
        else if (i > 25) {
          value = index - 26;
          index++;
        } 
        obj[value] = array[i];
      }
      
      return obj;
    }
  
    console.log( convertArrayToObj(arrayToFind) );
    console.log( convertArrayToObj(integer) );

  /*============================
          5
   ===========================*/

  function filterNew(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
      for (var n = 0; n < arr2.length; n++) {
        if (arr1[i] === arr2[n]) arr1.splice(i, 1);
      }
    }
  }

  var newData = [2, 12, 22, 6, 32],
      oldData = [12, 5, 7, 17, 22, 32];

  filterNew(newData, oldData);
  
  console.log(newData); 
  
})();
