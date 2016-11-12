(function(){
  // 1
  var arr = [];

  // 2
  for (var i = 0; i < 100; i++) {
    arr[i] = parseInt(Math.random() * 100 + 1);
  }

  // 3
  function findMinMax(array, minOrMax) {
    if ((typeof array != "object") || !(array instanceof Array)) return null;
    var out = array[0];

    if (minOrMax.toString() == "min") {
      array.forEach(function (element) {
        if (element < out) out = element;
      });
    } else if (minOrMax.toString() == "max") {
      array.forEach(function (element) {
        if (element > out) out = element;
      });
    } else return null;

    return out;
  }

  // 4
  function convertArrayToObj(array) {
    var obj = {};
    var startChar = true; //keys starts from letters
    var key = 97; // 97 - decimal charcode of 'a'
    array.forEach(function (element) {
      if (startChar) {
        obj[String.fromCharCode(key)] = element;
        key++;
        if (key > 122) { // key more than 'z'
          startChar = false;
          key = 1;
        }
      } else {
        obj[key] = element;
        key++;
      }
    });
    return obj;
  }

  // 5
  function filterNew(arr1, arr2) {
    var index;

    arr2.forEach(function (element) {
      index = arr1.indexOf(element);
      while (index != -1) { // For complete deleting of duplicates
        arr1.splice(index, 1);
        index = arr1.indexOf(element);
      }
    })

  }


  // testing
  console.log("Array:");
  console.log(arr);
  console.log("***********");
  console.log("Min(arr) = " + findMinMax(arr, "min"));
  console.log("Max(arr) = " + findMinMax(arr, "max"));
  console.log("***********");
  console.dir(convertArrayToObj(arr));

  var newData = [2, 12, 22, 6, 32, 22];
  var oldData = [12, 5, 7, 17, 22, 32];
  filterNew(newData, oldData);
  console.log(newData)

})();