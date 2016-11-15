"use strict"

//1)Create empty array

var arr = [];

//2) fill array randome numbers;

for (var i=1; i<=100; i++){
	arr.push(Math.round(Math.random() *100));
}

//3)Function "Find Min Max"

function findMinMax(array, element){
	if(element == 'min'){
		return Math.min.apply(null, array);
	}else if(element == 'max'){
		return Math.max.apply(null, array);
	}
}

//4) Converting array to obj

function convertArrayToObj (array) {

        var obj = {};
         var abcd = 97;
         for (var i = 0; i < array.length; ++i) {
 
             if (abcd <= 122) {
 
                 obj[String.fromCharCode(abcd)] = array[i];
                 ++abcd;
             }
             else {
                 obj[i - 25] = array[i];
             }
         }
 
         return obj;
     }

//5) Filter two array
var arr1=[1,1,2,3,4,4,1];

var arr2=[3, 4, 6, 8, 2, 43, 14, 7];
 
 function filterNew(arr1,arr2) {
	 for (var a=0; a < arr1.length; a++) {
		 for (var b=0; b < arr2.length; b++) {
			 if (arr1[a] == arr2[b]) {
				 arr1.splice(a, 1);
				 a--;
			 }
		 }
	 }
 }
 

console.log(arr);
console.log(findMinMax(arr,'min'));
console.log(findMinMax(arr,'max'));	
console.log(convertArrayToObj(arr));
console.log(filterNew(arr1, arr2));
console.log(arr1);
