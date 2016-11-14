(function (){
    //1.Создать пустой массив

    var arr = [];
 
    //2.Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random()
 
    function getNumber(min, max) {
        return Math.floor(Math.random()*(max - min) + min);
    }
 
    for (var i = 0; i < 100; i++) {
        arr.push(getNumber(1, 100));
    }
    console.log(arr);
 
    //3.Написать функцию поиска и вывода в консоль максимального или минимального элемента. Функция должна называться findMinMax , принимать в параметрах массив для поиска и строку, определяющую действие функции. Функция должна возвратить найденный элемент Пример использования функции
 
    function findMinMax(arr, str) {
        var compareNumbers = function(a, b) {
            return a - b;
        }
        arr = arr.sort(compareNumbers);
        if (str === 'min') {
            return arr[0];
        } else if (str === 'max') {
            return arr[arr.length - 1];
        }
    }
 
    var arrayToFind = [3, 6, 0, -6, 12];
    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');
 
    console.log(resultMax); // 12
    console.log(resultMin); // -6
 
    //4.Написать функцию преобразования массива в объект вида
 
    function convertArrToObj(array) {
        var obj = {};
        var index = 97;
        var value;
 
        for (var i = 0; i <array.length; i++) {
            if (i < 26) {
                value = String.fromCharCode(index);
                index++;
            } else if (i > 25) {
                value = index - 123;
                index++;
            }
            obj[value] = array[i];
        }
        return obj; 
    }
 
    console.log( convertArrToObj(arr) );
 
    //5.Написать функцию фильтрации массива filterNew(arr1, arr2). Функция должна принимать на вход два массива и удалять из первого массива элементы, которые есть и в первом и во втором массиве. Функция ничего не возвращает, а изменяет напрямую первый массив.
 
    function filterNew(arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            for (var n = 0; n < arr2.length; n++) {
                if (arr1[i] == arr2[n]) {
                    arr1.splice(i, 1);
                    i--; //fix
                }
            }
        }
    }
    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];
    filterNew(newData, oldData);
    console.log(newData); // in console : [2, 6];

    var arr1 = [2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 15 ] ; 
    var arr2 = [2, 3, 10]; 
    filterNew(arr1, arr2);
    console.log(arr1);
})(); 
