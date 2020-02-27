var names = [1, 2, 3, 4, 5];


function reduce(arr, fn, initialValue) {
	var prev;
	var result;
	var counter = 0;

	if (initialValue !== undefined) {
		prev = initialValue;
	} else {
		prev = arr[0];
		counter = 1;
	}
	
	for (var i = counter; i < arr.length; i++) {
		prev = fn(prev, arr[i], i, arr);
	}
	
	return prev;
}

function reduceConditions(previousValue, currentItem, index, arr) {
	return previousValue + currentItem;
}

console.log(reduce(names, reduceConditions, 5));