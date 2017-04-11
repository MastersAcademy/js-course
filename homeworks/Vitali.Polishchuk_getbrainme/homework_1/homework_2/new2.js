(function () {
    var arr = [];

    for(var i = 0; i <= 100; i++){

        arr.push(i);

        console.log(arr);
    }
        var arr = [-40, 3, -11, 15, 2, 0];

        arr.sort(function(a, b){return a-b});

        console.log(arr[0]+" min");

        arr.sort(function(a, b){return b-a});

        console.log(arr[0]+" max");


        var oldData = [2014, 2015, 2016, 2017];
        var newData = [2015, 2016, 2019, 2020];

        var removeDuplicates = function(oldList, newList) {
            for(var i = 0; i < oldList.length; i++) {
                if (newList.indexOf(oldList[i]) != -1) {
                    delete oldList[i];
                }
            }
        }

        removeDuplicates(oldData, newData);

        console.log(oldData);



        }
)();
