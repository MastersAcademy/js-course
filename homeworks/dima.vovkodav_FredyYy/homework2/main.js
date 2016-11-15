(function () {
    // Task #1 - Create an empty array
    var randomArray = [];
    
    // Task #2 - Create an random array
    for (var i = 0; i<100 ; i++) {
        randomArray[i] = Math.round(Math.random()*(100 - 1) + 1);
    }
    console.log(randomArray);
    
    // Task #3 - Function to find minimal and maximal digits an in array.
    var arr = [1,0,2,5,22,11,-4,3,-2,2];
    function FindToMinMax (array, type) {
        if (type == 'max') {
            return Math.max.apply(null, array);
        } else {
            return Math.min.apply(null, array);
        }
    }
    var resulFindMax = FindToMinMax(arr,'max'),
        resulFindMin = FindToMinMax(arr,'min');
    console.log(arr);
    console.log('Maximal digits: '+resulFindMax);
    console.log('Minimal digits: '+resulFindMin);
    
    //Task 4 - Function to convert array into object
    function convertArrayToObj (arrData) {
    var obj = {},
        prop = [];
    for (var i = 0; i < 26 ; i++) {
        prop[i] = String.fromCharCode(i+97);
    }
    for (var i=0; i<arrData.length; i++) {
        if(i < 26) {
            obj[prop[i]] = arrData[i];
        } else {
            obj[i-25] = arrData[i];
        }
    }
        return obj;
    }
    console.log(convertArrayToObj(randomArray));
    
    //Task 5 - Function to filter arrays
    var newArray = [1,-4,2,6,3,14, 11],
        oldArray = [1,2,6,12,3,11];
    function FilterArray(arr1,arr2) {
        for (var i= 0; i< arr1.length; i++) {
            for (var k = 0;k<arr2.length;k++) {
                if(arr1[i] == arr2[k]) {
                    arr1.splice(i,1);
                }
            }
        }
    }
    FilterArray(newArray,oldArray);
    console.log(newArray);
}());