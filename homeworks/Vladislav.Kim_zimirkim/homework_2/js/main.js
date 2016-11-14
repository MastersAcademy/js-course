(function(){
  /*******************Exersice #1 & #2***********************************************/

  var randomArray = [];
  for (var i = 0; i < 100; i++) {
    randomArray[i]=(Math.floor(Math.random() * (100 - 1)) + 1);
  }
  console.log(randomArray);

  /*********************************************************************************/

  /**********************Exersice #3************************************************/
  randomArray[10]=101;
  randomArray[20]=-1;

  function findMinMax(arr,min_or_max){
    if (min_or_max == 'min') {
      var min= arr[0];
      for (var i = 0; i < arr.length; i++) {
        if (min>arr[i]) {
          min=arr[i];
        }
      }
      return min;
    } else if (min_or_max == 'max'){
      var max = arr[0];
      for (var i = 0; i < arr.length; i++) {
        if (max<arr[i]) {
          max=arr[i];
        }
      }
      return max;
    }
  }

  var resultmin = findMinMax(randomArray,'min');
  var resultmax = findMinMax(randomArray,'max');
  console.log(resultmin);
  console.log(resultmax);

  /*********************************************************************************/

  /**********************Exersice #4************************************************/
  var test_short_array=[1,2,3,4,5,6,7,8,9,10];
   function convertArrayToObj(array){
     var obj={};
     for (var i = 0; i < array.length; i++) {
       if (i<=25) {
         obj[String.fromCharCode(i+97)]=array[i];
       }
       else {
         obj[i-25]=array[i];
       }
     }
     return obj;
   }
   obj=convertArrayToObj(test_short_array);
   console.log(obj);
   obj=convertArrayToObj(randomArray);
   console.log(obj);

  /*********************************************************************************/

  /**********************Exersice #5************************************************/

  var newData=[1,1,4,5,7,7,9,2,1];
  var oldData=[1,4,7,10];
  function filterNew(newwarray,olddarray) {
    for (var i = 0; i < newwarray.length; i++) {
            for (var k = 0; k < olddarray.length; k++) {
                if (newwarray[i] == olddarray[k]) {
                    newwarray.splice(i, 1);
                    i--;
                }
            }
        }
    }
  filterNew(newData,oldData);
  console.log(newData);

  /*********************************************************************************/

})();
