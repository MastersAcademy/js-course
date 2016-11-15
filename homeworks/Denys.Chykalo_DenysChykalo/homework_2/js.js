(function () {
    console.log('Task 1');
    var arr0 = [1,2,3,4,5];
    console.log(arr0);

    console.log('____________________________________');

    var arr1 = [];
    console.log('Task 2');
	for (i = 0; i < 100; i++){
        arr1.push(Math.floor((Math.random() * 100)));
    }
    console.log(arr1);

    console.log('____________________________________');

    console.log('Task 3');
    function maxMin (array){
        var max = Math.max.apply(null, arr1);
        var min = Math.min.apply(null, arr1);
        console.log('Max = ', max);
        console.log('Min = ', min);}

    maxMin (arr0);
    maxMin (arr1);

    console.log('____________________________________');

    console.log('Task 4');
    function convertArrayToObject (array){
        var obj = {};
		var value;
		var index = 97;
		
		for (i = 0; i < array.length; i++){
            if (i <= 25) {
                value = String.fromCharCode(index);
                index++;
			} else if (i => 26) {
                value = index - 122;
                index++;
            }
            obj[value] = array[i];
        }
        return obj;
    }
    console.log(convertArrayToObject(arr1));

    console.log('____________________________________');

    console.log('Task 5');
    var arr2 = [1, 55, 213, 57, 88, 2, 3, 1];
    var arr3 = [1, 33, 454, 12, 55, 2, 3, 11];
    function filterNew(array1, array2){
        for (i = 0; i < array1.length; i++){
            for (j = 0; j < array2.length; j++){
                if (array1[i] == array2[j]){
                    array1.splice([i], 1);
                    i--;
                }
            }
        }
    console.log(array1);
    }
    filterNew(arr2,arr3);
})();
