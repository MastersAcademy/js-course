(function() {

//Task 1.

  var array = [];

//Task 2.

  for (var i = 0; i <= 100; i++) {
    array[i] = Math.floor((Math.random() + 0.01) * 100);
  }
  console.log(array);

// Task 3.

  var arrayToFind = [3, 6, 0, -6, 12];
  var resultMax = findminmax(arrayToFind, 'max');
  var resultMin = findminmax(arrayToFind, 'min');

    function findminmax(arrayToFind, minmax) {
      if (minmax == 'max') {
        return Math.max.apply(null, arrayToFind);
      }
      else if (minmax == 'min') {
        return Math.min.apply(null, arrayToFind);
      }
    }
  console.log(resultMax);
  console.log(resultMin);

// Task 4.

  function convertArrayToObj(arr) {
    var n = 'abcdefghijklmnopqrstuvwxyz';
    var obj = {};
    var q = 0;
    var g = 1;
      while (arr[q] !== undefined && n[q]) {
            obj[n[q]] = arr[q];
            q++;
      }
      while (arr[q] !== undefined) {
            obj[g] = arr[q];
            q++; g++;
      }
    return obj;
  }

//Task 5.

  function filterNew(arrayNew, arrayOld) {
    for (var m = 0; m < arrayNew.length; m++) {
      for (var l = 0; l < arrayOld.length; l++) {
        if (arrayNew[m] === arrayOld[l]) {
            arrayNew.splice(m, 1);
            m--;
        }
      }
    }
  }
     var newData = [2, 12, 22, 6, 32];
     var oldData = [12, 5, 7, 17, 22, 32];
     filterNew(newData, oldData);
     console.log(newData);
})();
