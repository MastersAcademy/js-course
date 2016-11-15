(function () {

   console.log('*********************-----1------****************************');

    var arr = [] ;

    console.log('*********************-----2------****************************');

    for (var i = 0; i < 100; i++) {

        arr.push( Math.floor(Math.random() * 100));
    }

    console.log('*********************-----3------****************************');

    var arrayToFind = [3, 6, 0,-6, 12];
    var resultMin = findMinMax(arrayToFind, 'min');
    var resultMax = findMinMax(arrayToFind, 'max');
    function findMinMax(arrayToFind, minMax) {
        var n = arrayToFind[0];
        if (minMax == 'min')
            for (i = 0; i < arrayToFind.length; i++) {
                if (n > arrayToFind[i]) {
                    n = arrayToFind[i];
            }
        }
        else if (minMax == 'max') {
            for (i = 0; i < arrayToFind.length; i++) {
                if (n < arrayToFind[i]) {
                    n = arrayToFind[i];
                }
            }
        }
        return n;

    }

    console.log('Min =' + resultMin);
    console.log('Max=' + resultMax );

    console.log('*********************-----4------****************************');

    function convertArrayToObj(array) {
        var obj = {};
        for (var j = 0, i = -25; j < array.length; i++, j++) {
            if (i < 1) {
                obj[String.fromCharCode(97 + j)] = array[j];
            } else {
                obj[i] = array[j];
            }

        }
            return obj;

    }

    console.log('*********************-----5------****************************');

    var newData = [2, 2, 3, 3, 15];
    var oldData = [2, 3, 10];
    function filterNew(array1, array2) {
        for (var i = 0; i < array1.length; i++) {
            for (var n = 0; n < array2.length; n++) {
                if (array1[i] == array2[n]) {
                    array1.splice(i, 1);
                    --i;
                }
            }
        }
    }
    filterNew(newData, oldData);
    console.log(newData);

})();










