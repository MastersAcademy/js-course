//1. Создать пустой массив
     var arr = [];

//2. Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random()

     function addRandom(min, max) {

          return Math.floor(Math.random() * (max - min) + min);
     }

          for(var i = 0; i < 100; i++) {

               arr.push(addRandom(1, 100));
          }
     console.log(arr);

/*3. Написать функцию поиска и вывода в консоль максимального или минимального элемента.
Функция должна называться findMinMax , принимать в параметрах массив для поиска и строку, определяющую действие функции.
Функция должна возвратить найденный элемент Пример использования функции */

     var arrayToFind = [3, 6, 0, -6, 12];
     var resultMax = findMinMax(arrayToFind, 'max');
     var resultMin = findMinMax(arrayToFind, 'min');

     function findMinMax(arrayToFind, str) {

          var sortFunc = function(a, b) {
               return a-b;
          }

          newArr = arrayToFind.sort(sortFunc);

          if(str == 'max'){
               return newArr[newArr.length-1];
          }

          else if(str == 'min'){
               return newArr[0];
          }
     }

     console.log(resultMax);
     console.log(resultMin);

/*4. Написать функцию преобразования массива в объект. где именами полей объекта должны быть буквы латинского алфавита.
Когда(если) алфавит закончится, ключи должны начать формироваться в виде цифр, начиная с 1*/

     function convertArrayToObj(array) {

          var obj = {};
          var alphabet = 'abcdefghijklmnopqrstuvwxyz';
          var j = 1;

               for(var i = 0; i < array.length; i++) {

                    if (i < alphabet.length) {
                         obj[alphabet.charAt(i)] = array[i];

          }
                    else if(i>alphabet.length) {
                         obj[j++] = array[i];
          }
     }

     return obj;

}
     console.log(convertArrayToObj(arr));


/*5. Написать функцию фильтрации массива filterNew(arr1, arr2).
Функция должна принимать на вход два массива и удалять из первого массива элементы, которые есть и в первом и во втором массиве.
Функция ничего не возвращает, а изменяет напрямую первый массив. Пример использования функции:
 */

     var newData = [2, 12, 22, 6, 32];
     var oldData = [12, 5, 7, 17, 22, 32];

     function filterNew(arr1, arr2){

          for(var i = 0; i <= arr1.length; i++){

              for(var j = 0; j < arr2.length; j++){

                   if (arr1[i] == arr2[j]){
                        arr1.splice(i, 1);
                    }
               }
          }
     }

     filterNew(newData, oldData);
     console.log(newData);