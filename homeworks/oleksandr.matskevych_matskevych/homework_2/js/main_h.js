/**
 * Created by oleksandr on 12.11.16.
 */

    (function () {


    console.log('--------------Homework-2------------');


    //Завдання 1
    var newArray = [];
    console.log ('Пустой массив');


    //Завдання 2
    console.log(newArray);
    var numb = Math.ceil(Math.random()*100); //math - значение от 0 до 1, ceil -ціле від числа

    console.log('Масcив. 100 целых чисел от 1 до 100 с помощью метода Math.random()');
    while(newArray.length<100){

        {
            newArray.push( numb );
             numb=Math.ceil(Math.random()*100);
        }

    }

    console.log(newArray);


    //Завдання 3
    console.log('функция поиска и вывода в консоль максимального или минимального элемента');
    function findMinMax(newArray) {

    var newArray= [1, 3, 0, 6, 7, -2];
    var item=newArray[0];
    var a=newArray[1];
    var min=newArray[0];
    //newArray.forEach(function(item, i, newArray) {
    console.log(newArray);
    for(i = 0; i <= newArray.length; i++)

    { //console.log(item);
        if (a>item)
        {resultMax=a;
            //console.log(item);
            // console.log(a+' більше '+min);   //виводжу логічне значення
            //console.log ('max= '+resultMax);  //виводжу проміжне значення
        }

        else
            {
                resultMin = a;
                //console.log(item);
                //console.log(a + ' менше ' + min);  //виводжу логічне значення
                //console.log('min= ' + resultMin); //виводжу проміжне значення
            }

        a=newArray[i];

    }

    console.log ('max= '+resultMax);
    console.log('min= '+resultMin);

    }
    findMinMax(newArray);


    //Завдання 5
    console.log('Функция должна принимать на вход два массива и удалять из первого массива элементы, которые есть и в первом и во второммассиве. Функция ничего не возвращает, а изменяет напрямую первый массив');
    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];
    console.log(newData);
    console.log(oldData);

    function filterNew (array1,array2) {


        var n = 0;
        for (var i = 0; i < newData.length; i++) {

            for (var j = 0; j < oldData.length; j++) {
                if (newData[i] == oldData[j]) {
                    newData.splice(i, 1);
                    //newData.splice(newData.indexOf(n), 1);
                    //console.log('новий масив' + newData);
                }
            }
        }
        console.log('Новий масив [' + newData +']' );

    }

    filterNew(newData, oldData);




    //завдання 4
    console.log('функция преобразования массива в объект')
        function convertArrayToObj (newArray) {

            var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
            var obj = {};
            var j = 0;

            for (var i = 0; i < newArray.length; i++) {

                if (i > abc.length) {
                    obj[j] = newArray[i];
                    j++;
                }

                else if (i < abc.length) {
                    k=abc[i];
                    obj[k] = newArray[i];
                }
            }

            return obj;
        }

        console.log(convertArrayToObj(newArray));


})();
