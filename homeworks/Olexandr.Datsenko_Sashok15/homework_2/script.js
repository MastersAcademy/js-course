(function () {

    // Task 1: Define array

    var arr = [];

    // Task 2: The array is filled

    function getRandomInt(min, max){
        return Math.floor(Math.random()*(max-min)) + min;
    }
    for(var i = 0; i <= 100; i++){

        arr[i] = getRandomInt(1,100);
    }
    console.log(arr);

    arr.sort(function(a, b) {

        return a - b;

    });

    // Task 3: Search min, mas elements of array

    var arrayToFind = [3, 6, 0, -6, 12];

    function findMinMax(mass, minMax){

        mass.sort(function(a, b) {

            return a - b;

        });

        if(minMax == 'min'){

            return mass[0];

        }if(minMax == 'max'){

            return mass[mass.length-1];

        }
    }

    var resultMax = findMinMax(arrayToFind, 'max');

    var resultMin = findMinMax(arrayToFind, 'min');

    console.log(resultMax); //12

    console.log(resultMin); // -6

    // Task 4: Create object

    function convertArrayToObj (array){

        var obj = {}, c = 1, abc = 'abcdefghijklmnopqrstuvwxyz';

        for(var i = 0; i < array.length; i++){

            if (i < 26) {

                obj[abc.charAt(i)] = array[i];
            }
            else if (i >= 26) {

                obj[c++] = array[i];

            }
        }

        return obj;
    }

    console.log(convertArrayToObj(arr));


    // Task 5: Filter array

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
    var newData = [2, 12, 22, 6, 32];

    var oldData = [12, 5, 7, 17, 22, 32];

    filterNew(newData, oldData);

    console.log(newData); // in console : [2, 6];

})();