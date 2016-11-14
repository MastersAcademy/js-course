    var myArray = []; //Создать пустой массив

    var myArray = new Array(100); // Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random()

    for (i = 0; i < myArray.length; i++) { // Add elements to the array
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
