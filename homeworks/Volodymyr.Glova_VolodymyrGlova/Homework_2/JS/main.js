;// 1
var firstArray = [];

//2
    for (i=0; i<100; i++){
    	firstArray[i]=(Math.floor(Math.random() * (100)));
    }
    firstArray.push(i);
    console.log(firstArray);
//3
var secondArray = [-1, 1, 2, -5, 12, 5, 13, 12, -18, 14, 123, 456];
function getMin(secondArray) {
	var arrLen = secondArray.length,
	min = secondArray[0];
	for (var i = 0; i < arrLen; i++) {
        if (min > secondArray[i]) {
        	min = secondArray[i];
        }
    }
    return min;
}
function getMax(secondArray) {
	var arrLen = secondArray.length,
	max = secondArray[0];
	for (var i = 0; i < arrLen; i++) {
		if (max < secondArray[i]) {
			max = secondArray[i];
		}
	}
	return max;
}
findMax = getMax(secondArray);
findMin = getMin(secondArray);
console.log(findMax, findMin); 
// 4
var objectArray = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    function convertArrayToObj(array){
    	var object={};
    	var alphabetArray=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    	var o=1;
    	for(i = 0; i < alphabetArray.length; i++){
    		object[alphabetArray[i]] = array[i];
    	}
    	if (i != array.length){
    		while(i < array.length){
    			object[o] = array[i];
    			i++;
    			o++;
    		}
    	}
    	return object;
    }
    console.log(convertArrayToObj(objectArray));
//5
var newData = [2, 12, 22, 6, 32];
var oldData = [12, 5, 7, 17, 22, 32];
function filterNew(array1, array2)
{
	for(var i = 0; i <= array1.length; i++)
		{
			for(var j = 0; j < array2.length; j++)
				{
					if (array1[i] == array2[j])
						{
							array1.splice(i, 1);
						}
					}
				}
			}
			filterNew(newData, oldData);
			console.log(newData);