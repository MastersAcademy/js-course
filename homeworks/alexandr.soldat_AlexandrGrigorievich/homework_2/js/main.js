/**
 * Created by alexandr on 14.11.16.
 */
(function(){
    console.log('************************ 1,2 Tasks **********************************');
    var min = 1;
    var max = 101;
    var  mainArray = [];

    for (var i = 0; i < 101; i++) {
        mainArray.push(i);
        console.log(i);

    }

    function randomNumber(min, max){
        return Math.random() * (max - min) + min;
    }

    while(mainArray.length){
        function createRandomArray(mainArray) {
            var value = randomNumber();
            if(value){

            }
        }
    }

})();
