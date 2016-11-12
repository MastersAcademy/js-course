(function () {
  "use strict";

  var numbers = [];

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

  findMinMax(numbers, 'min');
  findMinMax(numbers, 'max')

})();
