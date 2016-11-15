//1. Create empty array.
    var arr = [];

//2. Filled with 100 integer numbers. 

    function addRandom(min, max) {

        return Math.floor(Math.random() * (max - min) + min);
    }

            for(var i = 0; i < 100; i++) {

                arr.push(addRandom(1, 100));
            }

    console.log(arr);

//3. Function of searching min/max array element done.

    var arrayToFind = [3, 6, 0, -6, 12];
    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');

    function findMinMax(arrayToFind, str) {

        var sortFunc = function(a, b) {
            return a-b;
        }

    newArr = arrayToFind.sort(sortFunc);

        if(str == 'max'){
            return newArr[newArr.length-1];
        }

        else if(str == 'min'){
            return newArr[0];
        }
    }

    console.log(resultMax);
    console.log(resultMin);

//4. Convert array into object

    function convertArrayToObj(array) {

    var obj = {};
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var j = 1;

        for(var i = 0; i < array.length; i++) {

            if (i < alphabet.length) {
                obj[alphabet.charAt(i)] = array[i];

            }

            else if(i > alphabet.length) {
                obj[j++] = array[i];
            }
        }

    return obj;

    }

    console.log(convertArrayToObj(arr));


//5. Array filter function.

    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];


    function filterNew(arr1, arr2){

        for(var i = 0; i <= arr1.length; i++){

            for(var j = 0; j < arr2.length; j++){

                if (arr1[i] == arr2[j]){
                    arr1.splice(i, 1);
                    i--;
                }
            }
        }
    }

    filterNew(newData, oldData);
    console.log(newData);
