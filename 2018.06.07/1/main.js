/*
* Поиск символа в строке
*/

let question = prompt('Введите слово');
let symbol = false;

for (let i = 0; i < question.length; i++) {
	if (question[i] === 'l') {
        symbol = true;
        break;
	}
}

if (symbol) {
	console.log('true');
}
else {
    console.log('false');
}