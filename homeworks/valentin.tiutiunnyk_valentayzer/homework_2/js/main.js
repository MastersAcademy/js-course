//first task: empty array
(function () {
	var arrEmpty = []; 
	console.log(arrEmpty);
	};
	
//second task: array from 1 to 100 with method Math.random()
(function () {
	var array = [];
	for (var i = 0; i < 100; i++)
		array[i] = Math.floor(Math.random()*100+1) 
	console.log(array);
	};

//third task: findMinMax
var arrayToFind = [5, 22, 2, 7, 17, -8];
var resultMin = findMinMax(arrayToFind, 'min');
var resultMax = findMinMax(arrayToFind, 'max');
function findMinMax(arrayToFind, minMax) {
	var n = arrayToFind[0];
	if (minMax == 'min')
		for (i = 0; i < arrayToFind.length; i++) {
			if (n > arrayToFind[i]) {
			n = arrayToFind[i];
			}
		}
		else if (minMax == 'max') {
			for (i = 0; i < arrayToFind.length; i++) {
				if (n < arrayToFind[i]) {
					n = arrayToFind[i];
				}
			}
		}
	return n;
}
console.log('Max=' + resultMax );
console.log('Min =' + resultMin);
   	
 //fourth task: array to object
function ArrayToobject(arrToobject) {
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var object = {};
	var j = 1;
 
	for(i = 0; i < alphabet.length; i++) {
		object[alphabet[i]] = arrToobject;
		}
 
	if(i != arrToobject.length) {
		while(i < arrToobject.length) {
			object[j] = arrToobject;
			i++;
			j++;
		}
	}

	return object;
}

AlphArr = ArrayToobject(AlphArr);
console.log(AlphArr);

//fifth task: filter arrays
var first = [45, 19, 8, 12, 16, 32];
var second = [12, 32, 19, 45];
function filter(array_1, array_2) {
	for (var i = 0; i < array_1.length; i++) {
		for (var n = 0; n < array_2.length; n++) {
			if (array_1[i] == array_2[n]) {
				array_1.splice(i, 1);
				--i;
			}
		}
	}
}
filter(first, second);
console.log(first);
})();
 	
