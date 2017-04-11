// part 1
var count = 100,
    x = [];


// part 2
function setArr(array) {
    for (var i = 0; i < count; i++)
        array.push(Math.floor(Math.random() * 100 + 1));
}

setArr(x);
console.log('Set 100 elements in array: ', x, "\n\n\n");


// part 3
function findMinMax(array, behavior) {
    if (typeof array !== 'undefined' && (behavior == 'min' || behavior == 'max'))
        return Math[behavior].apply(null, array);

    return null;
}

console.log('Min element of array: ', findMinMax(x, 'min'));
console.log('Max element of array: ', findMinMax(x, 'max'), "\n\n\n");


// part 4
function convertArrayToObj(array) {
    if (typeof array !== 'undefined' && array.length) {
        var res = {},
            i = 0,
            an = 'a'.charCodeAt(0),
            zn = 'z'.charCodeAt(0);

        for (; an <= zn && array.length; an++)
            res[String.fromCharCode(an)] = array.shift();

        for (;array.length; ++i)
            res[i] = array.shift();

        return res;
    }

    return {};
}

var xo = convertArrayToObj(x);
console.log('Converted to object: ', typeof xo, xo, "\n\n\n");


// part 5
Array.prototype.filterTheSame = function(array) {
    if (typeof array !== 'undefined' && array.length) {
        var self = this;

        Object.keys(array).forEach(function (key) {
            if (array.hasOwnProperty(key)) {
                var idx = self.indexOf(array[key]);

                if (idx !== -1)
                    self.splice(idx, 1);
            }
        });
    }
}

var a = [2, 12, 22, 6, 32],
    b = [12, 5, 7, 17, 22, 32];

a.filterTheSame(b);
console.log(a);