(function () {

    /* --------------------------------- Task 1 ------------------------------ */
    var newArr = [];

    console.log('/* --------------------------------- Task 2 ------------------------------ */');
    for (var i = 0; i < 100; i++) {
        newArr[i] = Math.floor((Math.random() * (100 - 1) + 1));
    }
    console.log(newArr);


    console.log('/* --------------------------------- Task 3 ------------------------------ */');


    var resultMax = findMinMax(newArr, 'max');
    var resultMin = findMinMax(newArr, 'min');

    function findMinMax(newArr, minMax) {

        if (minMax == 'max') {
            return Math.max.apply(null, newArr);
        }

        else if (minMax == 'min') {
            return Math.min.apply(null, newArr);
        }
    }

    console.log(resultMax);
    console.log(resultMin);


    console.log('/* --------------------------------- Task 4 ------------------------------ */');


    function convertArrayToObj(newArr) {

        var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var obj = {};
        var z = 1;

        for (var i = 0; i < newArr.length; i++) {


            if (i < abc.length) {
                obj[abc[i]] = newArr[i];

            } else if (i > abc.length) {
                obj[z++] = newArr[i];
            }

        }

        return obj;
    }

    console.log(convertArrayToObj(newArr));

    console.log('/* --------------------------------- Task 5 ------------------------------ */');

    var newData = [2, 2, 3, 3, 15 ] ;
    var oldData = [2, 3, 10];

    // var newData = [2, 12, 22, 6, 32];
    // var oldData = [12, 5, 7, 17, 22, 32];

    function filterNew(newData, oldData) {
        for (var i = 0; i < newData.length; i++) {
            for (var a = 0; a < oldData.length; a++) {
                if (newData[i] == oldData[a]) {
                    newData.splice(i, 1);
                    --i;
                }
            }
        }
    }

    filterNew(newData, oldData);

    console.log(newData);

})();