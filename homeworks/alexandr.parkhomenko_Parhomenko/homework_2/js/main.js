(function () {

  // 1.Создать пустой массив
  console.log('1.Создать пустой массив');
  var newArr = [];
  console.log(newArr);


  // 2. Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random()
  console.log('2. Добавить в него 100 целых чисел от 1 до 100 с помощью метода Math.random()');
  for (var i = 0; i < 100; i++) {
    newArr.push(Math.floor((Math.random() * 100) + 1));
  }
  console.log(newArr);


  // 3.Написать функцию поиска и вывода в консоль максимального или минимального элемента.
  console.log('3.Написать функцию поиска и вывода в консоль максимального или минимального элемента.');
  var arrayToFind = [3, 6, 0, -6, 12];

  function findMinMax(arrayToFind, str) {
    if (str == 'max') {
      return Math.max.apply(null, arrayToFind);
    } else if (str == 'min') {
      return Math.min.apply(null, arrayToFind);
    } else {
      console.log('wrong string');
    }
  }
  var resultMax = findMinMax(arrayToFind, 'max');
  var resultMin = findMinMax(arrayToFind, 'min');
  console.log('max value = ' + resultMax);
  console.log('min value = ' + resultMin);


  // 4.Написать функцию преобразования массива в объект 
  console.log('4.Написать функцию преобразования массива в объект');
  var convertedArr = newArr.reverse();

  function convertArrayToObj(array) {
    var obj = {};
    for (var i = 0; i < array.length; i++) {
      if (Object.keys(obj).length < 26) {
        obj[String.fromCharCode(97 + i)] = array[i];
      } else {
        obj[i - 25] = array[i];
      }
    }
    return obj;
  }
  console.log(convertArrayToObj(convertedArr));


  // 5.Написать функцию фильтрации массива
  var newData = [2, 12, 22, 6, 32];
  var oldData = [12, 5, 7, 17, 22, 32];

  function filterNew(newData, oldData) {
    for (var i = 0; i < newData.length; i++) {
      for (var j = 0; j < oldData.length; j++) {
        if (newData[i] == oldData[j]) {
          newData.splice(i, 1);
          i = i - 1;
        }
      }
    }
    console.log('5. Написать функцию фильтрации массива');
    console.log(newData);
  }
  filterNew(newData, oldData);

}());