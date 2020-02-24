var names = ['Joe', 'Michael', 'John', 'Jane', 'Mary'];

function map(arr, fn) {
	let newArray = [];
	for (var i = 0; i < arr.length; i++) {
		let newElement = fn(arr[i], i, arr);
		if(newElement){
			newArray.push(newElement);
		}
	}

	return newArray;
}

function mapConditions(item, index, array) {
	if(item[0] === 'M'){ //first letter of current name is 'M'
		return item;
	}
}

console.log(map(names, mapConditions));