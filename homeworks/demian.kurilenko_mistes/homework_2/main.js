(function (){
    var array = [];
    console.log('*************************');
    for (var i = 0; i < 100; i++){
        array[i]=(Math.floor(Math.random()*100)+1);
    }
    console.log(array.toString());
    console.log('*************************');
    function findMinMax(array, String) {
        if (String == 'max'){
            return Math.max.apply(null,array);
        }
        if (String == 'min'){
            return Math.min.apply(null,array);
        }
    }
    console.log(findMinMax(array,'min'));
    console.log(findMinMax(array,'max'));
    console.log('*************************');
    function arrayToObj(array) {
         var obj = {},
                num = 1;
        for(var i=0;i<array.length;++i){
              var code = 97;
                var ch = String.fromCharCode(code + i);
               if(i<=25){
                   obj[ch] = array[i];
                } else {
                    obj[num] = array[i];
                         num++;
                   }
             }
            return console.log(obj);
        }
     arrayToObj(array);
    console.log('*************************');
    var newData = [2, 12, 22, 6, 32],
       oldData = [12, 5, 7, 17, 22, 32];

     function filterNew(newData, oldData){

         var newD = newData.length;
         var oldD = oldData.length;

          for (var i=0;i<newD;i++) {
                  var n = newData[i];
                 for (var a=0;a<oldD;a++) {
                     if (n==oldData[a]) {
                         newData.splice(i,i);
                         i=0;
                     }
                 }
               }
             console.log(newData);
           }

    filterNew(newData, oldData);
})();