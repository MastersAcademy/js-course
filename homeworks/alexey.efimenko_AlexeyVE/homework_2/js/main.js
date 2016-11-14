(function(){
	//1
	var arr = [];
	console.log('1)',arr);
	
	//2
	function randomNumber() {
		for (var i = 0; i < 100; i++) {
			var randomNumber = Math.random() * 100;
			var roundNumber = Math.ceil(randomNumber);
			if (roundNumber > 100 || randomNumber == 0) {
				console.log('error!!! Array contains a number greater than 100');
				return false;
			} else {
				arr.push(roundNumber);
			}
		}
		console.log('2)', arr, 'Array length: ' , arr.length)
	}
	randomNumber();
	
	//3
	var myArr = [-1, -4, 4, 5, -60, 99];
	var resultMax = findMinMax(myArr, 'max');
	var resultMin = findMinMax(myArr, 'min');
	
	function findMinMax(arrayToFind, option) {
		var minNum = arrayToFind[0];
		var maxNum = arrayToFind[0];
		if (option === 'max') {
			for (var key = 0; key < arrayToFind.length; key++)
				if (maxNum < arrayToFind[key]) {
					maxNum = arrayToFind[key];
				}
			return maxNum;
		} else if (option === 'min') {
			for (var key = 0; key < arrayToFind.length; key++)
				if (minNum > arrayToFind[key]) {
					minNum = arrayToFind[key];
				}
			return minNum;
		} else {
			console.log("findMinMax error!!! option must be 'min' or 'max' ");
			return false;
		}
	}
	console.log('3)',myArr)
	console.log('resultMin: ' + resultMin);
	console.log('resultMax: ' + resultMax);
	
	//4
	function convertArrayToObj (array) { 
		var obj = {};
		var alph="abcdefghijklmnopqrstuvwxyz";
		var letters=[];
		letters=alph.split('');
		array.map(function(el,index){
			if(letters.length > index){
				obj[letters[index]]=el;
			}
			else if(index >=letters.length){
				var prop=(index-letters.length)+1;
				obj[prop]=el;
			}
		});
	return obj;	
	}
	console.log('4)',convertArrayToObj(arr));
	
	//5
	var newData = [1,2,3,4,5,6,7,8,9,55,55,55,55,55,55,999,99,99,9,4,5,6,7,8,4];
	var oldData = [9,88,77,99,999,8,7,55,6,4,4,3,2,1,5,5,5];
	function filterNew(newData, oldData) {
		for (var indNew = 0; indNew < newData.length; indNew++) {
			for (var indOld = 0; indOld < oldData.length; indOld++) {
				if (newData[indNew] == oldData[indOld]) {
					var idx = newData.indexOf(oldData[indOld]);
					newData.splice(idx, 1);
					indNew=-1;
				};
			};
		};
	};		
	filterNew(newData, oldData);
	console.log('5) newData',newData);
})();