/*
1. Напишите функцию которая принимает число, и возвращает разницу натуральных чисел до заданного числа, то есть если вы передали число 3, то результат будет -4, потому что 1-2-3=-4
Решите циклом и рекурсивно.
2. Создаем именованное функциональное выражение, аргументом передаем число. Функция возвращает "1", если это число является точной степенью двойки, и "0" — если не является. Операцией возведения в степень пользоваться нельзя => используем рекурсию.
Точная степень двойки — 1, 2, 4, 8, 16, 32...

И почитайте https://learn.javascript.ru/javascript-specials
*/

// 1
function difNum(num) {
    let result = 0;

    function getDiff(r, c) {
        if (c < num) {
            c++;
            r -= c;

            getDiff(r, c);
        }
        else {
            result = r;
        }
    }

    getDiff(1, 1);

    return result;
}

console.log('difNum: ', difNum(3));


// 2
function nameExp(num) {
    let num1,
        num2;

    function pow(x, power) {
        power = power || 2;

        if (power !== 1) {
            return x * pow(x, power - 1);
        }
        else {
            return x;
        }
    }

    num1 = pow(num, 4);
    num2 = pow(2);

    return (num1 === num2) ? 1 : 0;
}

console.log('nameExp: ', nameExp(2));