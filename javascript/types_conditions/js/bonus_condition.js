var hour = 12;

if (hour >= 0 && hour < 2) {
	console.log('Сутки только начались');
} else if (hour >= 2 && hour < 5) {
	console.log('Еще рано, можно спать');
} else if (hour >= 5 && hour < 7) {
	console.log('Мам, можно еще чуть-чуть по спать');
} else if (hour >= 7 && hour < 10) {
	console.log('Собираемся в школу');
} else if (hour >= 10 && hour < 14) {
	console.log('Уроки в школе');
} else if (hour >= 14 && hour < 17) {
	console.log('Продленка');
} else if (hour >= 17 && hour < 19) {
	console.log('Дорога домой');
} else if (hour >= 19 && hour < 23) {
	console.log('Урррааа :)');
} else {
	console.log('Время указано неверно');
}