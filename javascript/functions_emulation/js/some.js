var names = ['Joe', 'Michael', 'John', 'Jane', 'Mary'];

function some(arr, fn) {
	for (var i = 0; i < arr.length; i++) {
		if(fn(arr[i], i, arr)){
			return true;
		}
	}

	return false;
}

function someConditions(item, index, array) {
	if(item[0] === 'M'){ //first letter of current name is 'M'
		return true;
	}

	return false;
}

console.log(some(names, someConditions));