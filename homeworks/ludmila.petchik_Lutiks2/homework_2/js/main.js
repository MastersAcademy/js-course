var arr=[];
for (var i= 0; i<=100; i++){
	var max = 100, min = 1;
    arr.push(Math.floor(Math.random() * (max - min + 1) + min));
}
console.log(arr);


