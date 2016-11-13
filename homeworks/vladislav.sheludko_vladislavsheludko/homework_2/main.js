/**
 * Created by Vlad-PC on 12.11.2016.
 */
(function() {
    //1.Создать пустой массив
    //2.Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random()
    var array = [];
    for (var i = 0; i <= 100; i++) {
        array[i] = Math.trunc((Math.random() + 0.01) * 100);
    }
    console.log(array);

    /*
    3.Написать функцию поиска и вывода в консоль максимального или минимального элемента.
     Функция должна называться findMinMax , принимать в параметрах массив для
     поиска и строку, определяющую действие функции. Функция должна возвратить найденный элемент
     */
    function findMinMax(arrToFind, maxMin) {
        var n = arrToFind[0];
        if (maxMin == 'min') {
            for (i = 0; i < arrToFind.length; i++) {
                if (n > arrToFind[i]) {
                    n = arrToFind[i];
                }
            }
        }

        else if (maxMin == 'max') {
            for (i = 0; i < arrToFind.length; i++) {
                if (n < arrToFind[i]) {
                    n = arrToFind[i];
                }
            }
        }

        return n;
    }

    var resultMin = findMinMax(array, 'min');
    var resultMax = findMinMax(array, 'max');

    console.log('Min elem = ' + resultMin);
    console.log('Max elem = ' + resultMax);

    /*
     4.Написать функцию преобразования массива в объект где именами полей
     объекта должны быть буквы латинского алфавита. Когда(если) алфавит закончится,
     ключи должны начать формироваться в виде цифр, начиная с 1.
    */

    function convertArrToObj(arr){
        var obj = {};
        var letters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'];
        var m = 1;
        for(i = 0; i < letters.length; i++){
            obj[letters[i]] = arr[i];
        }
        if (i != arr.length){
            while(i < arr.length){
                obj[m] = arr[i];
                i++;
                m++;
            }
        }
       return obj;
    }

    array = convertArrToObj(array);
    console.log(array);

    /*
    5.Написать функцию фильтрации массива filterNew(arr1, arr2). Функция должна
    принимать на вход два массива и удалять из первого массива элементы,
    которые есть и в первом и во втором массиве. Функция ничего не возвращает,
    а изменяет напрямую первый массив.
    */
    function filterNew(arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            for (var n = 0; n < arr2.length; n++) {
                if (arr1[i] == arr2[n]) {
                    arr1.splice(i, 1);
                    i--;
                }
            }
        }
    }
    var newData = [2, 2, 3, 3, 15];
    var oldData = [2, 3, 10];
    filterNew(newData, oldData);
    console.log(newData);

})();
