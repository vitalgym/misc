var array = [1, 4, 5, 1, 3, 3];

// method 1
function getSumFor(arr) {
	var result = [];

	for (var i = 0; i < arr.length; i++) {
		result.push(arr[i] * arr[i]);
	}
	
	return result;
}

console.log('(for) array was: ', array);
console.log('(for) array after: ', getSumFor(array));



// method 2
function getSumForEach(arr) {
	var result = [];
	
	var result = arr.map(function(item) {
		return item * item;
	});
	
	return result;
}

console.log('(foreach) array after: ', getSumForEach(array));

