(function(){
	
	var arrayToFind = []; //new empty array
	
	var resultMax,
	
		resultMin,
		
		newObj; //vars
	
	// push to array 100 items
	for(var i = 0; i < 100; i++){ 
	
		arrayToFind.push(Math.floor(Math.random() * (100 - 1)) + 1);
		
	}
	
	console.log(arrayToFind);
	
	//init max and min value in array
	function findMinMax(arr, param){   
	        
		var paramNum;
		
		var key = [];
		
		if(param == 'max'){						//to max value
		
			arr.forEach(function(item, i) {
				
		  		if(paramNum < item || i == 0){
		  			
					paramNum = item;
					
					key.push(i);
					
				}
				
			});
			
			return paramNum;
			
		}else if(param == 'min'){				//to min value
		
			arr.forEach(function(item, i) {
				
		  		if(paramNum > item || i == 0){
		  			
					paramNum = item;
					
					key.push(i);
					
				}
				
			});
			
			return paramNum;
			
		}else{									//undefined value
		
			console.log('undefined parametr in function findMinMax()');
			
		}
		
    }    
    
	resultMax = findMinMax(arrayToFind, 'max');
	
   	resultMin = findMinMax(arrayToFind, 'min');

	console.log(resultMax); 
	
    console.log(resultMin); 
	
	//array to Object fun
	function convertArrayToObj (arr) {

	    var obj = {},
	    	keysLikeNumbers = 1;
		
		var alphaNum = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
				
		//convert array to Object
		arr.forEach(function(item, i) {
			
			if(alphaNum.length - 1 > i || alphaNum.length - 1 == i){
				
				obj[alphaNum[i]]= item; // keys a,b,c.....
				
			}else{
				
				obj[keysLikeNumbers]= item; // keys 1,2,3....
				
				keysLikeNumbers++;
				
			}
	
		});
		
	    return obj;

	}
	
	newObj = convertArrayToObj(arrayToFind);
	
	console.log(newObj);
	
	//filter 2 arrays
	function filterNew(arr1, arr2){	
	
	    for (var i = 0; i < arr1.length; i++){
	    	
	        for (var j = 0; j < arr2.length; j++){
	        	
	            if (arr1[i] == arr2[j]){
	            	
	                arr1.splice(i, 1);
	                
	                i--;
	                
	            }
	            
	        }
	        
	    }
	    
	}
	
	var newData = [2, 12, 22, 6, 32];
	
    var oldData = [12, 5, 7, 17, 22, 32];
    
    filterNew(newData, oldData);
    
    console.log(newData); // in console : [2, 6];
	
})();