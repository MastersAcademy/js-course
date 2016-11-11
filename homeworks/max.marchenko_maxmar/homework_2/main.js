'use strict';

// part 1
var count = 100,
	x = []; 


// part 2
function setArr(array) {
	for (let i = 0; i < count; i++)
		array.push(Math.floor(Math.random() * 100 + 1));
}

setArr(x); 
console.log(x);


// part 3
function findMinMax(array, behavior) {
	if (behavior == 'min' || behavior == 'max')
		return Math[behavior](...array);

	return null;
}

console.log(findMinMax(x, 'min'));
console.log(findMinMax(x, 'max'));


// part 4
function convertArrayToObj(array) {
	console.log(array);

	if (array.length) {
		let res = {}
			i = 0,
			an = 'a'.charCodeAt(0), 
			zn = 'z'.charCodeAt(0);

		for (; an <= zn && array.length; an++)
			res[String.fromCharCode(an)] = array.shift();

		for (;array.length; ++i)
			res[i] = array.shift();

		return res;
	}

	return {};
}

var xo = convertArrayToObj();
console.log(typeof xo, xo);


// part 5
Array.prototype.filterTheSame = function(array) {
	for (let i in array) {
		let idx = this.indexOf(array[i]);

		if (idx !== -1)
			this.splice(idx, 1);
	}
}

var a = [2, 12, 22, 6, 32],
	b = [12, 5, 7, 17, 22, 32];

a.filterTheSame(b);
console.log(a);