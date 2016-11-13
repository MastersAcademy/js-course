(function(){
  /*******************Exersice #1 & #2**********************************************/

  var randomArray = [];
  for (var i = 0; i < 100; i++) {
    randomArray[i]=(Math.floor(Math.random() * (100 - 1)) + 1);
  }
  console.log(randomArray);

  /*********************************************************************************/

  /**********************Exersice #3************************************************/
  var arrayex3=[12,5,-8,22,44,92,-1];
  var min=9999;
  var max=-9999;
  function findMinMax(arr,minmax){
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]>max) {
        max=arr[i];
      }
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]<min) {
        min=arr[i];
      }
    }
    if (minmax=='min') {
      return min;
    }
    if (minmax=='max'){
      return max;
    }
  }
  var resultmin = findMinMax(arrayex3,'min');
  var resultmax = findMinMax(arrayex3,'max');
  console.log(resultmin);
  console.log(resultmax);

  /*********************************************************************************/

  /**********************Exersice #4************************************************/

   function convertArrayToObj(array){
     var obj={};
     var index_letter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
     var index_numb=1;
       for(i = 0; i < index_letter.length; i++){
         obj[index_letter[i]] = array[i];
     }
     if (i != array.length){
         while(i < array.length){
             obj[index_numb] = array[i];
             i++;
             index_numb++;
         }
     }
     return obj;
   }
   obj=convertArrayToObj(randomArray);
   console.log(obj);

  /*********************************************************************************/

  /**********************Exersice #5************************************************/

  var newData=[10,20,30,40,50,60];
  var oldData=[10,20,50,80,120];
  function filterNew(newData,oldData) {
    for (var i = 0; i < oldData.length; i++) {
      for (var k = 0; k < newData.length; k++) {
        if (newData[i]==oldData[k]) {
          newData.splice(i,1);
          i--;
        }
      }
    }
  }
  filterNew(newData,oldData);
  console.log(newData);

  /*********************************************************************************/

})();
