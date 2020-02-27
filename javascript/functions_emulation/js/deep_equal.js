var object1 = {
	x: undefined,
	name: 'John',
	age: 21,
	isAdmin: true,
	friends: {
		id: 1,
		name: 'Lily',
		more: {
			x: null, 
			y: function() {
				alert('ready to do 2');
			}, 
			z: [10, 'texting', 25]
		},
		list: ['one', 'two', 'three'],
		age: 25,
	},
	doTask: function() {
		alert('ready to do');
		var x = 5;
		var y = 10;
		return x + y;
	},
	hobbyList: ['sport', 'games', 'music', {
		a: 1, 
		b: 'text', 
		c: [1, 2, 3]
	}, 'travel'],
}

var object2 = {
	x: undefined,
	name: 'John',
	age: 21,
	isAdmin: true,
	friends: {
		id: 1,
		name: 'Lily',
		more: {
			x: null, 
			y: function() {
				alert('ready to do 2');
			}, 
			z: [10, 'texting', 25]
		},
		list: ['one', 'two', 'three'],
		age: 25,
	},
	doTask: function() {
		alert('ready to do');
		var x = 5;
		var y = 10;
		return x + y;
	},
	hobbyList: ['sport', 'games', 'music', {
		a: 1, 
		b: 'text', 
		c: [1, 2, 3]
	}, 'travel'],
}

function deepEqual(obj1, obj2) {
	if (obj1 === obj2){
		return true;
	}

	if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
		return false;
	}
	
	if (typeof obj1 === 'object' && typeof obj2 === 'object' &&	Object.keys(obj1).length !== Object.keys(obj2).length) {
		return false;
	}

	for (prop in obj1) {
		if (!(prop in obj2)) {
			return false;
		}
		
		if (typeof obj1[prop] !== typeof obj2[prop]) {
			return false;
		}
		
		if (typeof obj1[prop] === 'object') {
			if ((Array.isArray(obj1[prop]) && Array.isArray(obj2[prop])) || (!Array.isArray(obj1[prop]) && !Array.isArray(obj2[prop]))) { 
				if (!deepEqual(obj1[prop], obj2[prop])) {
					return false;
				}				
			} else {
				return false;
			}
		} else if (typeof obj1[prop] === 'function') {
			if (obj1[prop].toString() !== obj2[prop].toString()) {
				return false;
			}			
		} else {
			if (obj1[prop] !== obj2[prop]) {
				return false;
			}	
		}
	}

	return true;
}

console.log('Is equal: ', deepEqual(object1, object2));