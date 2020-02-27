var first = [2, 3]
var second = [3, 2]
var third = [5, 5];
var sum = 0;


// method 1
function getSumFor(arr1, arr2, arr3) {
	for (var i = 0; i < arr1.length; i++) {
		sum = sum + arr1[i] + arr2[i] + arr3[i];
	}
	
	return sum;
}

console.log('(for) Sum: ', getSumFor(first, second, third));




// method 2
function getSumForEach(arr1, arr2, arr3) {
	sum = 0;
	
	arr1.forEach(function(item, index) {
		sum = sum + item + arr2[index] + arr3[index];
	});

	return sum;
}

console.log('(foreach) Sum: ', getSumForEach(first, second, third));

