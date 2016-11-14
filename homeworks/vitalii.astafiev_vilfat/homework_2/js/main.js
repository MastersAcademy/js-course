(function(){
    
// 1.Создать пустой массив
    var arr = [];

    console.log(arr);
    
// 2.Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random()
    for(var i = 0 ; i < 100 ; i++ ){
        arr[i]=Math.floor(Math.random() * 100 + 1);
    }
    
    console.log(arr);

// 3.Написать функцию поиска и вывода в консоль максимального или минимального элемента. Функция должна называться findMinMax , принимать в параметрах массив для поиска и строку, определяющую действие функции. Функция должна возвратить найденный элемент Пример использования функции
    function findMinMax (arr ,option) {
        if (option == 'max') {
            return Math.max.apply(null, arr);
        }

        else if (option == 'min') {
            return Math.min.apply(null, arr);
        }
        
        else {
            alert("It is not a valid option");
        }
    }
        
    var arrayToFind = [3, 6, 0, -6, 12];
    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');
            
   console.log(resultMax); // 12     
   console.log(resultMin); // -6
   console.log(findMinMax(arrayToFind, 'mian')); 
    
//   4.Написать функцию преобразования массива в объект
    var letters = [' q ' ,' w ', ' e ',' r ', ' t ', ' y ' ,' u ', ' i ', ' o ', ' p ', ' a ', ' s ', ' d ', ' f ', ' g ', ' h ', ' j ', ' k ', ' l ', ' z ', ' q ' ,' w ', ' e ',' r ', ' t ', ' y ' ,' u ', ' i ', ' o ', ' p ', ' a ', ' s ', ' d ', ' f ', ' g ', ' h ', ' j ', ' k ', ' l ', ' z '];
    console.log('Длина массива ' + letters.length);
    
    function convertArrayToObj (array) {
        
        var obj = {};       
        var alphabet = 'abcdefghijklmnopqrstuvwxyz';
        var num = 1;
            for (var i = 0 ; i < array.length; i++) {
                
                if (i < 26) {
                   var key = alphabet.charAt(+i);
                    obj[key] = array[i];
                } 
                
                else if (i  < array.length - 1) {
                    obj[' ' + num] = array[i];
                    num++;
                }
            }   

        return obj;
    }
    
    
    var myObj = convertArrayToObj(letters);
    
    for(var key in myObj){
        console.log(key + ' = '  + myObj[key]);
    }
    
// 5. Написать функцию фильтрации массива
    
    function filterNew(arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    arr1.splice(i, 1);
                    i = -1;
                }
            }
        }
    }
    
    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];
    filterNew(newData, oldData);
    console.log(newData); //  [2, 6];
        
})();

