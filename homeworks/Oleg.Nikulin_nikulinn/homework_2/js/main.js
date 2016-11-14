(function () {
  // 1-st create empty array

  var array = [];
  console.log("Create empty array :");
  console.log(array);

  // 2-d add 100 intager to array with mathod random

  function createArray() {
    array = new Array(100);
    for (i=0; i<100; ++i) {
      array[i] = Math.round(Math.random()*100);
    }
    // console.log(array.length);
  };

  createArray();
  console.log("Array with intager :");
  console.log(array);

  // 3-d search min and max value in array

  function findMaxMin(value) {
    if (value == 'resultMax') {
      return Math.max.apply(null,array);
    } else if (value == 'resultMin') {
      return Math.min.apply(null,array);
    }
  };
  console.log("Max value from array : " + findMaxMin('resultMax'));
  console.log("Min value from array : " + findMaxMin('resultMin'));

  // 4-th convert array to object

  function arrayToObject() {
    var object = {};
      for (var i = 0; i <= array.length; i++) {
        if (i <= 25) {
          object[String.fromCharCode(i + 97)] = array[i];
        } else {
          var numb = i - 25;
          object[numb] = array[i];
        }
      }
    return object;
  }
  console.log("Converted object from array :");
  console.log(arrayToObject());

  // 5-th make filter

  function filterNew(arr1,arr2) {
    for (var i = 0; i < oldData.length; i++) {
      for (var j = newData.length - 1; j !== 0 ; j--) {
        if (newData[j] == oldData[i]) {
          newData.splice(j,1);
        }
      }
    }
  }

   var newData = [2, 12, 22, 6, 32];
   var oldData = [12, 5, 7, 17, 22, 32];
   filterNew(newData, oldData);
   console.log("New filtered array : " + newData);

})();
