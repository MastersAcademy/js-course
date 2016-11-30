(function () {

// 1 hometask
	console.log('------------------- 1 -------------------');
	var emptyArray = [];
	console.log(emptyArray);
// 2 hometask
	function getRandomArbitrary(min, max) {
  		return Math.random() * (max - min) + min;
	}

	for (var i = 1; i <= 100; i++) {
		emptyArray.push(Math.floor(getRandomArbitrary(1, 100)));	
	}
	console.log('------------------- 2 -------------------');
	console.log(emptyArray.length);
	console.log(emptyArray);

// 3 hometask
	function findMinMax(arrayToFind, str) {
		str = str.toLowerCase();
		if (str=='min'){
			var result=9999; // this not good, but suitable for this exercise 
			for (var i = 0; i < arrayToFind.length; i++) {
				if (result > arrayToFind[i]){
					result=arrayToFind[i];
				}
			}
		}
		if (str=='max'){
			var result=-9999; // this not good, but suitable for this exercise 
			for (var i = 0; i < arrayToFind.length; i++) {
				if (result < arrayToFind[i]){
					result=arrayToFind[i];
				}
			}
		}
		return result;
	}
	console.log('------------------- 3 -------------------');
	console.log(findMinMax(emptyArray, 'min'));
	console.log(findMinMax(emptyArray, 'Max'));


//4 hometask
	var testArray = [];
	for (var i = 1; i <= 100; i++) {
		testArray.push(i);	
	}
	function convertArrayToObj(array) {
		var obj = {};
		for (var i=0; i<array.length; i++) 
			if (i<=25){
				obj[String.fromCharCode(i+97)] = array[i];// 97- 122
			}
			else {
				obj[i-25] = array[i];
			}
		return obj;
	}
	console.log('------------------- 4 -------------------');
	console.log(convertArrayToObj(testArray));

//5 hometask
	function filterNew(arr1, arr2){
		for (var i=0; i < arr1.length; i++){
			for (var j = 0; j < arr2.length; j++) {
				if (arr1[i]==arr2[j]){  
					arr1.splice(i, 1);
					i--;
				}
			}
		}
	}

	//var newData = [2,12,22,6,32];
	//var oldData = [12,5,7,17,22,32];
	var newData = [2, 2, 3, 3, 15 ] ; 
	var oldData = [2, 3, 10]; 
	filterNew(newData, oldData);
	console.log('------------------- 5 -------------------');
	console.log(newData);
	
}) ();