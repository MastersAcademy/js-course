(function(){

	var arr = [];
	
	//
	
	for(var i = 0; i < 100; i++){
		
		arr[i] = Math.trunc(Math.random() * 100 + 1);		
		
	}
	
	console.log(arr);
	
	//
	
	function findMinMax(arrayToFind, minMax){
		
		var m = arrayToFind[0];
		
		if(minMax == 'max'){
			
			for(i = 0; i < arrayToFind.length; i++){
				
				if(m < arrayToFind[i]){
					
					m = arrayToFind[i];
					
				}
			}
			
		}
		
		if(minMax == 'min'){
				
			for(i = 0; i < arrayToFind.length; i++){
				
				if(m > arrayToFind[i]){
					
					m = arrayToFind[i];
					
				}
			}
			
		}
		
		return m;
	}
	
	var resultMax = findMinMax(arr, 'max');
	var resultMin = findMinMax(arr, 'min');
	
	console.log('Max = ' + resultMax);
	console.log('Min = ' + resultMin);
	
	//

	function convertArrayToObj(arrToObj){
		
		var names = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var obj = {};
		var j = 1;
		
		for(i = 0; i < names.length; i++){
			
			obj[names[i]] = arrToObj[i];
			
		}
		
		if(i != arrToObj.length){
			
			while(i < arrToObj.length){
				
				obj[j] = arrToObj[i];
				i++;
				j++;
				
			}
			
		}
		
		return obj;
		
	}
	
	arr = convertArrayToObj(arr);
	console.log(arr);
	
	//

	var newData = [2, 12, 22, 6, 32];
	var oldData = [12, 5, 7, 17, 22, 32];
	
	function filterNew(arr1, arr2){
		
		for(i = 0; i < arr1.length; i++)			
			for(j = 0; j < arr2.length; j++){
				
				if(arr1[i] == arr2[j]){
					
					arr1.splice(i, 1);
					i--;
					
				}
				
			}
		
	}
	
	filterNew(newData, oldData);
	console.log(newData);
	
})();