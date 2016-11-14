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
    console.log(arrRandom);



    //Task 3
    function findMinMax (arr) {
        for(i = 0; i < arr.length; i++) {
            arr[i];
        }
        var max = Math.max.apply(null, arr);
        return max;

    }

    var resultMax = findMinMax(arrayToFind, 'max');

        var resultMin = findMinMax(arrayToFind, 'min');

    console.log(resultMax); // 12

    console.log(resultMin); // -6
    var arrRandom = getRandomArray(1, 101);
    console.log(arrRandom)

    //Task 4



    //Task 5
  }
)();
