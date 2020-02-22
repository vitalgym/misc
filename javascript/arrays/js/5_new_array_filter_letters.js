var array = ['Artem', 'Ira', 'Fedor', 'Joe', 'Petr'];

// method 1
function getNamesFor(arr){
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].length < 4) {
			result.push(arr[i]);
		}
		
	}
	
	return result;
}

console.log('(for) array was: ', array);
console.log('(for) array after: ', getNamesFor(array));



// method 2
function getNamesForEach(arr){
	var result = arr.filter(function(item) {
		return item.length < 4;
	});
	
	return result;
}

console.log('(foreach) array after: ', getNamesForEach(array));

