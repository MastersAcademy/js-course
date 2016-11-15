(function () {

  // 1. Create an array
  var arrayToFind = [];


  //2. Add to array integer numbers from 1 to 100
  for (var i = 1; i <= 100; i++) {
    arrayToFind.push(Math.round(Math.random() * 100))
  }


  //3. Function for find minimum or maximum number in array
  function findMinMax(array, input) {
    if (input == 'min') {
      return Math.min.apply(null, array);
    }
    else if (input == 'max') {
      return Math.max.apply(null, array);
    }
    else {
      alert("You must write max/min in second param")
    }
  }

   var resultMax = findMinMax(arrayToFind, 'max');
   var resultMin = findMinMax(arrayToFind, 'min');


  //4. Create an object
  function convertArrayToObj (array) {

    var obj = {};

    array.forEach(function (value, index) {
      if (index <= 25) {
        obj[String.fromCharCode(97 + index)] = value
      } else {
        obj[index - 25] = value;
      }
    });

    return obj;
  }


  //5. Function to to filter array
  function filterNew(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
      var index_arr1 = arr1.indexOf(arr2[i]);
      while (index_arr1 > -1) {
        arr1.splice(index_arr1, 1);
        index_arr1 = arr1.indexOf(arr2[i]);
      }
    }
  }

  var arr1 = [2, 2, 6, 2, 3, 3, 15, 22 ] ;
  var arr2 = [2, 3, 10];
  filterNew(arr1, arr2);

  console.log("Random array of integer numbers: [" + arrayToFind + "]");
  console.log("Max of array = " + resultMax);
  console.log("Min of array = " + resultMin);
  console.log(convertArrayToObj(arrayToFind));
  console.log(arr1);

})();