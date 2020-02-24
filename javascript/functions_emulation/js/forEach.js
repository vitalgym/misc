var names = ['Joe', 'Michael', 'John', 'Jane', 'Mary'];
var namesWithConditions = [];

function forEach(arr, fn) {
	for (var i = 0; i < arr.length; i++) {
		fn(arr[i], i, arr);
	}
}

function forEachConditions(item, index, array) {
	if(item[0] === 'M'){ //first letter of current name is 'M'
		namesWithConditions.push(item);
	}
}

forEach(names, forEachConditions);
console.log(namesWithConditions);