(function (){

    //1. Создать пустой массив

    var array = [];

    //testing task #1
    console.log(array);
    

    //2. Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random() 

    for(var i = 0; i < 100; i++){
        array[i] = parseInt(Math.random() * 99 + 1);
    }

    //testing task #2
    console.log(array);


    /*
     3. Написать функцию поиска и вывода в консоль максимального или
     минимального элемента. Функция должна называться findMinMax , 
     принимать в параметрах массив для поиска и строку, определяющую 
     действие функции. Функция должна возвратить найденный элемент.
    */

    function findMinMax(array, string){
        var min = array[0];
        var max = array[0];
        for(var i = 0; i < 100; i++){
            if(array[i] < min){
                min = array[i];
            }
            if(array[i] > max){
                max = array[i];
            }
        }
        if(string.localeCompare('max') == 0){
            return max;
        } else if (string.localeCompare('min') == 0){
            return min;
        } else {
            console.log('Wrong input data.');
        }
    }
    
    //testing task #3
    var arrayToFind = [3, 6, 0, -6, 12];
    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');
    console.log(resultMax); // 12
    console.log(resultMin); // -6

    var resultArrayMin = findMinMax(array, 'min');
    var resultArrayMax = findMinMax(array, 'max');
    console.log(resultArrayMin);
    console.log(resultArrayMax);


    //4. Написать функцию преобразования массива в объект

    function convertArrayToObj(array){
        var obj = {};

        var i = 97;        // ASCII code for 'a'
        var counter = 0;   // counter for array

        //alphabet
        while(i < 123 && counter < array.length){
            obj[String.fromCharCode(i)] = array[counter];
            i++;
            counter++;
        }

        //numbers
        for(i = 1; counter < array.length; i++, counter++) {
            obj[i.toString()] = array[counter];
        }

        return obj;
    }

    //testing task #4
    obj = convertArrayToObj(array);
    console.log(obj);


    /*5. Написать функцию фильтрации массива filterNew(arr1, arr2). 
    Функция должна принимать на вход два массива и удалять из первого 
    массива элементы, которые есть и в первом и во втором массиве. Функция 
    ничего не возвращает, а изменяет напрямую первый массив.
    */

    function filterNew(arr1, arr2){
        for(var i = 0; i < arr2.length; i++){
            while(elementIncludes(arr1, arr2[i])){
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
    }

    function elementIncludes(array, element){
        for(var i = 0; i < array.length; i++){
            if(array[i] == element){
                return true;
            }
        }
        return false;
    }

    //testing task #5
    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];
    filterNew(newData, oldData);
    console.log(newData); // in console : [2, 6];

    var arr1 = [1, 3, 3, 4, 5];
    var arr2 = [0, 3, 6, 7];
    filterNew(arr1, arr2);
    console.log(arr1);
})();
