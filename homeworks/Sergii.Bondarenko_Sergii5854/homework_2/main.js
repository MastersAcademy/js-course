    (function(){

    
    // task 1
    
    var myArr = [];

        
    //task 2
   
    
    while(myArr.length < 100) {

        var randomNumber = Math.ceil(Math.random()*100);

        if(myArr.indexOf(randomNumber) > -1) continue;

        myArr[myArr.length] = randomNumber;

    }

    console.log("Answer for task 2: " + myArr);
    console.log("Checked for task 2: " + myArr.sort()); // для зручності перевірки від 1-100 цілих чисел 
    

    //task 3
   

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
    
    
    //task 4   


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

    
    //task 5
   

    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];

    function filterNew(arr1, arr2) {

        for (var i = 0; i < arr2.length; i++) {

            var indexArr1 = arr1.indexOf(arr2[i]);

            while (indexArr1 > -1) {

                arr1.splice(indexArr1, 1);        
                indexArr1 = arr1.indexOf(arr2[i]);
            }
        }
    }

    filterNew(newData, oldData);
    console.log("Answer for task 5: " + newData);

    // Проверь решение filterNew с таким примером

    var arr1 = [2, 2, 3, 3, 15 ] ; 
    var arr2 = [2, 3, 10];  

    filterNew(arr1, arr2);
    console.log("Answer for task 5.2: " + arr1);


    })();

