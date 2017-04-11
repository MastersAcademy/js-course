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
            for (var e = 1; e <= array.length; e++ ){
                if(e <= 26){
                    obj[String.fromCharCode(97 + (e - 1))] = array[e]
                }else{
                    obj[e -26 ] = array[e -1 ]
                }
            }
        return obj;
    }

    console.log(convertArrayToObj(randomArray));


    var newData = [2, 12, 22, 6, 32];

    var oldData = [12, 5, 7, 17, 22, 32];
    function filterNew(array1,array2) {
        array1.forEach(function(item, i) {
            if(array2.indexOf(item) + 1){
                delete array1[i]
            }
        });
    }

    filterNew(newData, oldData);

    console.log(newData);


})();
