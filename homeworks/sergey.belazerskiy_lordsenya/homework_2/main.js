(function () {
    var arr = [];
    var newArray = [];
    for (var i = 0; i < 100; i++) {
        arr[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    }

    var arrayToFind = [3, 6, 0, -6, 12];

    var resultMax = findMinMax(arrayToFind, 'max'); // 12

    var resultMin = findMinMax(arrayToFind, 'min');  // -6

    console.log(resultMax); // 12

   console.log(resultMin); // -6
    function findMinMax(ourArray, minmax) {
        if (Array.isArray(ourArray) == true) {
            var compare = ourArray[0];
            ourArray.forEach(function (element, ourNewArray) {
                if (minmax == "min") {
                    if (element < compare) {
                        compare = element;
                    }
                } else {
                    if (minmax == "max") {
                        if (element > compare) {
                            compare = element;
                        }
                    } else {
                        console.log("incorrect second parametr");
                    }
                }
            });
            return compare;
        } else {
            console.log("incorrect first parametr");
        }
    }

    function convertArrayToObj(array) {
        var obj = {};
        var numb;
        for (var i = 0; i < array.length; i++) {
            if (i <= 25) {
                obj[String.fromCharCode(i + 97)] = array[i];
            } else {
                var numb = i - 25;
                obj[numb.toString()] = array[i];
            }
        }
        return obj;
    }

//    var newData = [2, 12, 22, 6, 32];
    var newData = [1,1,2,3,7,4,1]; 
    var oldData = [12,5,7,17,22,32];

    filterNew(newData, oldData);

    function filterNew(newData, oldData) {
        for (var i = 0; i < oldData.length; i++) {
            for (var j = newData.length - 1; j !== 0; j--) {
                if (newData[j] == oldData[i]) {
                    newData.splice(j, 1);
                }
            }
        }
    }

    console.log(newData); // in console : [2, 6]; with new arrey i got [1, 1, 2, 3, 4, 1] 7 is not unique, what is wrong?
})();