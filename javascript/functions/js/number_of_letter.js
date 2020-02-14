const MY_STRING = 'adfsdfdsaffasfaaaaasfsfasfdsf';
var letterToSearch = 'a';

// "for" cycle
var result = countWithFor(MY_STRING, letterToSearch);
console.log('for cycle result: ' + result);

// "while" cycle
result = countWithWhile(MY_STRING, letterToSearch);
console.log('while cycle result: ' + result);

// "do...while" cycle
result = countWithDoWhile(MY_STRING, letterToSearch);
console.log('do-while cycle result: ' + result);

function countWithFor(searchString, letter) {

	var sum = 0;
	for (var i = 0; i < searchString.length; i++) {
		if(searchString[i] === letter) {
			sum++;
		}
	}

	return sum;
}

function countWithWhile(searchString, letter) {

	var sum = 0;
	var i = 0;
	while (i < searchString.length) {
		if(searchString[i] === letter) {
			sum++;
		}
		i++;
	}

	return sum;
}


function countWithDoWhile(searchString, letter) {

	var sum = 0;
	var i = 0;
	do {
		if(searchString[i] === letter) {
			sum++;
		}
		i++;
	} while (i < searchString.length);

	return sum;
}