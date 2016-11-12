console.log("-------------------------------");

var arr = [];
for (var i = 0; i < 100; i++) {
	arr[i] = Math.floor(Math.random() * 100);
}
console.log(arr);

console.log("-------------------------------");

function findMinMax(arr, action) {
	var extremum = arr[0];
	if (action == 'max') {
		for (var i of arr) {
			if (i > extremum) {
				extremum = i;
			}	
		}
	}
	if (action == 'min') {
		for (var i of arr) {
			if (i < extremum) {
				extremum = i;
			}	
		}
	}
	return extremum;
}

var resultMax = findMinMax(arr, 'max');
var resultMin = findMinMax(arr, 'min');
console.log(resultMax);
console.log(resultMin);

console.log("-------------------------------");

function convertArrayToObj (arr) {
    var obj = {};
    var asciiA = "a".charCodeAt(0);
    var alphabetLength = 26
    for (var i = 0; i < alphabetLength; i++) {
    	var alphabetChar = String.fromCharCode(asciiA + i);
    	obj[alphabetChar] = arr[i];
    }
    for (var i = alphabetLength; i < 100; i++) {
    	var strIndex = (i - alphabetLength + 1).toString();
    	obj[strIndex] = arr[i];
    }
    return obj;
}
console.log(convertArrayToObj(arr));

console.log("-------------------------------");

function filterNew (arr1, arr2) {
	//var newDataSet = new Set(arr1);
	//var oldDataSet = new Set(arr2);
	//var a = newDataSet.delete(oldDataSet);
	//newData = Array.from(a);
	newData = arr1.filter(function(x) {
		return arr2.indexOf(x) < 0
	});
	console.log(newData);
}
var newData = [];
var oldData = [];
for (var i = 0; i < 10; i++) {
	newData[i] = Math.floor(Math.random() * 10);
	oldData[i] = Math.floor(Math.random() * 10);
}
console.log(newData);
console.log(oldData);
filterNew(newData, oldData);