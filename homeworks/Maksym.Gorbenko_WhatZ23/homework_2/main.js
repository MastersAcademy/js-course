(function () {

// Task 1

    var array1 = [];

// Task 2

    for(var i = 0; i < 100; i++) {
        
        n = 0;
        
        n = Math.floor(Math.random() * 100) + 1;
        
        array1.push(n);

    }
    
    console.log(array1);

    console.log('*******************************************');

// Task 3

    var arrayToFind = [3, 6, 0, -6, 12];

    var resultMax = findMinMax(arrayToFind, 'max');

    var resultMin = findMinMax(arrayToFind, 'min');
    
    function findMinMax(array, element) {
        
        var max = array.sort(function(a, b) {
        
          return a > b ? 1 : -1;
        
        });

        if (element == 'min') {
        
            return max[0];
        
        }

        if (element == 'max') {
    		
            return max[array.length - 1];
        
        }

    }

    console.log(resultMax);

    console.log(resultMin);
    
    console.log('*******************************************');

// Task 4

    function convertArrayToObj (array) {

        var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        
        var obj = {};
        
        var n = 1;

         for (var i = 0; i < array.length; i++) {

            if (i+1 <= alphabet.length) {
                
                obj[alphabet[i]] = array[i];
            
            }

            else obj[n++] = array[i];
                        
        }

        return obj;
    }

    console.log(convertArrayToObj(array1));

    console.log('*******************************************');


// Task 5

      var newData = [2, 12, 22, 6, 32];
      
      var oldData = [12, 5, 7, 17, 22, 32];

      function filterNew(arr1, arr2) {

          for (i=0; i<arr1.length; i++) {

              for (j=0; j<arr2.length; j++) {

                  if (arr1[i] == arr2[j]) {
                    
                      arr1.splice(i,1);

                  }

              }

          }

      }

      filterNew(newData, oldData);

      console.log(newData);

      console.log('*****************THE END*******************');

})();