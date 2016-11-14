(function () {

	var arr1 = [];
	for(var i = 0; i < 100; i++){
		n = 0;
		n = Math.floor(Math.random() * 100) + 1;

            arr1.push(n);

    }
    
    console.log(arr1);
    
    console.log('***********task3**********************');
   
    var arrayToFind = [3, 6, 0, -6, 12];
    var resultMax = findMinMax(arr1, 'max');
    var resultMin = findMinMax(arr1, 'min');
    
    function findMinMax (array, element){
    	
        var max = array.sort(function(a, b){return a - b});

    	if (element == 'max') {
    		
    	   return max[arr1.length - 1];
    	}
    	if (element == 'min') {
    		return max[0];
    	}
    }
  


   console.log(resultMax);
   console.log(resultMin);
   
   console.log('**************task4*********************');

  function convertArrayToObj (array) {

     var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        var obj = {};
        var m = 1;

        for (var i = 0; i < arr1.length; i++) {

            if (i > abc.length) {
                obj[m++] = arr1[i];
            }

            else if (i <= abc.length) {
                obj[abc[i]] = arr1[i];
            }
        }

        return obj;
    }
    console.log(convertArrayToObj(arr1));
    
    console.log('************task5************************');
      
      var newData = [2, 12, 22, 6, 32];

      var oldData = [12, 5, 7, 17, 22, 32];
      var len1 = newData.length;

      function filterNew(newData, oldData){
      	for (i=0; i<len1; i++){
      		for (j=0; j<oldData.length; j++){
      			if (newData[i] == oldData[j])  {
      				newData.splice (i,1);
      				i--;
      				len1--;

      			};

      		}
      		
      	}

      }

      filterNew(newData, oldData);

      console.log(newData);

})();