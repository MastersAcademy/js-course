(function () {

    // --------------------------Task 1---------------------
    // -----------------------------------------------------
        // created an empty array
        console.log("----------------Task 1----------------");
        console.log("Created an empty array");
        console.log("--------------------------------------");
        var numberArr = [];
    // -----------------------------------------------------

    // --------------------------Task 2---------------------
    // -----------------------------------------------------
        // create function randomNumberArray for random number from 0 to 100 items
        function randomNumberArray(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        };

        // Pushing to numberArr items from 0 to 100
        for (var i = 0; i < 100; i++) {
            numberArr.push(randomNumberArray(1, 100));
        };
        // Output numberArr
        console.log("----------------Task 2----------------");
        console.log("Output numberArr: ");
        console.log(numberArr);
        console.log("--------------------------------------");
    // -----------------------------------------------------
    
    // --------------------------Task 3---------------------
    // -----------------------------------------------------
        // create arrayToFind
        var arrayToFind = [3, 6, 0, -6, 12];

        function findMinMax(arrayToFind,randomNumber) {
            if (randomNumber == "max") {
                return Math.max.apply(Math, arrayToFind);;
            }
            else if (randomNumber == "min") {
                return Math.min.apply(Math, arrayToFind);;
            }
            else {
                console.log("Can`t determine the value!")
            };
        };
        
        (function () {
            var resultMax = findMinMax(arrayToFind, 'max');
            var resultMin = findMinMax(arrayToFind, 'min');
            console.log("----------------Task 3----------------");
            console.log("Maximum: " + resultMax); 
            console.log("Mininmum: " + resultMin); 
            console.log("--------------------------------------");
        }());
    // -----------------------------------------------------

    // --------------------------Task 4---------------------
    // -----------------------------------------------------
        // create convertArrayToObj 
        function convertArrayToObj (array) {
            var key,
            str="abcdefghijklmnopqrstuvwxyz",
            obj = {};

            for (var i = 0; i < array.length; i++) {
                if (i < str.length){
                    key = str.charAt(i);
                    obj[key]=array[i];
                }
                else if (i >= str.length) {
                    key = i-(str.length-1);
                    obj[key]=array[i];
                }
            }

            return obj;

        }
        console.log("----------------Task 4----------------");
        console.log(convertArrayToObj(numberArr));
        console.log("--------------------------------------");

    // -----------------------------------------------------
    
    // --------------------------Task 5---------------------
    // -----------------------------------------------------
        // filter array function
        var newData = [2, 2, 5, 6, 12, 22, 6, 32];
        var oldData = [12, 5, 7, 17, 22, 32];

        function filterNew(arr1, arr2) {
            for (var i = 0; i < arr1.length; i++) {
                for (var j = 0; j < arr2.length; j++) {
                    if (arr2.indexOf(arr1[i]) !== -1) {
                        arr1.splice(i, 1);
                    }
                }
            }
        }
        filterNew(newData, oldData);
        console.log("----------------Task 5----------------");
        console.log(newData);
        console.log("--------------------------------------");
    // -----------------------------------------------------
})();
