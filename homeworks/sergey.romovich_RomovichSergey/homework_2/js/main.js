(function () {
    
    console.log('My second homework');
    console.log('author : Sergey Romovich');
    console.log('Hello world!');
    
    // создать пустой массив.
    var firstArr = [];
    console.log(firstArr);
    
    // добавить в пустой массив 100 целых чисел от 1 до 100 с помощью метода Math.random()
    for (var x = 0; x < 100; x++) {
        firstArr[x] = Math.floor(Math.random()*100);
    }
    console.log(firstArr);
    
    /* написать функцию поиска и вывода в консоль max&min эдемента. Функция должна называться findMinMax, 
    принимать в параметрах массив для поиска и строку, определяющую действие функции. 
    Функция должна возвратить найденный элемент. */
    var secondArr = [1, 2, 3, 0, -1, -2, -3];
    function findMinMax(secondArr, val) {
        if (val == 'min'){
            return Math.min.apply(null, secondArr);
        }
        else if (val == 'max'){
            return Math.max.apply(null, secondArr);
        }
    }
    var resultMax = findMinMax(secondArr, 'max');
    var resultMin = findMinMax(secondArr, 'min');
    console.log('max =', resultMax);    
    console.log('min =', resultMin);
    
    /* написать функцию преобразования массива в объект где именами полей объекта 
    должны быть буквы латинского алфавита. Когда(если) алфавит закончится, ключи должны начать формироваться в виде цифр, 
    начиная с 1. */
    function convertArrayToObj(firstArr){
        var alfb = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var obj = {};
        var j = 1;
        for(var i = 0; i < firstArr.length; i++){
            if (i <= alfb.length) {
            obj[alfb[i]] = firstArr[i];
            } else {
                obj [j] = firstArr[i];
                j++;
            }
        }
        return obj;
    }
    convertArrayToObj(firstArr);
    console.log(convertArrayToObj(firstArr));
    
    /* написать функцию фильтрации массива filterNew(arr1, arr2). 
    Функция должна принимать на вход два массива и удалять из первого массива элементы, 
    которые есть и в первом и во втором массиве. Функция ничего не возвращает, а изменяет напрямую первый массив. */
    var newData = [1, 1, 2, 3, 4, 4, 1];
    var oldData = [1, 4, 5, 7, 17, 22, 32];
    function filterNew(arr1, arr2){
        for(var x = 0; x < arr1.length; x++){
            for(var y = 0; y < arr2.length; y++){
                if(arr1[x] == arr2[y]){
                    arr1.splice(x, 1);
                    x--;
                }
            }
        }
    }
    filterNew(newData, oldData);
    console.log(newData);
    
})();