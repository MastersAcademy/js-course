(function () {
    function createRandomArray (numberOfElements)
    {
        var array = [];
        for (var i = 0; i < numberOfElements; i++){
            array[i] = Math.floor((Math.random() + 0.01) * 100);
        }
        return array;
    }

    var arrayNatural = createRandomArray(100);

    console.log(arrayNatural);

})();
