(function () {

    // Задание №1
    // Переписать дефолтный метод window.setTimeout(callback, delay)
    // для применения по новым правилам : первым параметром должна стать задержка, вторым коллбек
    function newTimeout(fnc) {

        return function (delay, callback) {

            return fnc(callback, delay);
        };
    }

    window.setTimeout = newTimeout(setTimeout);

    // Проверка таймера
    //window.setTimeout(5000, slowAlert);

    // function slowAlert() {
    //     alert("Замедлено на 5 сек.");
    // }

    // Задание №2
    // Переписать дефолтный метод window.setInterval(callback, delay)
    // таким образом, чтобы временные интервалы считались с использованием написанного
    // в задании №1 метода setTimeout.
    function newSetInterval(callback, delay) {
        setTimeout(delay,
            function () {
                newSetInterval(callback, delay);
                callback();
            });
    }

    window.setInterval = newSetInterval;

    // Проверка интервала
    //window.setInterval(slowAlert,5000);

    // Задание №3
    // Переделать функцию freeze из лекции, чтобы в декорированную функцию
    // передавался не последний параметр, а первый.
    function fncToDelay (param) {

        console.log('Delayed run : ' + param);
    }

    function freeze (delay, fnc) {
        var timeout;

        return function () {
            var args = arguments;
            if(!timeout) {
                timeout = setTimeout(delay, function () {
                    fnc.apply(this, args);
                    timeout = null;
                });
            }
        }
    }

    var frozenFunc = freeze(1000, fncToDelay);

    frozenFunc('1');
    frozenFunc('2');
    frozenFunc('3');
    frozenFunc('4');
    frozenFunc('5');
    frozenFunc('6');
    frozenFunc('7');
    frozenFunc('8');
    frozenFunc('9');

    // Задание №4
    function createPipe(originalFnc, fnc) {
        return function (param) {

            var result = param;

            for (var i=0; i<fnc.length;i++){
                result = fnc[i](result);
            }

            return originalFnc(result);
        }
    }

    function originalFnc (string) {

        var arr = string.split(' ');

        var newArr = [];

        for (var i = 0; i<arr.length;i++){
            var result = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);

            newArr.push(result);
        }

        string = newArr.join(' ');
        console.log(string);
    }

    function filterDigits (string) {
        var result  = string.replace(/\d/g,'');

        return result;
    }

    function filterSpecial (string) {
        var result = string.replace(/[!@#$%^&*()+=]/g,'');

        return result;
    }


    function filterWhiteSpaces (string) {
        var result = string.replace(/\s+/g,' ');

        return result;
    }

    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);

    pipe('on345l90y    te**x((((t     h$&er@@@e');

})();

