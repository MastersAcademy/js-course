(function() {

    var array = [];

    while (array.length != 100) {
        var array_content = Math.floor(Math.random() * (101 - 1)) + 1;
        array.push(array_content);
    };
    /*----------------------------------------------------------------------*/
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

    console.log(array);
    console.log(resultMax);
    console.log(resultMin);
    /*----------------------------------------------------------------------*/
    function convertArrayToObj () {
        var obj = {};
        var objKeys = [];
        var objValue;
        var k = 97;
        for (var i = 0; i <= 25 ; i++) {
            objKeys.push(String.fromCharCode(k + i));
        };
        for (var ii = 1; ii <= 74; ii++) {
            objKeys.push(ii);
        };
        return objKeys;
        return obj;
    };

    var object = convertArrayToObj();
    console.log(object);
    /*----------------------------------------------------------------------*/

})();
