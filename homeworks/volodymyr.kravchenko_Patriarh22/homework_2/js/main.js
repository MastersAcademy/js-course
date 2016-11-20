(function () {

    var mainArray = [];
    var seconderyArray = [];

    for(var i = 0; i < 100; i++) {
        mainArray.push(randomNumber());
        seconderyArray.push(randomNumber());
    }

    function randomNumber () {
        return Math.ceil(Math.random() * 100);
    }

    function findMinMax(arrayToFind, param) {
        return param.toLowerCase() == 'max' ? Math.max(...arrayToFind) : Math.min(...arrayToFind);
    }

    function convertArrayToObj (arrayToFind) {
        var obj = {};
        var identifier = 97;
        var field;
        const BREAK_COUNT = 122;

        for(var i = 0; i < arrayToFind.length; i++) {
            field = (identifier / BREAK_COUNT) <= 1 ? String.fromCharCode(identifier) : (identifier - BREAK_COUNT).toString();
            obj[field] = arrayToFind[i];
            identifier++;
        }

        return obj;
    }

    function filterNew(firstArray, secondArray) {
        var arrLength = firstArray.length;
        var i = 0;

        while (i < arrLength) {
            for(var j = 0; j < secondArray.length; j++){
                if (firstArray[i] == secondArray[j]) {
                    firstArray.splice(i, 1); i--; arrLength--;
                    break;
                }
            }
            i++;
        }
    }

    console.log('Array: ' + mainArray);
    console.log('============================');
    console.log('Array length: ' + mainArray.length);
    console.log('============================');

    console.log('Max element: ' + findMinMax(mainArray, 'max'));
    console.log('============================');

    console.log('Min element: ' + findMinMax(mainArray, 'min'));
    console.log('============================');

    console.log('Object');
    console.log(convertArrayToObj(mainArray));
    console.log('============================');

    console.log('Second array: ' + seconderyArray);
    console.log('============================');

    filterNew(mainArray, seconderyArray);
    console.log('Filtered Array: ' + mainArray);

})();