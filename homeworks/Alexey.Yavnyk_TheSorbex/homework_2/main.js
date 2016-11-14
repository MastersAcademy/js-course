(function(){
   //1

   var arr = new Array();

   //2

   for (var i = 0; i < 100; i++) {
   	arr[i] = Math.floor(Math.random()*100);
   }
   //3

   var arrayToFind = [3, 6, 0, -6, 12];

   function findMinMax(array, value){
      var min = array[0], max = array[0];
      if (value == 'max') {
      	for (var i = 0; i < array.length; i++) {
      		if (max < array[i]) {
      			max = array[i];
      		}
      	}
      	return max;
      } else if (value == 'min') {
      	for (var i = 0; i < array.length; i++) {
      		if (min > array[i]) {
      			min = array[i];
      		}
      	}
      	return min;
      	}
   }

   var resultMax = findMinMax(arrayToFind, 'max');
   var resultMin = findMinMax(arrayToFind, 'min');

   console.log(resultMax); // 12
   console.log(resultMin); // -6

   //4

   function convertArrayToObject(array){
   	var obj = {};
   	var startStr = 97, endStr = 122;
   	var k = 0;
   	var keyNumb = 1;
   	while(k < array.length){
   		if (startStr <= endStr) {
   		key = String.fromCharCode(startStr);
   		obj[key] = array[k];
   		startStr++;
   	   } else {
   		obj[keyNumb] = array[k];
   		keyNumb++;
   	}
   	k++;
   }
   return obj;
   }

   console.log(convertArrayToObject(arr));

   //5

   var newData = [2, 12, 22, 6, 32];
   var oldData = [12, 5, 7, 17, 22, 32];
   function filterNew(array1, array2){
      for (var i = 0; i < array2.length; i++) {
         for (var j = 0; j < array1.length; j++) {
         	if (array2[i] == array1[j]) {
         		array1.splice(j,1);
         		j--;
         	}
         }
      }
   }
   filterNew(newData, oldData);

   console.log(newData); // in console : [2, 6];

})()