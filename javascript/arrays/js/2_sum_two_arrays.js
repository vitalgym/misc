var first = [2, 3]
var second = [3, 2]


// method 1
function getSumFor(arr1, arr2) {
	var result = [];
	
	for (var i = 0; i < arr1.length; i++) {
		result.push(arr1[i] + arr2[i]);
	}
	
	return result;
}

console.log('(for) Sum: ', getSumFor(first, second));




// method 2
function getSumForEach(arr1, arr2) {
	var result = [];

	arr1.forEach(function(item, index) {
		result.push(item + arr2[index]);
	});

	return result;
}

console.log('(foreach) Sum: ', getSumForEach(first, second));

