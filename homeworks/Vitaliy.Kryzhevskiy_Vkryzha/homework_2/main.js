(function(){

    var firstVar = [];  //пустий масив

    var arrayToFind = [3, 6, 0, 6, 12];

    var task_4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37];

    var resultMax = findMinMax(arrayToFind, 'max');

    var resultMin = findMinMax(arrayToFind, 'min');

    var conArrey = convertArrayToObj(task_4);

    var newData = [2, 12, 22, 6, 32];

    var oldData = [12, 5, 7, 17, 22, 32];

    var filteredData = filterNew(newData, oldData);

	 for(var x=0; x<100; x++)    //створює рандомний масив з цілих чисел від 1 до 100

	  {

firstVar[x]=Math.round(Math.random()*100);

        //  console.log(firstVar[x]);

       }

function findMinMax( a, b)       //знаходить найбільше та найменше значення масиву
      {

    var max=a[0];

    var min=a[0];

        if (b == 'max') {

            for(var j = 0; j < a.length; j++) {

                if (max < a[j]) {

                    max = a[j];

                }


            }

            return max;
        }

        if (b == 'min') {

            for(var i = 0; i < a.length; i++) {

                if (min > a[i]) {

                    min = a[i];

                }
            }

            return min;

        }


}

//console.log('max value = ' + resultMax);

// console.log('min value = ' + resultMin);


function convertArrayToObj(arr)  // перетворює масив в об'єкт( я не зміг зробити так, щоб спершу йшли літери, а потім цифри)

      {

    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w' , 'x', 'y', 'z'];

    var obj={};

    for( var a=0; a<arr.length; a++){

        if(a<letters.length){

        obj[letters[a]]= arr[a];}

        else
            obj[a-letters.length+1]= arr[a];

    }

    return obj;

}

//console.log(conArrey);


function filterNew(a,b)       //фільтрує масив
{

    for(var i = 0; i < a.length; i++){

        for(var j = 0; j < b.length; j++){

            if (a[i] == b[j]) {a.splice(i,1)}

        }
    }

return a;

}

//console.log(filteredData);

})();