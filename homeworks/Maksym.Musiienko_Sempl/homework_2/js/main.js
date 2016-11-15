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
    		
    	      return max[array.length - 1];
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

        for (var i = 0; i < array.length; i++) {

            if (i >= abc.length) {
                
                obj[m++] = array[i];
            }

            else {
                
                obj[abc[i]] = array[i];
            }
        }

        return obj;
    }
    console.log(convertArrayToObj(arr1));
    
    console.log('************task5************************');
      
    var newData = [2, 12, 22, 6, 32];

    var oldData = [12, 5, 7, 17, 22, 32];
     

    function filterNew(array1, array2 ){
        
        for (i=0; i<array1.length; i++){
      	    
            for (j=0; j<array2.length; j++){
      			    
                if (array1[i] == array2[j])  {
                    
                    array1.splice (i,1);
      				      i--;

      			    };

      		  }
      		
      	}

    }

    filterNew(newData, oldData);

    console.log(newData);

})();