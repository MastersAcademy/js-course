(function () {
  "use strict";

  var numbers = [],
    newData = [2, 12, 22, 6, 32],
    oldData = [12, 5, 7, 17, 22, 32];

  for (var i = 1; i <= 100; i++ ) {
    numbers.push(Math.floor(Math.random() * (100 - 1) + 1));
  }

  function findMinMax (arr, type) {
    arr.sort(function(a, b) {
      return a - b;
    });

    switch (type) {

      case 'min':
        console.log(arr[0]);
        break;

      case 'max':
        console.log(arr[arr.length - 1]);
        break;

      default:
        console.log('Please, enter second argument "min" or "max"');
    }
  }

  function convertArrayToObj(array) {
    var obj = {};

    for( var i = 0; i < array.length; i++ ) {
      if(i < 26) {
        obj[String.fromCharCode(97 + i)] = array[i];

      } else {
        obj[(i - 25)] = array[i]
      }
    }

    return obj
  }

  function filterNew(arr1, arr2) {
    for( var i = 0; i < arr1.length; i++ ) {
      for( var j = 0; j < arr2.length; j++ ) {
        if( arr1[i] === arr2[j] ) {
          arr1.splice(i, 1);
          i--;
        }
      }
    }
  }

  console.log(/-------/);
  console.log(convertArrayToObj(oldData));

  console.log(/-------/);

  filterNew(newData, oldData);
  console.log(newData);

  console.log(/-------/);

  findMinMax(numbers, 'min');
  findMinMax(numbers, 'max');
  console.log(/-------/);

})();
