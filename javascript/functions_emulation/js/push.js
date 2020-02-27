var names = ['Joe', 'Michael', 'John', 'Jane'];

//push emulation
function push(arr) {
	for (var i = 1; i < arguments.length; i++) {
		arr[arr.length] = arguments[i];
	}

	return arr.length;
}

console.log('Array before: ', names);
// original push method returns new length of array
console.log('New length of array: ' + push(names, 'Roy', 'Jones', 'Junior') );
console.log('Array after:  ', names);