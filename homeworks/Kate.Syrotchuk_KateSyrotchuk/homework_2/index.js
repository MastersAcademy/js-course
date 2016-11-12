(function () {
var arr = [];
for (var i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 100 + 1));
}
console.log(arr);

function findMinMax(arr, param) {
    if (param == undefined) {
        throw new TypeError('you must refer to function min or max param');
    }
    var min = arr[0],
    max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }

    if (param == 'min') {
        return min;
    }

    if (param == 'max') {
        return max;
    }
}

// arr = [-1, -5, 5 , 10];
console.log(findMinMax(arr, 'min'));
console.log(findMinMax(arr, 'max'));

function arrayToObject(arr) {
    var s, obj = {}, i = 0, j = 1;
    s = 'abcdefghijklmnopqrstuvwxyz';
    while (arr[i] !== undefined && s[i]) {
        obj[s[i]] = arr[i];
        i++;
    }
    while (arr[i] !== undefined) {
        obj[j] = arr[i];
        i++; j++;
    }

    return obj;
}

// console.log(arrayToObject(arr));

function filterNew(arr1, arr2) {
    top:
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr1.splice(i, 1);
                i = 0; //will start from first element if one of element was removed. this is for not miss any element
                continue top;
            }
        }
    }

    return arr1;
}
var newData = [2, 12, 22, 6, 32, 15, 17];

var oldData = [12, 5, 7, 17, 22, 32];

filterNew(newData, oldData);

console.log(newData);
})();