
 (function () {

     console.log("++++++++++++++++++++++++++");
     var newArray = [];
     for(var i=0; i<100; i++) {
         newArray.push(Math.floor(Math.random() * 100 + 1));
     }
     console.log(newArray);

     console.log("++++++++++++++++++++++++++");
     function findMinMax(arrayToFind, strAction) {
         var result;
         if (strAction == 'min'){
             return Math.min(...arrayToFind);
         } else if(strAction == 'max'){
             return Math.max(...arrayToFind);
         }
         return result;
     }

     var arrayToFind = [26,4,9,2,0];
     var resultMax = findMinMax(arrayToFind, 'max');
     var resultMin = findMinMax(arrayToFind, 'min');

     console.log(resultMax);
     console.log(resultMin);

     console.log("++++++++++++++++++++++++++");

     function convertArrayToObj (array) {
         var strChar = "abcdefghijklmnopqrstuvwxyz";
         var keysArray = strChar.split("");
         var obj = {};
         for (var i=0; i < array.length; i++) {
             if(keysArray.length<i+1){
                 obj[i-25]= array[i];
             }else obj[keysArray[i]] = array[i];
         };
         return obj;
     }

     var array = [8,9,3,8,6,7,8,8,99,2,4,5,7,3,8,2,4,6,234,56,23,43,56,68,24,456,63,12];
     var result = convertArrayToObj(array);
     console.log(result);


     console.log("++++++++++++++++++++++++++");

    function arrDiff(arr1, arr2) {
        var same = [];
        arr1.forEach(function(e) {
            if (arr2.indexOf(e) >= 0) {
                same.push(e);
            }
        });
        same.forEach(function(e) {
            arr1.splice(arr1.indexOf(e), 1)
        })
    }

    var arr1 = [4,6,2,5,0];
    var arr2=[0,5,9,7,8];
    arrDiff(arr1,arr2);
    console.log(arr1);
})();