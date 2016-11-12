(function () {
  /*
      1) create empty array
  */
  var array = [];
  console.log("\n\nResults of task 1\n");
  console.log("Array has been created. Array has " + array.length + " elements");

  /*
      2) fill array with 100 integer numbers from 1 to 100,
      used Math.random(), 0 ≤ Math.random() < 1
   */
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  for (var i = 0; i < 100; i++) {
    array.push(getRandomInteger(1, 100));
  }
  console.log("\n\nResults of task 2\n");
  console.log(array.toString());
  console.log("array\'s length is - " + array.length + " elements");

  /*
      3) function findMinMax(arr , str) it must return minimum or maximum value of array,
      first parameter arr -  array where looking for element,
      second parameter str - string "min" or "max", which element looking for
  */
  function findMinMax(arr, str) {
    var elementForCompare = arr[0];
    switch (str) {
      case "max" :
        for (var i = 1; i < arr.length; i++) {
          if (arr[i] > elementForCompare) {
            elementForCompare = arr[i];
          }
        }
        break;
      case "min" :
        for (var j = 1; j < arr.length; j++) {
          if (arr[j] < elementForCompare) {
            elementForCompare = arr[j];
          }
        }
        break;
      default : elementForCompare = null;
    }
    return elementForCompare;
  }

  var arrayToFind = [3, 6, 0, -6, 12];
  var resultMax = findMinMax(arrayToFind, 'max');
  var resultMin = findMinMax(arrayToFind, 'min');
  console.log("\n\nResults of task 3\n");
  console.log(resultMax != null ? resultMax :  "doesn\'t define criteria of search method!"); // 12
  console.log(resultMin != null ? resultMin :  "doesn\'t define criteria of search method!"); // -6

  /*
      4) function fills property\'s object\'s values  with values from array :
      plus first 26 object field\'s keys must called like small letters of English alphabet - a..z,
      other object field\'s keys must called like arabic numbers 1..n
  */
  function convertArrayToObj(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      if (i < 26) {
        obj[String.fromCharCode(97 + i)] = arr[i];
      } else {
        obj[i-25] = arr[i];
      }
    }
    return obj;
  }
  console.log("\n\nResults of task 4\n");
  var arrStorage = [];
  for (var k = 0; k < 100; k++) {
      arrStorage[k] = k + 1;
  }
  var object = convertArrayToObj(arrStorage);
  var objectInTxtFormat = "{\n\t";
  var temp = "";
  /*
    js doesn\'t guarantee the order for object\'s fields, so there is order in string temp object\'s keys like -
    at first - numbers keys and after that - letters keys
  */
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      temp += "\t\'" + key + "\' : "+ object[key] + ",\n";
    }
  }
  /* find position object\'s key 'a' and push temp string to output result string objectInTxtFormat
     from this position to position of last element\'s with letter\'s key
  */
  var pos = temp.search(/\s+'a\'\s+:/);
  for (var t = pos; t  < temp.length; t++) {
    objectInTxtFormat += temp[t];
  }
  // push rest part of temp string in output result string objectIntTxtFormat
  for (var b = 0; b < pos; b++) {
    objectInTxtFormat += temp[b];
  }
  objectInTxtFormat += "\n}";
  //delete last extra comma from string objectInTxtFormat before output
  console.log(objectInTxtFormat.replace(/,\s+}\s*$/, "\n}"));

  /*
      5) function filterNew(arr1, arr2) deletes from one array(arr1)
      all elements of second array(arr2)
  */
  function filterNew(arr1, arr2) {
    for (var n = 0; n < arr2.length; n++) {
      for (var m =0; m < arr1.length; m++) {
        if (arr2[n] === arr1[m]) {
          arr1.splice(m, 1);
        }
      }
    }
  }
  var newData = [2, 12, 22, 6, 32];
  var oldData = [12, 5, 7, 17, 22, 32];
  filterNew(newData, oldData);
  console.log("\n\nResults of task 5\n");
  console.log(newData); // in console : [2, 6];
})();
