(function () {
    // 1.Создать пустой массив
    var newArray = [];

    // 2. Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random()
    for(var i = 0;i<=99;i++){

        newArray[i] = Math.round(Math.random()*(100-1)+1);

    }

    console.log(newArray);
     // 3. Написать функцию поиска и вывода в консоль максимального или минимального элемента.
    function findMinMax(array, minMax) {

        function arraySort(a,b) {

            return a > b ? 1 : -1;

        }
        array.sort(arraySort);

        if(minMax == 'min'){

            return array[0];

        }
        if(minMax == 'max'){

            return array[array.length - 1];

        }
    }
    var arrayToFind = [3, 6, 0, -6, 12];

    var resultMax = findMinMax(arrayToFind, 'max');

    var resultMin = findMinMax(arrayToFind, 'min');

    console.log(resultMax);

    console.log(resultMin);

    // 4. Написать функцию преобразования массива в объект

    function convertArrayToObj (array) {

        letters = ['a','b','c','d','e','f','g',
            'h','i','j','k','l','m','n',
            'o','p','q','r','s','t','u','v','w','x','y','z'];

        var j = 1;

        var obj = {};

        for (i = 0;i<array.length;i++){

            if(i < letters.length){

                obj[letters[i]] = array[i];

            }else {

                obj[j++] = array[i];

            }
        }
        return obj;
    }
    console.log(convertArrayToObj(arrayToFind));
    // 5. Написать функцию фильтрации массива filterNew(arr1, arr2).
    function filterNew(arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    arr1.splice(i, 1);
                    i--;
                }
            }
        }
    }

    var newData = [2, 2, 5, 5, 7, 6, 10, 12];
    var oldData = [2, 5, 10,15];
    filterNew(newData, oldData);
    console.log(newData);

})();
