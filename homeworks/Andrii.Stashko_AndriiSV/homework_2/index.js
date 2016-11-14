(function () {
    
    console.log ("1 & 2 Create emty array and fill it with 100 integers from 1 to 100 with Math.random()");

    var array = [];
    for (i = 0; i < 100; i++) {
        array.push(Math.trunc(Math.random()*100)+1);
    }

    console.log (array);


    console.log ("3. Find Max and Min in array");

    var findMinMax = function (array, string) {
        if (string == "max") {
            max = Math.max.apply(null, array);
            console.log(max);
        }   else {
            if (string == 'min') {
                min = Math.min.apply(null, array);
                console.log(min);
            }
        }
    };
    
    var resultMax = findMinMax(array, 'max');
    var resultMin = findMinMax(array, 'min');
    

    console.log ("4. Array to Object")

    function ArrToObj(arr) {
        var obj = {};
        var charCount = 26;
        var num = 1;
        for (var i = 0; i < arr.length; i++) {
            if (charCount > 0) {
                obj[String.fromCharCode(97 + i)] = arr[i];
            }   else {
                obj[num] = arr[i];
                num++;
            }
            charCount--;
        }
        return obj;
    }
    console.log(ArrToObj(array));


    console.log("5. FilterNew");

    function filterNew(firstArr, secondArr) {
        for (var i = 0; i < firstArr.length; i++) {
            secondArr.forEach(function(element){
                if (firstArr[i] == element){
                    firstArr.splice(i, 1);
                    i--;
                }
            });
        }
    }
 
    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];
 
    filterNew(newData, oldData);
 
    console.log(newData);

})();