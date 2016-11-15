(function () {

console.log('--------- 1-3 ---------')

//task 1
var numbers = [];

//task 2
for (var i=0; i<100; i++) {
	numbers.push(Math.floor((Math.random()*100) + 1));
}

console.log (numbers);


//task 3
var arrayToFind = numbers;
var resultMax = findMinMax(arrayToFind, 'max');
var resultMin = findMinMax(arrayToFind, 'min');

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

console.log('min:' + resultMin);
console.log('max: ' + resultMax );

console.log('--------- 4 ---------')

//task 4
function convertArrayToObj(array) {
    var obj = {};
        for (var n = 0, i = -25; n < array.length; i++, n++) {
            if (i < 1) {
                obj[String.fromCharCode(97 + n)] = array[n];
            } else {
                obj[' '+i] = array[n];
            }

        }
            return obj;

    }


console.log(convertArrayToObj(numbers)); 

console.log('--------- 5 ---------')

//task 5
var newData = [2, 12, 22, 6, 32];
var oldData = [12, 5, 7, 17, 22, 32];
    function filterNew(array1, array2) {
        for (var i = 0; i < array1.length; i++) {
            for (var n = 0; n < array2.length; n++) {
                if (array1[i] == array2[n]) {
                    array1.splice(i, 1);
                }
            }
        }
    }
    filterNew(newData, oldData);

console.log(newData);

})();