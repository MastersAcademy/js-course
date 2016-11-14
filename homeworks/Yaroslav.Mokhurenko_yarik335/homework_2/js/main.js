(function () {

    console.log('************************ 1,2 Tasks **********************************');
    var array = [];
    for (var i = 0; i < 101; i++) {
        array.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
    }

    console.log(array);
    console.log('*****************************3 Task********************************************');


    var findMinMax = function (arr, string) {
        var max = -Infinity, min = +Infinity;

        if (string == "max") {
            max = Math.max.apply(null, arr);
            /* for (var i = 0; i < arr.length; i++) {
             if (arr[i] > max) {                         //search max by using loop
             max = arr[i];
             }}*/
            return max;
        }
        else {
            if (string == "min") {
                min = Math.min.apply(null, arr);
                /*  for (var i = 0; i < arr.length; i++) {
                 if (arr[i] < min) {                         //search min by using loop
                 min = arr[i];
                 }
                 }*/
                return min;
            }
        }


    };
    var resultMax = findMinMax(array, 'max');

    var resultMin = findMinMax(array, 'min');

    console.log(resultMax); // 12

    console.log(resultMin); // -6

    console.log('*****************************4 Task********************************************');

    function convertArrayToObj(array) {
        var newObj = {};
        var i = 1;
        var lang = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        array.forEach(function (item, index) {

            if (index < lang.length) {
                newObj[lang[index]] = item;
            } else if (index > lang.length) {
                newObj[i] = item;
                i++;
            }
        });
        return newObj;
    }


    console.log(convertArrayToObj(array));

    console.log('*****************************5  Task********************************************');


    var newData = [2, 12, 22, 6, 32];

    var oldData = [12, 5, 7, 17, 22, 32];

    function filterNew(firstarr, secondarr) {
        secondarr.forEach(function (item) {
            if (firstarr.indexOf(item) >= 0) {
                newData.splice(firstarr.indexOf(item), 1);
            }
        });
    }

    filterNew(newData, oldData);

    console.log(newData); // in console : [2, 6];
})
();