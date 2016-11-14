(function () {

    //1 Создание массива
    var arrMasiv = [];


    //2 Заполнение массива от 1 до 100

    for (var i = 1; i <= 100; i++) {
        arrMasiv.push(Math.round(Math.random() * 100))
    }
    console.log("Random masiv numbers: [" + arrMasiv + "]");


    // 3 Вывод максимального и минимального значения

           function findMinMax (arrayToFind, minMax) {

                        if (minMax=="max") {
                            return Math.max.apply(null, arrayToFind);
                        }
                    if (minMax=="min"){
                            return Math.min.apply(null, arrayToFind);
                    }
                }
        var resultMax = findMinMax(arrMasiv, 'max');
        var resultMin = findMinMax(arrMasiv, 'min');

            console.log("max number: [" + resultMax + "]");

            console.log("min number: [" + resultMin + "]");

        // 4 Вывод максимального и минимального значения

    function convertArrayToObj (arrMasiv) {

        var obj = {};

        arrMasiv.forEach(function (value, index) {
            if (index >= 25) {
                obj[index - 25] = value;
            } else {
                obj[String.fromCharCode(97 + index)] = value
            }
        });

        return obj;
    }
    console.log(convertArrayToObj(arrMasiv));

    // 5 фильтр массива


    function filterNew(arrMasiv, arrMasiv2) {
        for (var i = 0; i < arrMasiv2.length; i++) {
            var index_arrMasiv = arrMasiv.indexOf(arrMasiv2[i]);
            while (index_arrMasiv > -1) {
                arrMasiv.splice(index_arrMasiv, 1);
                index_arrMasiv = arrMasiv.indexOf(arrMasiv2[i]);
            }
        }
    }

    var arrMasiv2 = [];
    for (var j = 1; j <= 100; j++) {
        arrMasiv2.push(Math.round(Math.random() * 100))
    }
    console.log("Random masiv 2 numbers: [" + arrMasiv2 + "]");
    filterNew(arrMasiv, arrMasiv2);
    console.log(arrMasiv);


})();