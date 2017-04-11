(function () {
//1.
var arr = new Array()
//2.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
arr, i = 1, str = '';
for ( i = 0; i < 100; i++ ) {
    arr[i] = getRandomInt(1, 100)
}
console.log(arr);
//3.
function findMinMax(arr, status) {
    var result;

    if (status == 'max' || status == 'min') result = getResult();

    return result;

    function getResult() {
        return Math[status].apply(null, arr);
    }
}

var resultMax = findMinMax(arr, 'max');
var resultMin = findMinMax(arr, 'min');

console.log(resultMax);
console.log(resultMin);
//4.
function convertArrayToObj(array) {
    var result = {};
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (var i = 0; i < array.length; i++) {
        var el = array[i];
        var alphLen = alphabet.length;
        i < alphLen ? result[alphabet[i]] = el : result[i - alphLen + 1] = el;
    }

    return result;
}

var result = convertArrayToObj(arr);

console.log(result);
//5.
function filterNew(array1, array2) {
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                array1.splice(i, 1);
            }
        }
    }
    return array1;
}

var newData = [2, 12, 22, 6, 32];
var oldData = [12, 5, 7, 17, 22, 32];

filterNew(newData, oldData);

console.log(newData);

})();