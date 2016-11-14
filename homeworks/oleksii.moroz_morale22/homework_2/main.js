    var myArray = []; //Создать пустой массив

    var myArray = new Array(100); // Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random()
    for (i = 0; i < myArray.length; i++) { 
        myArray[i] = Math.random() * (100 - 1) + 1;
    }

    function findMinMax(array, option) { //Написать функцию поиска и вывода в консоль максимального или минимального элемента
        if (option == "min") {
            return Math.min(...array);
        } else if (option == "max") {
            return Math.max(...array);
        } else {
        return 0;
        }
    }

function filterNew(arr1, arr2) { // Написать функцию фильтрации массива filterNew(arr1, arr2)
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
