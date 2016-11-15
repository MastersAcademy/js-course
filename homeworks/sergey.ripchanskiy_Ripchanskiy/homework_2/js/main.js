    (function () {

    // 1. Сreate an empty array
    var integerArr=[];

    // 2. Add to it 100 of integers from 1 to 100 by the method Math.random()
    function getRandom(min, max) {
      return Math.round( Math.random() * (max - min) + min );
    }
    for (var i = 0; i < 100; i++) {
      integerArr[i] = getRandom(1, 100);
    }
    console.log(integerArr);

     //3. Search function and output to the console the max or min element
     function compareNumeric(a, b) {
      return a - b;
    }

    function findMinMax(arr, str) {
      arr = arr.sort(compareNumeric);
      if (str == 'min') return arr[0];

      else if (str == 'max') return arr[arr.length - 1];
    }

    var arrayToFind = [3, 6, 0, -6, 12];
    var   resultMax = findMinMax(arrayToFind, 'max');
    var   resultMin = findMinMax(arrayToFind, 'min');

    console.log(resultMax);
    console.log(resultMin);

        //4. Function to convert an array into an object
        function convertArrayToObj(arr) {
          var arrayKey,
          obj = {};

          for (var i = 0; i < arr.length; i++) {
            arrayKey = i < 26 ? String.fromCharCode(i + 97) : i - 25;
            obj[arrayKey] = arr[i];
          }

        return obj;
        }

    console.log( convertArrayToObj(arrayToFind) );
    console.log( convertArrayToObj(integerArr) );

    // 5. filter array function filterNew (arr1, arr2)
    function filterNew(arr1, arr2) {
      for (var i = 0; i < arr1.length; i++) {
        for (var n = 0; n < arr2.length; n++) {
          if (arr1[i] == arr2[n]) {
            arr1.splice(i, 1);
          }
        }
     }
   }

    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];

    filterNew(newData, oldData);
    console.log(newData);
    })();