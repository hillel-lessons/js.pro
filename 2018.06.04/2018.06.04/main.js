/*

если не пн или чт - то надо делать дз
иначе - классная лекция

*/

let question = prompt('Какой сегодня день недели?');

if (question) {
	question = question.toLowerCase();

	// if (question === 'пн' || question === 'чт') {
	// 	alert('Сегодня не надо делать ДЗ');
	// }
	// else if (question === 'вт' || question === 'ср' || question === 'пт') {
	// 	alert('Надо делать ДЗ');
	// }
	// else {
	// 	alert('Так не честно!');
	// }

	switch (question) {
		case 'пн':
		case 'чт':
            alert('Сегодня не надо делать ДЗ');
			break;
		case 'вт':
		case 'ср':
		case 'пт':
            alert('Надо делать ДЗ');
            break;
		default:
            alert('Так не честно!');
	}
}
else {
	alert('Нельзя оставлять пустым');
}
