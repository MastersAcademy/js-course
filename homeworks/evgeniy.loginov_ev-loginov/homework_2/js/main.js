(function () {

    console.log('**********1. Empty array**********');

    var arr = [];

	console.log('**********2. Random from 1 to 100**********');

    for (var i = 0; i < 100; i++) {
	
        arr[i] = (Math.floor(Math.random() * (100)) + 1);

    }

    console.log(arr);

    console.log('**********3. Search Min & Max**********');

    function findMinMax(arr, str){
		
         if  (str == 'max'){

            return Math.max.apply(Math, arr);

        }

        if (str == 'min'){
	
            return Math.min.apply (Math, arr);

        }

    }

    var resultMax = findMinMax(arr, 'max');
	
    var resultMin = findMinMax(arr, 'min');

    console.log('Max:' + resultMax);

    console.log('Min:' + resultMin);

    console.log('**********4. Array to Object**********');
	
    function convertArrayToObj(array) {

        var obj = {};

        var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

        var j = 1;
		
        for (var i = 0; i < array.length; i++) {
	
            if (i < alphabet.length) {
			
                obj[alphabet[i]] = array[i];

            } else {

                obj[j++] = array[i];

            }
 
        }

        return obj;

    }

    console.log(convertArrayToObj(arr));

    console.log('**********5. Filter array**********');

    function filterNew(arr1, arr2) {
	
        for (var i = 0; i < arr1.length; i++) {

            for (var j = 0; j < arr2.length; j++) {
	
                if (arr1[i] == arr2[j]) {
	
                    arr1.splice(i--, 1);
					

                }

            }

        }

    }

    var newData = [2, 2, 3, 3, 15, 55, 10, 10, 10, 8]; 

    var oldData = [2, 3, 10, 6, 8]; 

    filterNew(newData, oldData);
	
    console.log(newData);

})();