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
                obj[i] = array[n];
            }

        }
            return obj;

    }


console.log(convertArrayToObj(numbers)); 

console.log('--------- 5 ---------')

//task 5
function filterNew(arr1, arr2) {

        for(var i = 0; i<arr1.length; i++){

            for(var j=0; j<arr2.length; j++){

                    if(arr1[i]==arr2[j]) {

                        arr1.splice(i, 1)

                        i--;

                    }
            }
        }

    }
    var newData = [1, 1, 2, 2, 3];

    var oldData = [1, 2, 5];

    filterNew(newData, oldData);

    console.log(newData); 

})();