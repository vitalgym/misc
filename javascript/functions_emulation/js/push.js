var names = ['Joe', 'Michael', 'John', 'Jane'];

//push emulation
function push(arr, newElement) {
	arr[arr.length] = newElement;
}

console.log(names);
push(names, 'Roy');
console.log(names);