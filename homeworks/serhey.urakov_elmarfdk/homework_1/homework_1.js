/**
 * Created by Marf on 13.11.2016.
 */

(function () {

    var array = [];

    for (var i = 0; i < 100; i++) {
        array.push(getRandomInt(1, 100));
        }
    function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
    console.log("***2***")
    console.log(array);

    function findMinMax(array, get) {
        if (get == 'max') {
            return Math.max.apply(null, array);
        }
        if (get == 'min') {
            return Math.min.apply(null, array);
        }
    }
    console.log("***3***")
    console.log(findMinMax(array, 'min'));
    console.log(findMinMax(array, 'max'));

    function convertArrayToObj(array) {
        letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n', 'o','p','q','r','s','t','u','v','w','x','y','z'];
        var j = 1;
        var obj = {};
        for (i = 0;i<array.length;i++){
            if(i < letters.length){
                obj[letters[i]] = array[i];
            }
            else {
                obj[j++] = array[i];
            }
        }
        return obj;
    }
    console.log("***4***")
    console.log(convertArrayToObj(array));

    function filterNew(arr1, arr2) {
        for (var i=0; i < arr1.length; i++) {
            for (var j=0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    arr1.splice(i, 1);
                    i = -1;
                }
            }
        }
    }
    var arr1 = ['a', "Orange", "Apple", "Mango", 'check'];
    var arr2 = [2, 4, 10, 'b', 'a', "Orange", "Apple", "Mango"];
    filterNew(arr1, arr2);
    console.log("***5***")
    console.log(arr1);

})();