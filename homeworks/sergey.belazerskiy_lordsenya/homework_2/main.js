(function() {
	var arr = [];
	var newArray = [];
	for (var i = 0; i < 100; i++) {
		arr[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
	}
	//console.log(arr);

	var arrayToFind = [3, 6, 0, -6, 12];

	var resultMax = findMinMax(arrayToFind, 'max'); // 12

	var resultMin = findMinMax(arrayToFind, 'min');  // -6

	function findMinMax(ourArray,minmax){
		if (Array.isArray(ourArray) == true) {
			var compare = ourArray[0];
				ourArray.forEach(function(element,ourNewArray) {
					if (minmax == "min") {
						if (element < compare) {
							compare = element;
						}
					}else{
						if (minmax == "max") {
							if (element > compare) {
								compare = element;
							}
						}else{ 
							console.log("incorrect second parametr");
						}
					}
				});
			console.log(compare);
		}else{
			console.log("incorrect first parametr");
		}
	}  

	obj = createArrey();

	function createArrey() {
		var array = [];
		for (var i = 0; i <=100;i++) {
			array[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
		}
		convertArrayToObj(array);
	}

	function convertArrayToObj(array) {
		var obj = {};
		var numb;
		for ( var i = 0; i < array.length; i++) {
			if (i <= 25){
				obj[String.fromCharCode(i + 97)] = array[i];
			}else{
				var numb = i - 25;
				obj[numb.toString()] = array[i];
			}
		}
		//console.log(obj);
		return obj;
	}

	var newData = [2, 12, 22, 6, 32];

	var oldData = [12, 5, 7, 17, 22, 32];

	filterNew(newData, oldData);

	function filterNew(newData,oldData) {
		for (var i = 0; i < oldData.length; i++){
			for (var j = newData.length - 1; j !== 0 ; j--) {
				if (newData[j] == oldData[i]){
					newData.splice(j,1);
				}
			}
		}
	}

	console.log(newData); // in console : [2, 6];
})();