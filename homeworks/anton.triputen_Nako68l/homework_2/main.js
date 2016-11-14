(function () {
    var arr = [];
    var arr1 = [];
    for(var i=0; i<100; i++){
        arr[i] = Math.floor(Math.random()*100);
    }
    for(var i=0; i<100; i++){
        arr1[i] = Math.floor(Math.random()*100);
    }
    console.log(arr);
    console.log(arr1);
    var max = arr[0];
    var min = arr[0];
var findMinMax = function(arr, par) {
        for (i = 0; i < 100; i++){
            if (min > arr[i]){
                min = arr[i];
            }
        }
     for (i = 0; i < 100; i++) {
      if (max < arr[i]) {
          max = arr[i];
      }
  }
 if (par == 'min') {
     return min;
 }else if (par == 'max') {
     return max;
 }else {
     console.log('In this function you can enter only "min" or "max" as argument');
 }
}
    console.log(findMinMax(arr, 'min'));
    console.log(findMinMax(arr, 'max'));
    console.log(findMinMax(arr, 'mox'));
    console.log(findMinMax(arr1, 'max'));
   var filter = function (mas, mas1) {
            metka:
        for (i=0; i < 100; i++){
            for (j=0; j < 100; j++){
                if (mas[i] === mas1[j]){
                    mas.splice(i, 1);
                    continue metka;
                }
            }
        }
        return mas;
    }
    filter(arr, arr1);
    console.log(arr, 'we have left only ' + arr.length + ' elements in our first array');
    function arrayToObject(arr) {
        var abv;
        var obj = {};
        var i = 0, j = 1;
        abv = 'abcdefghijklmnopqrstuvwxyz';
        while (arr[i] !== undefined && abv[i]) {
            obj[abv[i]] = arr[i];
            i++;
        }
        while (arr[i] !== undefined) {
            obj[j] = arr[i];
            i++; j++;
        }

        return obj;
    }
    console.log(arrayToObject(arr1));
})();

    
