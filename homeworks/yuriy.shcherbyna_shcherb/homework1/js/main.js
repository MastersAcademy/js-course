(function () {
    var myArray = [];

    for(var i = 0; i < 100; i++) {
        myArray.push(Math.floor(Math.random() * 99 + 1))
    }

    console.log(myArray);

    function findMinMax(arrayToFind, action) {
        var result = arrayToFind[0];
        if(action == 'max') {
            arrayToFind.forEach(function (elem) {
                if (elem > result) {
                    result = elem
                }
            })
        }
        if(action == 'min') {
            arrayToFind.forEach(function (elem) {
                if (elem < result) {
                    result = elem
                }
            })
        }
        return result
    }

    console.log(findMinMax(myArray, 'max'));
    console.log(findMinMax(myArray, 'min'));

    function convertArrayToObj (array) {
        var obj = {};
        var index = 'a';
        var dif = 'z'.charCodeAt(0) - 'a'.charCodeAt(0);
        array.forEach(function (val, i) {
            if(i <= dif){
                obj[index] = val;
                index = String.fromCharCode(index.charCodeAt(0) + 1)
            }
            else{
                obj[(i - dif).toString()] = val;
            }
        });
        return obj;
    }

    convertArrayToObj(myArray);

    function filterNew(array1, array2) {
        newData = array1.filter(function(val){
            return array2.indexOf(val) == -1
        });
    }

    var newData = [2, 12, 22, 6, 32];

    var oldData = [12, 5, 7, 17, 22, 32];

    filterNew(newData, oldData);

    console.log(newData);

})();
