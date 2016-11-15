/**
 * Created by alexandr on 14.11.16.
 */
(function(){
    console.log('************************ Home work **********************************');
    var min = 1;
    var max = 101;
    var  mainArray = [];
    var loverCaseStart = 97;
    var counter = 0;
    var obj = {};

    for (var i = 1; i < 101; i++) {
        mainArray.push(i);
        console.log(i);

    }


    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }

    mainArray.sort(compareRandom);

    // console.log(mainArray);
        console.log('************************ we have one array => '+ mainArray +'**********************************');

    function findMinMax(arrayToFind, flag){
        if(flag =="min"){

            return arrayToFind.sort(compareNumericMin)[0];
        }else if(flag =="max"){

            return arrayToFind.sort(compareNumericMax)[0];
        }else{
            console.log("Check your FLAG");
        }
    }
    function compareNumericMin(a,b) {
        return a - b;
    }
    function compareNumericMax(a,b) {
        return b - a;
    }
    var resultMin= findMinMax(mainArray, "min");
    var resultMax= findMinMax(mainArray, "max");

    console.log('************************ min  => ' + resultMin + '**********************************');
    console.log('************************ max  => ' + resultMax + '**********************************');

    function convertArrayToObj (array) {
        array.forEach(function(element) {
            if(counter<=25){
                var symbol = symbolUnicod(counter);
                obj[symbol]= element;
            } else {
                obj[counter - 25] = element;
            }
            counter++;
        });
        return obj;
    }

    function symbolUnicod(counter) {
        var symbol = String.fromCharCode(loverCaseStart+Number(counter));
        return symbol;
    }
    var customObject = convertArrayToObj(mainArray);

    console.log('************************ transformation a massive to an obj  => ',customObject, '**********************************');



    var newData = [2, 12, 22, 6, 32];

    var oldData = [12, 5, 7, 17, 22, 32];

    function filterNew(newData, oldData) {
        var iterator = newData.length-1;
        while(iterator >= 0) {
            var situation = oldData.indexOf(newData[iterator]);
            if(situation >= 0){
                newData.splice(iterator, 1);
            }
            iterator = iterator-1;
        }
        return newData;
    }

    filterNew(newData, oldData);

    console.log('************************ check data from old data  => ',newData, '**********************************');
})();
