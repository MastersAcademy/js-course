;(function () {

    //Task 1
    var arr = [];

    //Task 2
    function getRandomArray(min, max) {
        for (var i = 1; i <= max; i++) {
            arr.push(Math.floor(Math.random() * (max - min) + min));
        }
        return arr;
    }
    var arrRandom = getRandomArray(1, 101);
    console.log('Random array:', arrRandom);



    //Task 3
    var arrayToFind = [-3, -106, 50, -10, 18, 20, 50.3, -106.7];

    function findMinMax (arrayToFind, str) {

        if (str == 'max'){
            return Math.max.apply(null, arrayToFind);
        } else if (str == 'min'){
            return Math.min.apply(null, arrayToFind);
        }

    }

    var resultMax = findMinMax(arrayToFind, 'max');

    var resultMin = findMinMax(arrayToFind, 'min');

    console.log('Max:', resultMax);
    console.log('Min:', resultMin);



    //Task 5
    var newData = [2, 3, 13, 14, 22, 6, 18];

    var oldData = [12, 18, 3, 17, 22, 32];

    function filterNew(arr1, arr2) {
        for( var i = 0; i < arr1.length; i++ ){
            for( var j = 0; j < arr2.length; j++ ){
                if(arr1[i] === arr2[j]){
                    arr1.splice(i, 1);
                }
            }
        }
        return arr1;
    }
    newData = filterNew(newData, oldData);

    console.log('New Array1', newData);
  }
)();
