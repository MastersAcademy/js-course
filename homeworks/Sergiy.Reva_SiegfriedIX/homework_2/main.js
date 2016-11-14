(function(){
    //1.
    var arr = [];
    //2.
    var randomNum;
    while(arr.length<=100){
        randomNum = Math.floor(Math.random()*100);
        if (arr.indexOf(randomNum)!= 0){
            arr.push(randomNum);
        }
    }
    console.log(arr);
    //3.
    function findMinMax(arrayToFind,value){
         if (value == 'min'){
         return Math.min.apply(Math,arrayToFind);
         }
         if (value == 'max'){
         return Math.max.apply(Math,arrayToFind);
         }
    }
    var arrayToFind = [3,6,0,-6,12];
    var resultMax = findMinMax(arrayToFind,'max');
    var resultMin = findMinMax(arrayToFind,'min');
    console.log(resultMax);
    console.log(resultMin);
    //4.
    var arr2=[];
    for(var i=0;i<=36;i++){
    arr2.push(i);
    }
    function convertArrToObj(arr1){
    var obj = {};
    for(var i=0;i<arr1.length;i++){
        for(i;i<=25;i++){
            obj[String.fromCharCode(i+97)]=arr1[i];
        }
        obj[i-25] = arr1[i];}
    return obj
    }
    console.log(convertArrToObj(arr2));
    //5.
    function filterNew(newArr,oldArr){
        for(var i=0;i<newArr.length;i++)
        {
            for(var j=0;j<oldArr.length;j++)
            {
                if(newArr[i]==oldArr[j])
                {
                    newArr.splice(i,1);
                }
            }
        }
    }
    var newData = [2,12,22,6,32];
    var oldData = [12,5,7,17,22,32];
    filterNew(newData,oldData);
    console.log(newData);
})
