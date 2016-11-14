function filterNew(mainArr, filterArr) {
    if (!filterArr instanceof Array || !mainArr instanceof Array) {
        throw new TypeError();
    }

    for (var i = 0; i < mainArr.length; i++) {
        filterArr.forEach(function (val) {
            if (val === mainArr[i]) {
                mainArr.splice(i, 1);
                --i;
            }
        })
    }

    return mainArr;
}

function convertArrayToObj(array) {
    if (!array instanceof Array) {
        throw new TypeError();
    }
    var obj = {};

    var i = 97, j = 0, k = 1;
    while (j < array.length) {
        if (i <= 122) {
            obj[String.fromCharCode(i)] = array[j];
            i++;
        } else {
            obj[k] = array[j];
            k++;
        }
        j++;
    }

    return obj;
}

function findMinMax(arr, str) {
    if (!arr instanceof Array) {
        throw new TypeError();
    }

    switch (str) {
        case 'min':
            return Math.min.apply(Math, arr);
            break;
        case 'max':
            return Math.max.apply(Math, arr);
            break;
        default:
            throw new TypeError();
    }
}

function generateRandomArray(count) {
    if (typeof count !== 'number' || count < 1) {
        throw new TypeError();
    }

    var arr = [];
    for (var i = 0; i < count; i++) {
        arr.push(Math.floor(Math.random() * 100 + 1));
    }
    return arr;
}
