/*

Вводим 2 числа. Проверяем какое больше

*/

let num1 = prompt('Введите 1 число');
let num2 = prompt('Введите 2 число');

num1 = parseInt(num1);
num2 = parseInt(num2);

if (isNaN(num1) || isNaN(num2)) {
	alert('Это не число!');
}
else {
	(num1 > num2) ? alert('Num 1 больше Num 2') : (num1 === num2) ? alert('Равны') : alert('Num 2 больше Num 1');

	// if (num1 > num2) {
	// 	alert('Num 1 больше Num 2');
	// }
	// else {
     //    alert('Num 2 больше Num 1');
	// }
}
