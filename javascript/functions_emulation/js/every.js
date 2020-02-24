var names = ['Joe', 'Michael', 'John', 'Jane', 'Mary'];

function every(arr, fn) {
	let error = 0;
	for (var i = 0; i < arr.length; i++) {
		if(!fn(arr[i], i, arr)){
			error++;
		}
	}
	if(error === 0)
		return true;

	return false;
}

function everyConditions(item, index, array) {
	if(item[0] === 'M'){ //first letter of current name is 'M'
		return true;
	}

	return false;
}

console.log(every(names, everyConditions));