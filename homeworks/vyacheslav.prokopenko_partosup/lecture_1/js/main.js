(function(){
	
	var arrayToFind = []; //new empty array
	var resultMax,resultMin,newObj; //vars

	
	
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
			return 'max value: '+paramNum+' in keys ['+key+']';
			
		}else if(param == 'min'){				//to min value
			arr.forEach(function(item, i) {
		  		if(paramNum > item || i == 0){
					paramNum = item;
					key.push(i);
				}
			});
			return 'min value: '+paramNum+' in keys ['+key+']';
			
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
		'use strict';
	    var obj = {},alphaNum = [], keysLikeNumbers = 1;
		
		//generate alphabetic
		function* generateAlphaNum() {
	      // yield* generateSequence(97, 122);
	      for (let i = 97; i <= 122; i++) yield i;
	    }
	    for(let code of generateAlphaNum()) {
	      alphaNum.push(String.fromCharCode(code));
	    }
		
		var lenghtOfalphaNum = alphaNum.length;
		
		//convert array to Object
		arr.forEach(function(item, i) {
			if(lenghtOfalphaNum-1 > i || lenghtOfalphaNum-1 == i){
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
		var lengthNewData = arr1.length;
		var oldData = arr2.length;
		
		for( var i = 0; i < lengthNewData; i++){
			for(var j = 0; j < oldData; j++){
				if(arr1[i] == arr2[j]){
					arr1.splice(i,1);
				}
			}
		}
		
	}
	
	
	
	var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];
    filterNew(newData, oldData);
    console.log(newData); // in console : [2, 6];
	

})();