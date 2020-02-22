var arr = [10, 15, 20, 25];
var sum = 0;

// method 1
function getSumFor(array){
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	
	return sum;
}

console.log('(for) Sum: ', getSumFor(arr));


// method 2
function getSumForEach(array){
	sum = 0;
	arr.forEach(function(item){
		sum += item;
	});

	return sum;
}
console.log('(foreach) Sum: ', getSumForEach(arr));
