(function() {
    /*--1--*/
    var randomArray = [];

    /*--2--*/

    for (var i = 0; i < 100; i++)
        randomArray[i] = Math.round(0.5 + Math.random()*100);
    console.log(randomArray);

    /*--3--*/

    function findMinMax(array, condition){
        if (condition == 'min'){
            var min = array[0];
            for (var i = 1; i < array.length; i++){
                if (array[i] < min)
                    min = array[i];
            }
            return min;
        }
        if (condition == 'max'){
            var max = array[0];
            for (var i = 1; i < array.length; i++){
                if (array[i] > max)
                    max = array[i];
            }
            return max;
        }
    }
    console.log(findMinMax(randomArray,'min'));
    console.log(findMinMax(randomArray,'max'));

    /*--4--*/

    function convertArrayToObj (array) {
        var obj = {};
        var objKeys = [];
        var k = 97;
        for (var i = 0; i <= 25 ; i++) {
            objKeys.push(String.fromCharCode(k + i));
        };
        for (var j = 1; j <= 74; j++) {
            objKeys.push(j);
        };
        objKeys.forEach(function(value, index){
            obj[value] = array[index];
        });
        return obj;
    }

    var object = convertArrayToObj(randomArray);
    console.log(object);

    /*--5--*/

    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];

    function filterNew(arr1, arr2){
        for (var i = 0; i<arr1.length; i++){
            for (var j = 0; j < arr2.length; j++){
                if (arr1[i] == arr2[j]){
                    arr1.splice(i,i+1);
                }
            }
        }
        return arr1;
    }

    console.log(filterNew(newData, oldData));

})();