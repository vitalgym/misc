var age = 25;

if (typeof age === 'number') {
	if (age >= 18) {
		console.log('Доступ разрешен');
	} else {
		console.log('Доступ запрещен');
	}
} else if (typeof age === 'string') {
	age = Number(age);

	if (typeof age === 'number' && age >= 0) {
		if (age >= 18) {
			console.log('Доступ разрешен');
		} else {
			console.log('Доступ запрещен');
		}
	} else {
		console.log('Вы ввели некорректную строку');
	}
} else {
	console.log('Данный формат данных не поддерживается');
}