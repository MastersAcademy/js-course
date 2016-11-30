(function () {

    console.log("1-2. FILLING EMPTY ARRAY WITH THE RANDOM NUMBERS");

    var arrayOfRandNumbers = [];

    for (var i = 0; i < 100; i++) {
        arrayOfRandNumbers.push(Math.trunc(Math.random() * 100 + 1));
    }

    console.log(arrayOfRandNumbers);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    console.log("3. FINDING MINIMAL and MAXIMAL ELEMENT IN ARRAY");

    var arrayToFind = [3, 6, 0, -6, 12];

    function findMinMax(arrToFind, minOrMaxParam) {

        var element = arrToFind[0];

        if (minOrMaxParam == "max") {

            for (var i = 1; i < arrToFind.length; i++) {
                if (arrToFind[i] > element)
                    element = arrToFind[i];
            }
        } else if (minOrMaxParam == "min") {
            for (var i = 1; i < arrToFind.length; i++) {
                if (arrToFind[i] < element)
                    element = arrToFind[i];
            }
        }

        return element;
    }

    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');

    console.log("Maximal element in array = " + resultMax);
    console.log("Minimal element in array = " + resultMin);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    console.log("4. CONVERTING ARRAY TO OBJECT");

    function convertArrayToObj(array){
        var obj = {};
        var i = 97, j = 0, k = 1;
        while (j < array.length) {
            if (i<=122){
                obj['\'' + String.fromCharCode(i) + '\''] = array[j];
                i++;
            } else {
                obj['\'' + k + '\''] = array[j];
                k++;
            }
            j++;
        }
        return obj;
    }

        console.log(convertArrayToObj(arrayOfRandNumbers));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    console.log("5. FILTERING ARRAY BY ANOTHER ARRAY");

    function filterNew(mainArr, filtratingArr) {

        for (var i = 0; i < mainArr.length; i++) {
            filtratingArr.forEach(function(element){
                if (mainArr[i] == element){
                    mainArr.splice(i, 1);
                    i--;
                }
            });
        }
    }


    var newData = [2, 12, 22, 6, 32, 32, 32];
    var oldData = [12, 5, 7, 17, 22, 32];

    filterNew(newData, oldData);

    console.log(newData);

})();