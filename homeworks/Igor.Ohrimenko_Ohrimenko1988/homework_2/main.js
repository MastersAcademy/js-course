/**
 * Created by Igor on 13.11.2016.
 */
(function()
{
    // 1 task
    var array =[];
    // 2 task
    var buferRandomNumber ;
    for (var i = 0 ; i< 100;i++ )
    {
        buferRandomNumber = (Math.random()* 100)+1;
        array[i] = Math.floor(buferRandomNumber);
    }

    // 3 task
    function findMinMax (searchingArray ,comand ) {
        var bufer = searchingArray[0];

        if (comand == "Max") {
            for (var j = 0; j < searchingArray.length; j++) {
                if (searchingArray[j] > bufer) {
                    bufer = searchingArray[j];
                }

            }
        }
        else if (comand == "Min") {
            for (var l = 0; l < searchingArray.length; l++) {
                if (searchingArray[l] < bufer) {
                    bufer = searchingArray[l];
                }
            }
        }
        else {
            console.log("Wrong comand , input 'Min' or 'Max' ");
            return;
        }

        return bufer;
    }

    // 4 task
    function convertArrayToObj (array) {

        var obj = {};

        for(var j = 0 ; j < array.length ; j++)
        {
            if(j <= 25)
            {
                obj[String.fromCharCode(97 + j)] = array[j];
            }
            else if (j > 25)
            {
                obj[j-25] = array[j];
            }
        }

        return obj;
    }

    var test = {};
    test = convertArrayToObj(array);
    for(var key in test)
        console.log('test[' + key + '] = ' + test[key]);

    // 5 task
    var newData = [2, 2, 12, 22, 6, 32];
    var oldData = [2, 12, 5, 7, 17, 22, 32];


    function filterNew(newData , oldData)
    {
        for (var j = 0 ; j < oldData.length ; j++)
        {
            for(var k = 0 ; k < newData.length ; k++)
            {
                if(oldData[j] == newData[k])
                    k--;
                    newData.splice(k+1,1);


            }
        }
    }

    filterNew(newData,oldData);
    console.log(newData);




})();