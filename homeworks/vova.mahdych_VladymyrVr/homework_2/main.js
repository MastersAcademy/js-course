(function () {
    
//  1. Create empty array.

    var  randArr = [];

//  2. Push to array 100 numbers  from 1 to 100 by dint of method Math.random().

    var i = 0;

    while (i < 100) {
        randArr.push(Math.floor(Math.random() * 100 + 1 ));  //fixed
        i++
    }


    console.log(randArr.toString());
    console.log(randArr.length);

// 3. Write a search and output function of the maximum or minimum element of array.

    function findMinMax(array, state) {
        var swap = array.sort(function (a,b) {
            return a - b;
        });

         if (state == 'max') {
           return swap[swap.length - 1];
        } else if (state == 'min') {
           return swap[0];
        }
    }

    var arrayToFind = [3, 6, 0, -6, 12];
    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');

    console.log(resultMax);
    console.log(resultMin);

// 4. Write a function of convet array to object...:

    function convertArrayToObj (array) {

        var obj = {};
        var alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(',');
        var n = 1;

        for (var i = 0; i < array.length; i++) {
            if (i<alphabet.length) {
                obj[alphabet[i]] = array[i];
            } else if (i >= alphabet.length) {
                obj[n] = array[i];
                n++;
            }
        }
        return obj;
    }
    console.log(convertArrayToObj(randArr));

// 5. Write a function to filter array  filterNew(arr1, arr2).

    function filterNew(arr1, arr2) {
        var elemArr1;

        for (var i = 0; i < arr1.length; i++) {
            elemArr1 = arr1[i];
            for (var j = 0; j < arr2.length; j++) {
                if (elemArr1 == arr2[j]) {
                    arr1.splice(arr1.indexOf(elemArr1), 1);
                    i--;
                    break;
                }
            }
        }
        //delete Return
    }

    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];

    filterNew(newData, oldData);

    console.log(newData);

})();