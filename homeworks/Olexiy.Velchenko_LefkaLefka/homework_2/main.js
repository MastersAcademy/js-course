(function() {
    
    var newArray = new Array();
    for (var i = 0; i < 100; ++i) {
        newArray.push(getRandomInt(1, 100));
    }
//    console.log(newArray);
//    console.log(findMinMax(newArray, "min"));
//    console.log(findMinMax(newArray, "max"));
//    console.log(convertArrayToObject(newArray));    
    
    // input: min and max elements between them is randomly generated int
    // return: random int element between min and max
    function getRandomInt(min, max) {
         return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // input: array and line that can take next value: "min", "max"
    // return: min or max element from array
    function findMinMax(array, whatFind) {
        var element = array[0];
        switch (whatFind) {
            case "min":
                for (var i = 1; i < array.length; ++i) {
                    if (element > array[i])
                    {
                        element = array[i];
                    }
                }
                return element;
                break;
            case "max":
                for (var i = 1; i < array.length; ++i) {
                    if (element < array[i])
                    {
                        element = array[i];
                    }
                }
                return element;
                break;
            default:
                return null;
                break;
        }
    }
    
    // input: array
    // return: object from values from array
    function convertArrayToObject(array) {
        var obj = {};
        var name = 97;
        for (var i = 0; i < array.length; ++i) {
            // name of the property is a letter of latin alphabet
            // for this take ASCII code (97 - 122)
            if (name <= 122) {
                obj[String.fromCharCode(name)] = array[i];
                ++name;
            }
            // then take digits
            else {
                obj[i - 25] = array[i];
            }
        }
        
        return obj;
    }
    
    // input: two arrays
    // return: none, all changes made in array1
    function filterNew(array1, array2) {
        for (var i = 0; i < array1.length; ++i) {
            if (find(array1[i], array2)) {
                array1.splice(i, 1);
                --i;
            }
        }
    }
    
    // input: value that need to find
    // return: true if it is found, false if it is not found
    function find(num, array) {
        for (var i = 0; i < array.length; ++i) {
            if (array[i] === num) {
                return true;
            }
        }
        return false;
    }
})()