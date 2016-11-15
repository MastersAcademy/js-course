    (function(){

	
    // task 1
    //1. Создать пустой массив.

    var myArr = [];

		
    //task 2
    //2. Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random().

	
    while(myArr.length < 100) {

        var randomNumber = Math.ceil(Math.random()*100);

        if(myArr.indexOf(randomNumber) > -1) continue;

        myArr[myArr.length] = randomNumber;

    }

    console.log("Answer for task 2: " + myArr);
    console.log("Checked for task 2: " + myArr.sort()); // для зручності перевірки від 1-100 цілих чисел 
	

    /*
    task 3
    3. Написать функцию поиска и вывода в консоль максимального или минимального элемента.
    Функция должна называться findMinMax , принимать в параметрах массив для поиска и строку,
    определяющую действие функции. Функция должна возвратить найденный элемент.
    */

	
    function findMinMax(arrayToFind, minMax) {
	

    var m = arrayToFind[0];

    if(minMax == 'max') {
 
        for(i = 0; i < arrayToFind.length; i++) {

            if(m < arrayToFind[i]) {

                m = arrayToFind[i];

            }
        }

    }
	
    else if(minMax == 'min'){

        for(i = 0; i < arrayToFind.length; i++) {

            if(m > arrayToFind[i]) {

                m = arrayToFind[i];

            }
        }

    }

    return m;
    }

    var resultMax = findMinMax(myArr, "max");
    var resultMin = findMinMax(myArr, "min");

    console.log("Answer for task 3: " + "Max = " + resultMax);
    console.log("Answer for task 3: " + "Min = " + resultMin);
	
    /*
    task 4
    4. Написать функцию преобразования массива в объект где именами полей объекта должны быть
    буквы латинского алфавита. Когда(если) алфавит закончится, ключи должны начать формироваться
    в виде цифр, начиная с 1.
    */



    function convertArrayToObj(arrToObj) {
	
    var names = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var obj = {};
    var j = 1;

    for(i = 0; i < names.length; i++) {

      obj[names[i]] = arrToObj;

    }


    if(i != arrToObj.length) {

        while(i < arrToObj.length) {

            obj[j] = arrToObj;
            i++;
            j++;

        }

    }
	
    return obj;
	
    }

    myArr = convertArrayToObj(myArr);
    console.log(myArr);

    /*
    task_5
    5. Написать функцию фильтрации массива filterNew(arr1, arr2). Функция должна принимать на
    вход два массива и удалять из первого массива элементы, которые есть и в первом и во втором
    массиве. Функция ничего не возвращает, а изменяет напрямую первый массив.
    */

    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];

    function filterNew(arr1, arr2) {
	
    for(var i = 0; i < arr1.length; i++) {	

        for(var j = 0; j <= arr2.length; j++) {

            if(arr1[i] === arr2[j]) {

                arr1.splice(i, 1);
							
            }

        }
    }
    }

    filterNew(newData, oldData);
    console.log("Answer for task 5: " + newData);


	// Проверь решение filterNew с таким примером

    var arr1 = [2, 2, 3, 3, 15 ] ; 
    var arr2 = [2, 3, 10]; 

    function filterNewB(arr1, arr2) {

        for (var i = 0; i < arr2.length; i++) {

            var indexArr1 = arr1.indexOf(arr2[i]);

            while (indexArr1 > -1) {

                arr1.splice(indexArr1, 1);        
                indexArr1 = arr1.indexOf(arr2[i]);
            }
        }
    }


    filterNewB(arr1, arr2);
    console.log("Answer for task 5.2: " + arr1);


    })();

