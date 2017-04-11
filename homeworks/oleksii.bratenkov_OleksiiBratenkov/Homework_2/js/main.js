//Создать пустой массив. Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random()
(function () {
var arr1 = [];
for (var i = 0; i<100; i++) {
	arr1.push((Math.floor(Math.random() * 100)+1))
};
console.log(arr1)

//Написать функцию поиска и вывода в консоль максимального или минимального элемента. Функция должна называться findMinMax , принимать в параметрах массив для поиска и строку, определяющую действие функции. 
function findMinMax (array, string){
		var needtofind = array.sort(function(a,b){
		    return a-b;
});
		if (string == 'min') {
			return needtofind[0];
	}
		else if (string == 'max') {
			return needtofind [needtofind.length - 1];

	}
}
var arrayToFind = [3, 6, 0, -6, 12];
   var resultMax = findMinMax(arrayToFind, 'max');
   var resultMin = findMinMax(arrayToFind, 'min');
   console.log(resultMax); // 12
   console.log(resultMin); // -6

 //Написать функцию преобразования массива в объект
function convertArrayToObj (arr) {
    var obj = {};
    var latinletters = ['abcdefghijklmnopqrstuvwxyz'];
    var a = 1;
    for (i = 0; i < latinletters; i++){
    	 obj[latinletters[i]] = array[i]
    }
    if (i != array.length){
    	while (a < array.length){
    		i++;
    		a++;
    		obj [a] = arr[i];
    	}
    }
    return obj
}
array = convertArrayToObj (array);
console.log (array)

//Написать функцию фильтрации массива filterNew(arr1, arr2).
function filterNew(arr1, arr2) {
	var main;
	for (var i = 0; i < arr2.length; i++){
		main = arr1.indexOf(arr2[i]);
		while (main != -1){
			arr1.splice(main,1)
			main = arr1.indexOf(arr2[i]);
		}
	}
}
 var arr1 = [2, 12, 22, 6, 32];
 var arr2 = [12, 5, 7, 17, 22, 32];
 filterNew(arr1, arr2);
 console.log(arr1)
 })();