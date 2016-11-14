
(function() {

    //1.Создать пустой массив...
    var arr = [];

    //2.Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random()...
    for (var i = 0; i < 100; i++) {
        arr.push( Math.floor(Math.random() * 100+1));
    }
    console.log(arr);


    //3.Написать функцию поиска и вывода в консоль максимального или минимального элемента...
    var arrToFind = [3, 6, 0,-6, 12];
    var resultMin = findMinMax(arrToFind, 'min');
    var resultMax = findMinMax(arrToFind, 'max');

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


    
    console.log('Min elem = ' + resultMin);
    console.log('Max elem = ' + resultMax);

    //4.Написать функцию преобразования массива в объект...
    function convertArrayToObj(arr){
        var obj = {};
        var alphabet = ['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'];
        var m = 1;
        for(i = 0; i < alphabet.length; i++){
            obj[alphabet[i]] = arr[i];
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

    arr = convertArrayToObj(arr);
    console.log(arr);

    //5.Написать функцию фильтрации массива filterNew(arr1, arr2)...
    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];
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

    filterNew(newData, oldData);
    console.log(newData);

})();