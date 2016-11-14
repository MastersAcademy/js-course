(function () {

    console.log('*************************************************************************');
//task #1,2

    var array1=[];
    var z;

    for (var i=0; i<100; i++){
        z=Math.round(Math.random()*i+1);
        array1.push(z);
    }
console.log("Array1: ", array1);

//task #3

    function compareNumbers(a, b) {
        return a - b;
    }
    array1.sort(compareNumbers);

    console.log("Array1 - sorted : ", array1);

    function findMinMax (arrayToFind, minMax) {

        if (minMax=="max") {
        return Math.max.apply(null, arrayToFind);
        }
        else if (minMax=="min"){
            return Math.min.apply(null, arrayToFind);
        }
        else {console.log('Second parameter is wrong! Use min or max! ');}
    }
    var resultMax = findMinMax(array1, 'max');
    var resultMin = findMinMax(array1, 'min');

    console.log(resultMax);

    console.log(resultMin);

// task #4
    function convertArrayToObj (array) {
        var alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var obj1 = {};
        for (var i=0; i<array.length; i++){
            if (i<26){
                obj1[alfabet[i]]=array[i];
            }
            else {
                obj1[i-25]=array[i];
            }
        }
        return obj1;
    }
    console.log (convertArrayToObj(array1));

// task #5

    var firstArray = [2, 12, 22, 6, 32, 44, 28, 25, 65, 11];

    var secondArray = [12, 5, 7, 17, 22, 32, 28, 65, 11];

   function filterNew(newData, oldData){

       for (var i=0; i<newData.length; i++){
           for (var j=0; j<oldData.length; j++){
               if (newData[i]==oldData[j]) {
                    newData.splice(i,1);

                   oldData.splice(j, 1);
               }
           }
       }
       newData.concat(newData);
   }

    filterNew (firstArray, secondArray);
    console.log(firstArray);

})();