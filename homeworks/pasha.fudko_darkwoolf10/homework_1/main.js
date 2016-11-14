(function () {
    var arr = [];//create empty array
    for(var i = 1; i <=100; i++){//write 100 elements in cucle
        arr.push(Math.floor(Math.random()*100)+1);// plus 1, because result is 1, but no 0 in function 'min'
        //Math.round(a + Math.random * (b - a) )
    }
    console.log(arr);// output in console array

    var arrayToFind = [3, 6, 0, -6, 12];

    function findMinMax(arr, value){
        if(value == 'min'){
            return Math.min.apply(null, arr);
        }else if(value == 'max'){
            return Math.max.apply(null, arr);
        }
    }
    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');

    console.log(resultMax);//function min
    console.log(resultMin);//and max

    function convertArrayToObj(array) {

        var obj = {};
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const generateName = i => (i< 26) ? String.fromCharCode(97 + i) : (i - 25);
        for (var i in array) {
            obj[generateName(i)] = array[i]
        }

        return obj;

    }
    console.log(convertArrayToObj(arr));

    //exercise five
    var newData = [2, 12, 22, 6, 32];

    var oldData = [12, 5, 7, 17, 22, 32];

    function filterNew(newData, oldData){
        for (var i = 0; i < newData.length; i++){
            for (var j = 0; j < oldData.length; j++){
                if(newData[i] == oldData[j]){
                    newData.splice(i, 1);
                    i--;
                }
            }
        }
    }
    filterNew(newData, oldData);
    console.log(newData);
})();