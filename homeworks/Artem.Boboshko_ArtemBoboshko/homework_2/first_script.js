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

        var abcd = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

        var a = 1;
		
        for (var i = 0; i < arr.length; i++) {
	
            if (i < abcd.length) {
			
                obj[abcd[i]] = arr[i];

            } else {

                obj[a++] = arr[i];

            }
 
        }
        return obj;
}

//5) Filter two array
var arr1=[2, 5, 8, 1, 14, 22, 43];

var arr2=[3, 4, 6, 8, 2, 43, 14, 7];
 
 function filterNew(arr1,arr2) {
	 for (var a=0; a < arr1.length; a++) {
		 for (var b=0; b < arr2.length; b++) {
			 if (arr1[a] == arr2[b]) {
				 arr1.splice(a, 1);
				 i--;
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
