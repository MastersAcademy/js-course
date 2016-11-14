/**
 * Created by Marf on 13.11.2016.
 */

(function () {

    // 1. Создать пустой массив

    var array = [];

    // 2. Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random

    for (var i = 0; i < 100; i++) {
        array.push(getRandomInt(1, 100));
        }
    function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
    console.log("***2***")
    console.log(array); //проверка задания

    // 3.Написать функцию поиска и вывода в консоль максимального или минимального элемента.

    function findMinMax(array, get) {
        if (get == 'max') {
            return Math.max.apply(null, array);
        }
        if (get == 'min') {
            return Math.min.apply(null, array);
        }
    }
    console.log("***3***")
    console.log(findMinMax(array, 'min'));
    console.log(findMinMax(array, 'max'));

    // 4.Написать функцию преобразования массива в объект

    function convertArrayToObj(array) {
        var x,
            letters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
            obj = {};

        for (var i = 1; i <= array.length; i++){
            if (i <= 52) {
                x = letters.charAt(i-1);
                obj[x]=array[i];
            }else if (i > 52) {
                x = i-52;
                obj[" "+x]=array[i];
            }
        }
        return obj;
    }
    console.log("***4***")
    console.log(convertArrayToObj(array)); //проверка задания

    // 5.Написать функцию фильтрации массива

    function filterNew(arr1, arr2) {
        for (var i=0; i < arr1.length; i++) {
            for (var j=0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    arr1.splice(i, 1);
                    i = -1;
                }
            }
        }
    }
    var arr1 = ['a', "Orange", "Apple", "Mango", 'check'];
    var arr2 = [2, 4, 10, 'b', 'a', "Orange", "Apple", "Mango"];
    filterNew(arr1, arr2);
    console.log("***5***")
    console.log(arr1); //проверка задания

})();