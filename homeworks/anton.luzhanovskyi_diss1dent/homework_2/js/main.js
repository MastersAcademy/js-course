"use strict";

(function () {

    function getArray() {
        var arr = [];
        var min = 1;
        var max = 100;

        function getRandom(min, max) {
            return  Math.round(Math.random() * (max - min)) + min;
        }

        for (var i = 0; i < 100; i++) {
            arr.push(getRandom(min, max));
        }
        return arr;
    }

    function findMinMax(array, minmax) {
        if ( minmax == "max" ) {
            array.max = function () {
                return Math.max.apply(Math, array);
            }
            return array.max();
        }
        else if ( minmax == "min" ) {
            array.min = function () {
                return Math.min.apply(Math, array);
            };
            return array.min();
        }
        return 'incorrect arguments';
    }

    function convertArrayToObj(array) {
        var obj = {};
        var data = [];
        var alphabetIterations = 0;

        /* Get array with alphabet*/
        for (var i = 97; i < 122; i++) {
            data.push(String.fromCharCode(i))
        }

        array.forEach(function(value,i){
            if (data[i] !== undefined) {
                obj[data[i]] = value;
                alphabetIterations ++;
            } else {
                obj[i - alphabetIterations + 1] = value;
            }
        });
        return obj;
    }

    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];

    function filterNew(arr1, arr2) {
        for (var i = arr1.length; i >= 0; --i){
            for (var j = arr2.length; j >= 0; --j){
                if (arr1[i] === arr2[j]) {
                    arr1.splice(i,1);
                }
            }
        }
    }
    /* Not working
    function filterNew(arr1, arr2) {
        arr1.filter(function (item, i) {
            return arr2.indexOf(item) < 0;
        });
    }

    function filterNew2(arr1, arr2) {
        arr1.forEach(function(item, i) {
            arr2.forEach(function(item2,j) {
                if (item == item2) {
                    arr1.splice(i,1);
                }
            })
        });
    }*/


    var ourArray = getArray();
    console.log(ourArray);
    console.log(findMinMax(ourArray,'min'));
    console.log(findMinMax(ourArray,'max'));
    console.log(convertArrayToObj(ourArray));

    filterNew(newData, oldData);
    console.log(newData);

})();