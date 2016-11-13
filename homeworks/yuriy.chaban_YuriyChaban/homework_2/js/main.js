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
        function randomNumberArray(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            
            while (0 !== currentIndex) {
                
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            };

            return array;

        };

        // Pushing to numberArr items from 0 to 100
        for (var i = 0; i < 100; i++) {
            numberArr.push(i);
            randomNumberArray(numberArr);
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

            var zero = 0;
            var maxValue = Math.max.apply(zero, arrayToFind);
            var minValue = Math.min.apply(zero, arrayToFind);

            if (randomNumber == "maxValue") {
                return maxValue;
            }
            else if (randomNumber == "minValue") {
                return minValue;
            }
            else {
                console.log("Can`t determine the value!")
            };
        };

        (function () {
            var resultMax = findMinMax(arrayToFind, 'maxValue');
            var resultMin = findMinMax(arrayToFind, 'minValue');
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
            var keyForLetters,
            strigLettears="abcdefghijklmnopqrstuvwxyz",
            obj = {};

            for (var i = 1; i <= array.length; i++){
                if (i <= 26) {
                    keyForLetters = strigLettears.charAt(i-1);
                    obj[keyForLetters]=array[i];
                }else if (i > 26) {
                    keyForLetters = i-26;
                    obj[" "+keyForLetters]=array[i];
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
        var newData = [2, 12, 22, 6, 32];
        var oldData = [12, 5, 7, 17, 22, 32];
         function filterNew(arr1, arr2) {
             for (var i = 0; i < arr1.length; i++) {
                 for (var j = 0; j < arr2.length; j++) {
                     if (arr1[i] == arr2[j]) {
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