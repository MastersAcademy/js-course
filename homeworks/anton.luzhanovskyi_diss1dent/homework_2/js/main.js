"use strict";

(function () {

    /* Get array filled with random numbers from min to max*/
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
	
    /* Find min or max in array */
    function findMinMax(array, minmax) {
        if ( minmax == "max" ) {
            return Math.max.apply(Math, array);
        }
        else if ( minmax == "min" ) {
            return Math.min.apply(Math, array);
        }
        return 'incorrect arguments';
    }
	
    /* convert Array to Obj */
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
                obj[data[i]] = value; //alphabet keys 
                alphabetIterations ++;
            } else {
                obj[i - alphabetIterations + 1] = value; //numeric keys, starts from 1 
            }
        });
        return obj;
    }

    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];

    var arr1 = [2, 2, 3, 3, 15 ] ;
    var arr2 = [2, 3, 10];

    /*compare arrays and remove duplicates from the 1 one*/
    function filterNew(arr1, arr2) {
        for (var i = arr1.length; i >= 0; --i){
            for (var j = arr2.length; j >= 0; --j){
                if (arr1[i] === arr2[j]) {
                    arr1.splice(i,1);
                }
            }
        }
    }

    var ourArray = getArray();
    console.log('create array and fill it with number from 1 to 100:');
    console.log(ourArray);

    console.log('min in array:');
    console.log(findMinMax(ourArray,'min'));
    console.log('max in array:');
    console.log(findMinMax(ourArray,'max'));

    console.log('convert Array To Obj:');
    console.log(convertArrayToObj(ourArray));

    console.log('array newData wth removed duplicates:');
    filterNew(newData, oldData);
    console.log(newData);

    console.log('array arr1 wth removed duplicates:');
    filterNew(arr1, arr2);
    console.log(arr1);
})();