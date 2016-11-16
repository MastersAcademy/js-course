(function () {
    var randomArray = [];

    function myArray() {
        for (var i = 1; i <= 100; i++) {
            randomArray.push(Math.floor((Math.random() * 100) + 1))
        }
        return randomArray;
    }
    randomArray = myArray();

    console.log(randomArray);

    function findMinMax(array , type) {
        if(type === 'max'){
            return Math.max.apply( Math, array );

        }else if(type === 'min'){
            return Math.min.apply( Math, array );
        }
    }

    var resultMax = findMinMax(randomArray, 'max');

    var resultMin = findMinMax(randomArray, 'min');


    console.log(resultMax);

    console.log(resultMin);


    function convertArrayToObj(array) {
        var obj = {};
            for (var e = 0; e <= array.length; e++ ){
                if(e <= 25){
                    obj[String.fromCharCode(97 + e)] = array[e]
                }else{
                    obj[e - 25] = array[e - 1]
                }
            }
        return obj;
    }

    console.log(convertArrayToObj(randomArray));


    var newData = [2, 12, 22, 6, 32];

    var oldData = [12, 5, 7, 17, 22, 32];

    function filterNew(array1, array2) {
        for (var a = array1.length; a >= 0; --a) {
            for (var j = array2.length; j >= 0; --j) {
                if (array1[a] === array2[j]) {
                    array1.splice(a, 1);
                }
            }
        }
    }

    filterNew(newData, oldData);

    console.log(newData);


})();
