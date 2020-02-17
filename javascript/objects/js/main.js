var user = {
	name: 'Dima',
	age:25,
	eyesColor: 'green',
	isAdmin: false,
	role: 2
}

// 1. Сreate copy of object
function copy(origin){
	var newObject = {};
	for(var key in origin) {
		newObject[key] = origin[key];
	}
	
	return newObject;
}

var copyUser = copy(user);
console.log(copyUser);



// 2. Сompare 2 objects by values and number of keys
function isEqual(first, second){
	if(Object.values(first).length !== Object.values(second).length){
		return false;
	}
	for(var key in first) {
		if(first[key] !== second[key]){
			return false;
		}
	}

	return true;
}

console.log('Equal: ' + isEqual(user, copyUser));



// 3. Сreate copy of object and modify it
function copyWithModify(origin, name, age, eyesColor) {
	var newObject = {};
	for(var key in origin) {
		if (key === 'name') {
			newObject[key] = name;
		} else if(key === 'age') {
			newObject[key] = age;
		} else if(key === 'eyesColor') {
			newObject[key] = eyesColor;
		} else{
			newObject[key] = origin[key];
		}
	}
	
	return newObject;
}

var copyModifiedUser = copyWithModify(user, 'Max', 20, 'red');
console.log(copyModifiedUser);