(function(){
	
//1. Создать пустой массив.

	arr = [];
	
//2. Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random().
	
	for(var i = 0; i < 100; i++){
		
		arr[i] = Math.trunc((Math.random() +  0.01) * 100);		
		
	}
	
	console.log(arr);
	
/*3. Написать функцию поиска и вывода в консоль максимального или минимального элемента.
Функция должна называться findMinMax , принимать в параметрах массив для поиска и строку,
определяющую действие функции. Функция должна возвратить найденный элемент.*/
	
	function findMinMax(arrayToFind, minMax){
		
		var m = arrayToFind[0];
		
		if(minMax == 'max'){
			
			for(i = 0; i < arrayToFind.length; i++){
				
				if(m < arrayToFind[i]){
					
					m = arrayToFind[i];
					
				}
			}
			
		}
		
		else if(minMax == 'min'){
				
			for(i = 0; i < arrayToFind.length; i++){
				
				if(m > arrayToFind[i]){
					
					m = arrayToFind[i];
					
				}
			}
			
		}
		
		return m;
	}
	
	var resultMax = findMinMax(arr, 'max');
	var resultMin = findMinMax(arr, 'min');
	
	console.log('Max = ' + resultMax);
	console.log('Min = ' + resultMin);
	
/*4. Написать функцию преобразования массива в объект где именами полей объекта должны быть
буквы латинского алфавита. Когда(если) алфавит закончится, ключи должны начать формироваться
в виде цифр, начиная с 1.*/

	function convertArrayToObj(arrToObj){
		
		var names = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var obj = {};
		var j = 1;
		
		for(i = 0; i < names.length; i++){
			
			obj[names[i]] = arrToObj[i];
			
		}
		
		if(i != arrToObj.length){
			
			while(i < arrToObj.length){
				
				obj[j] = arrToObj[i];
				i++;
				j++;
				
			}
			
		}
		
		return obj;
		
	}
	
	arr = convertArrayToObj(arr);
	console.log(arr);
	
/*5. Написать функцию фильтрации массива filterNew(arr1, arr2). Функция должна принимать на
вход два массива и удалять из первого массива элементы, которые есть и в первом и во втором
массиве. Функция ничего не возвращает, а изменяет напрямую первый массив.*/

	var newData = [2, 12, 22, 6, 32];
	var oldData = [12, 5, 7, 17, 22, 32];
	
	function filterNew(arr1, arr2){
		
		for(i = 0; i < arr1.length; i++)			
			for(j = 0; j < arr2.length; j++){
				
				if(arr1[i] == arr2[j]){
					
					arr1.splice(i, 1);
					
				}
				
			}
		
	}
	
	filterNew(newData, oldData);
	console.log(newData);
	
})();