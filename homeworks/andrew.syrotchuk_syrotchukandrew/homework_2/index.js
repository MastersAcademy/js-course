
(function () {

    var myArray = [];
    for (var i = 0; i < 100; i++) {
        myArray[i] = Math.floor((Math.random() * 100 + 1));
    }

    function findMinMax(array, option) {
        if ((option !== 'min') && (option !== 'max')) {

            return console.log("Function accept only 'max' or 'min' options '" + option + "' got");

        } else if (option === 'min') {
            var min = array[0];
            for (i = 0; i < array.length; i++) {
                if (Number(array[i]) && !isNaN(array[i]) && array[i] < min) {
                    min = array[i];
                }
            }

            return min;

        } else if (option === 'max') {
            var max = array[0];
            for (i = 0; i < array.length; i++) {
                if (Number(array[i]) && !isNaN(array[i]) && array[i] > max) {
                    max = array[i];
                }
            }
        }

        return max;
    }

    function convertArrayToObj(array) {

        var obj = {};
        for (var j = 0, i = -25; j < array.length; i++, j++) {
            if (i < 1) {
                obj[String.fromCharCode(97 + j)] = array[j];
            } else {
                obj[i] = array[j];
            }
        }

        return obj;
    }

    function filterNew(arrayNew, arrayOld) {

       for (i = 0; i < arrayNew.length; i++) {
           for (var k = 0; k < arrayOld.length; k++) {
               if (arrayNew[i] === arrayOld[k]) {
                   arrayNew.splice(i, 1);
                   i--;
               }
           }
       }
    }

})();