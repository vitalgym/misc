var hour = 12;

switch (hour) {
	case 0:
	case 1:
		console.log('Сутки только начались');
		break;
	case 2:
	case 3:
	case 4:
		console.log('Еще рано, можно спать');
		break;		
	case 5:
	case 6:
		console.log('Мам, можно еще чуть-чуть по спать');
		break;				
	case 7:
	case 8:
	case 9:
		console.log('Собираемся в школу');
		break;						
	case 10:
	case 11:
	case 12:
	case 13:
		console.log('Уроки в школе');
		break;					
	case 14:
	case 15:
	case 16:
		console.log('Продленка');
		break;					
	case 17:
	case 18:
		console.log('Дорога домой');
		break;											
	case 19:
	case 20:
	case 21:
	case 22:
	case 23:
		console.log('Урррааа :)');
		break;
	default:
		console.log('Время указано неверно');
}