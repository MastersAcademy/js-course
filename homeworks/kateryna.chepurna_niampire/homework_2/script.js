


 var arr = [];



var arrayRandom = [];
   for(i = 0; i < 100; i++) {
   arrayRandom[i] = Math.floor(( Math.random() * 100 ) + 1);
}


   var arrayToFind = [3, 6, 0, -6, 12];

   var resultMax = findMinMax(arrayToFind, 'max');

   var resultMin = findMinMax(arrayToFind, 'min');

   function findMinMax(arrayToFind, minMax) {

   if ( minMax  == 'max') {
      return Math.max.apply(null, arrayToFind);
}
    else {
      return Math.min.apply(null, arrayToFind);
     } 

  

   

  
 
 
    readyArray = createArray(30);
    doneArray = convertArrayToObj(readyArray);
    console.dir(doneArray);
    function createArray(count) {
        result = [];
        while(count > 0) {
            count--;
            result[count] = Math.floor(Math.random() * 100) + 1
        }
        return result;
    }
   

    function convertArrayToObj(newArray) {
      var obj = {};
      alphabet = ["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x', 'y','z'];
      numberKey = 1;
      for(key in newArray) {
        if(alphabet.length > 0) {
         obj[alphabet.shift()] = newArray[key];
      } else {
          obj[numberKey] = newArray[key];
          numberKey++;
       }
      }
      return obj;
    }
 


  var newData = [22,2, 12, 6, 32];
  var oldData = [12, 5, 7, 17, 22, 32];
  
    function filterNew(array1, array2) {
      
     for (i = 0; i < array1.length; i++) {
       for (var k = 0; k < array2.length; k++) {
         if(array1[1] === array2[k]){
           array1.delete(i);
           i--;
         }
       }
     }
  
