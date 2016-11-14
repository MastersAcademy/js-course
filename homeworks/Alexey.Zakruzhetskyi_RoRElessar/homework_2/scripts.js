(function() {
    /*--------------------------------1-------------------------------------*/
    var array = [];
    /*--------------------------------2-------------------------------------*/
    while (array.length != 100) {
        var array_content = Math.floor(Math.random() * (101 - 1)) + 1;
        array.push(array_content);
    };
    /*--------------------------------3-------------------------------------*/
    function findMinMax (array, option) {
        var option;
        if (option === 'max') {
              return Math.max.apply(Math, array);
        } else if (option === 'min') {
              return Math.min.apply(Math, array);
          } else {
              return 'This option is uncorrect!'
          };
    };

    var resultMax = findMinMax(array, 'max');

    var resultMin = findMinMax(array, 'min');

    console.log(resultMax);
    console.log(resultMin);
    /*--------------------------------4-------------------------------------*/
    function convertArrayToObj() {
        var obj = {};
        var objKeys = [];
        var k = 97;
        for (var i = 0; i <= 25 ; i++) {
            objKeys.push(String.fromCharCode(k + i));
        };
        for (var j = 1; j <= 74; j++) {
            objKeys.push(j);
        };
        objKeys.forEach(function(value, index){
            obj[value] = array[index];
        });
        return obj;
    };

    var object = convertArrayToObj();
    console.log(object);
    /*--------------------------------5-------------------------------------*/
    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];

    function filterNew(arr1, arr2) {
        for(var i = 0; i < oldData.length; i++) {
            for (var j = 0; j < newData.length; j++) {
                if (newData[j] == oldData[i]) {
                    newData.splice(j, 1);
                    i--;
                };
            };
        };
    };

    filterNew(newData, oldData);
    console.log(newData);
    /*-------------------------------end------------------------------------*/
})();
