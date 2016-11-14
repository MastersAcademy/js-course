(function () {

//Создать пустой массив. Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random()
	var arr = [];
	for (var i = 0; i < 100; i++){
		arr.push(Math.floor((Math.random() * 100) + 1));
	}
	console.log(arr);


//Написать функцию поиска и вывода в консоль максимального или минимального элемента. 
 	function findMinMax(arr, str) {
 		var order = arr.sort(function(a, b){
 			return a - b;
 		});
 		if (str == 'min') {
 			return order[0];
 		}
 		else if (str == 'max') {
 			return order[order.length - 1];
 		}
 	}

 	var arrayToFind = [3, 6, 0, -6, 12];

	var resultMax = findMinMax(arrayToFind, 'max');
	var resultMin = findMinMax(arrayToFind, 'min');

    console.log(resultMax); // 12
    console.log(resultMin); // -6

//Написать функцию преобразования массива в объект
	function convertArrayToObj (array) {
    	var obj = {}, j = 1;
    	var field = 'abcdefghijklmnopqrstuvwxyz';
    	for(var i = 0; i < array.length; i++) {
    		if (i < 26) {
    			obj[field.charAt(i)] = array[i];
    		}
    		else if (i > 25) {
    			obj[j++] = array[i];
    		}
    	}
    	return obj;
	}

	var data = [3, 6, 0, -6, 12];
	console.log(convertArrayToObj(data));
	
//Написать функцию фильтрации массива filterNew(arr1, arr2)

    function filterNew(arr1, arr2) {
   	 	var index;
        for (var i = 0; i < arr2.length; i++) {
             index = arr1.indexOf(arr2[i]);
             while (index != -1) {
                 arr1.splice(index, 1);
                 index = arr1.indexOf(arr2[i]);
             }
         }
 	}

    var arr1 = [2, 2, 3, 3, 15 ] ; 
	var arr2 = [2, 3, 10]; 
	filterNew(arr1, arr2);
	console.log(arr1);


})();