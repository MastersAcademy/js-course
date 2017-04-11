(function () {
    //1
    var arrayToFind = [];
    var arrayToFind1 = [];
    //2
    for(var i = 0; i < 100; i++){
        arrayToFind[i] = Math.floor(Math.random()*100 + 1);
    }
    for(var i = 0; i < 100; i++){
        arrayToFind1[i] = Math.floor(Math.random()*100 + 1);
    }
    console.log(arrayToFind);
    console.log(arrayToFind1);
    var max = arrayToFind[0];
    var min = arrayToFind[0];
    //3
    var findMinMax = function(arr, par) {
        if (par == 'min') {
            for (i = 0; i < 100; i++) {
                if (min > arr[i]) {
                    min = arr[i];
                }
            }
            return min;
        }else if (par == 'max') {
            for (i = 0; i < 100; i++) {
                if (max < arr[i]) {
                    max = arr[i];
                }
            }
            return max;
        } else {
            console.log('In this function you can enter only "min" or "max" as argument');
        }
    };
    var resultMax = findMinMax(arrayToFind, 'min');
    var resultMin = findMinMax(arrayToFind, 'max');
    console.log(resultMax);
    console.log(resultMin);
    //5
    var newData = [1, 1, 2, 2, 3];
    var oldData = [1, 2, 5];
    var filterNew = function (newDataArg, oldDataArg) {
        metka:
            for (i = 0; i < newDataArg.length; i++){
                for (j = 0; j < oldDataArg.length; j++){
                    if (newDataArg[i] === oldDataArg[j]){
                        newDataArg.splice(i, 1);
                        continue metka;
                    }
                }
            }
        return newDataArg;
    };
    filterNew(newData, oldData);
    console.log(newData, 'we have left only ' + newData.length + ' elements in our first array');
    //4
    function arrayToObject(arr) {
        var abc;
        var obj = {};
        var i = 0, j = 1;
        abc = 'abcdefghijklmnopqrstuvwxyz';
        while (arr[i] !== undefined && abc[i]) {
            obj[abc[i]] = arr[i];
            i++;
        }
        while (arr[i] !== undefined) {
            obj[j] = arr[i];
            i++; j++;
        }

        return obj;
    }
    console.log(arrayToObject(arrayToFind1));
})();

    
