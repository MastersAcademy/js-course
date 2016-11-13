(function () {

function findMinMax (array, generateValue) {
	
	var emptyArray = array[0];

	if (generateValue == 'min')
		
		for (var i = 1; i < array.length; i++)
			
			if (array[i] < emptyArray)
				
				 emptyArray = array[i];
	
	if (generateValue == 'max')
		
		for (var i = 1; i < array.length; i++)
			
			if (array[i] > emptyArray)
				
				emptyArray = array[i];
	
	return emptyArray;
}

function printArray (array) {
	
	console.log(array);
}

function generateArray (newArray) {
	
	var gentratedArray = [];
	
	for (var i = 0; i < newArray; i++)		
		
		gentratedArray[i] = Math.floor(Math.random()*100);	
	
	return gentratedArray;
}

function convertArrayToObj (array){
	
	var Object = {};
	
	for (var i = 0; i < array.length; i++)
	
		if (i < 26)
			
			Object[String.fromCharCode(97+i)] = array[i];
		
		else
		
			Object[i-25] = array[i];
	
	return Object;
}

function filterNew (firstArray, secondArray){

	for (var i = 0; i < secondArray.length; i++)
	{

		index = firstArray.indexOf(secondArray[i]);
		
		while (index != -1)
		{

			firstArray.splice(index, 1);

			index = firstArray.indexOf(secondArray[i]);
		}
			
	}
}
//5-та задача працює правильно просто діапазон дуже великий 
//та цисла генеруються рандомно, тому здається, що неправильно працює.


	var outputArray = generateArray (100);
	
	console.log(outputArray);

	var resultMax = findMinMax (outputArray,'max');
	
	var resultMin = findMinMax (outputArray,'min');

		console.log(resultMax);
	
		console.log(resultMin);

	var Obj = convertArrayToObj (outputArray);
	
		console.log(Obj);

	var firstArray = generateArray(7);

	var secondArray = generateArray(5);

		console.log(firstArray);

		console.log(secondArray);

	filterNew(firstArray, secondArray);

		console.log(firstArray);	

})();