/**
 * Created by ylyashenko on 11.11.16.
 */

(function (){
// task1
    var arr = [];

// task2
    while(arr.length < 40){
        var randomNumber = Math.round(Math.random()*100);
        arr.push(randomNumber);
    }
    console.log(arr);


// task3
    function findMinMax(arr, m) {
        var max = 0,
            min = 0;
        if (m=='max'){
            // first variant
            max = Math.max.apply(null, arr);

            //second variant
            /*for(var i=0;i<arr.length;i++) {
                if (max < arr[i]) {
                    max = arr[i];
                }
            }*/
            return console.log('max number is - ' + max);
        } else if (m=='min') {
            // first variant
            min = Math.min.apply(null, arr);

            // second variant
            /*min = arr[0];
            for (var z=1;z<arr.length;z++){
                var b = arr[z];
                if(b < min) {
                    min = b;
                }
            }*/
            return console.log('min number is - ' + min);
        }
    };
    findMinMax(arr, 'max');
    findMinMax(arr, 'min');

// task4
    function arrayToObj(array) {
        var obj = {},
            num = 1;
        for(var i=0;i<array.length;++i){
            var str = String.fromCharCode(97 + i);
            if(i<=25){
                obj[str] = array[i];
            } else {
                obj[num] = array[i];
                num++;
            }
        }
        return console.log(obj);
    }
    arrayToObj(arr);


// task5
    var newData = [2, 12, 22, 6, 32],
        oldData = [12, 5, 7, 17, 22, 32];

    function filterNew(newData, oldData){
        var newD = newData.length,
            old = oldData.length;

        for (var i=0;i<newD;i++) {
            var n = newData[i];
            for (var a=0;a<old;a++) {
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