(function () {
//  // task  1 and 2
var firstArray = [];

for(var i =0; i<100; i++) {
    var min = 0;
    var max = 100;
	firstArray.push(Math.round(Math.random()*(max-min+1)+min));
}
console.log(firstArray);

// //  task 3
var arrayToFind = [3, 6, 0, -6, 12];
var resultMax = findMinMax(arrayToFind, 'max');
var resultMin = findMinMax(arrayToFind, 'min');
    function findMinMax(array, str) {
        if ( str == "max") {
            return resultMax =  Math.max.apply( null, array );
        }else{
            return resultMin =  Math.min.apply( null, array );
        }
    }

console.log(resultMax); // 12

console.log(resultMin); // -6

// // task 4
// used firstArray from task 2
   
function convertArrayToObj (array) {
    var obj = {};

     // Staff to convert array to obj 
    //...
    for(var i = 0, k = 97, j = 1 ; i < array.length; i++){
        if(k < 123){
            obj[ String.fromCharCode(k)] = array[i];
            k++;
        }else{
            obj[j] = array[i];
            j++;
        }
        
    }
    return (obj);
}

convertArrayToObj (firstArray);
 
// // task 5
var newData = [2, 12, 22, 6, 32,1526];
var oldData = [13, 5, 7, 17, 22,  2];
    function filterNew(arr1,arr2){
        for(var i =0; i < newData.length; i++) {
            for(var j = 0; j < oldData.length;j++) {
                if(newData[i] == oldData[j]) {
                 
                    newData.splice(i, 1);
                    i --;
                }

            }
        }
    }

filterNew(newData, oldData);
console.log(newData); 

})();