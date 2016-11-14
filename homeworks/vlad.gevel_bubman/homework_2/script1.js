// z1

(function () {

    array = [];

    console.log(array);
//z2

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min
}
    for (var i = 0; i <= 100; i++) {

        array.push(getRandomInt(1, 100));

    };

    console.log(array);

}());

//z3

function findMinMax(array,extr) {

    if (extr == "max") {

        var max = Math.max.apply(Math, arr);

        return max;

    }else if (extr == "min") {

        var min = Math.min.apply(Math, arr);

        return min;

    }else {

        console.log("error")
        	};
    };

(function () {

    var resultMax = findMinMax(arr, 'max');

    var resultMin = findMinMax(arr, 'min');

    console.log("Макс: " + resultMax);

    console.log("Мін: " + resultMin);

}());

//z4

function convertArrayToObj (arr) {

    var key,

        lit = "abcdefghijklmnopqrstuvwxyz",

        obj = {};

    for (var i = 1; i <= arr.length; i++){

        if (i <= 26){

            key = lit.charAt(i-1);

            obj[key]=arr[i];

        }else if (i > 26) {

            key = i-26;

            obj[key]=arr[i];

        }

    }

    return obj;

}

console.log(convertArrayToObj(array));

//z5

function filterNew(arr1, arr2){

    for (var i = 0; i <= arr1.length;i++){

        if (arr2.indexOf(arr1[i]) !== -1){

            arr1.splice(i,1);

            i = 0;

        }

    }

}

    var newData = [2, 12, 22, 6, 32];

    var oldData = [12, 5, 7, 17, 22, 32];

filterNew(newData, oldData);

console.log(newData);

