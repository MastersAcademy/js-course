(function () {
    //Создать пустой массив    
    var arrl=[];

    //Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random()
    var arrl=[];

    for (var i=100; i>=1; i--){
        arrl.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    }
    console.log(arrl);

    /*Написать функцию поиска и вывода в консоль максимального или минимального элемента. 
    Функция должна называться findMinMax , принимать в параметрах массив для поиска и строку,
    определяющую действие функции.
    Функция должна возвратить найденный элемент */
    var arrayToFind = [3, 6, 0, -6, 12];
    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');
    console.log(resultMax); // 12
    console.log(resultMin); // -6

    function findMinMax(arrayToFind,minMax){
        if(minMax=='max'){ 
            var max=arrayToFind[0];
            for (var i=1; i<arrayToFind.length;i++){
                if(arrayToFind[i]>max){
                    max=arrayToFind[i];
                }
            }
        return max;   
        }
    
         if(minMax=='min'){ 
            var min=arrayToFind[0];
            for (var i=1; i<arrayToFind.length;i++){
                if(arrayToFind[i]<min){
                    min=arrayToFind[i];
                }
            }
            return min;
        }
    }

   })();

    