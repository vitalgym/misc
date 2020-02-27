var names = ['Joe', 'Michael', 'John', 'Jane', 'Mary'];

function filter(arr, fn) {
	let newArray = [];
	
	for (var i = 0; i < arr.length; i++) {
		if (fn(arr[i], i, arr)) {
			newArray.push(arr[i]);
		}
	}

	return newArray;
}

function filterConditions(item, index, array) {
	if (item[0] === 'M') { //first letter of current name is 'M'
		return true;
	}

	return false;
}

console.log(filter(names, filterConditions));