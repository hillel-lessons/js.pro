/*
* 1. Найти сумму всех элементов
* 2. Получить массив из отрицательных чисел
* 3. Отсортировать по убыванию *
* 4. Получить новый массив в обратном порядке *
* 5. Получить новый масив из эл-тов деленных на 5
* 6.
*/

const arr = [100, 50, 10, -5, -30, 70, 20, -15, 5];
const str = '100, -50, 10, -5, -30, 70, 20, -15, 5';

// 1
function sum(array) {
    return array.reduce((a, b) => a + b);
}

//2
function negativeNums(array) {
    return newArr = array.filter((item) => item < 0);
}

// 3
function sortReverse(array) {
    return array.sort(function (a, b) {
        if (a < b) {
            return 1;
        }
        else {
            return -1;
        }
    });
}

// 4
function sortReverseNew(array) {
    return newArr = array.slice().reverse();
}

// 5
function divisionArr(array) {
    return newArr = array.map(function (item) {
        return item / 5;
    });
}

// 6
function evenArr(str) {
    return newArr = str.split(',').map((item) => {
        if (parseInt(item) % 2 === 0 && parseInt(item) > 0) {
            return parseInt(item);
        }
    });
}

//console.log(negativeNums(arr));
//console.log(sortReverse(arr));
//console.log(sortReverseNew(arr));
//console.log(divisionArr(arr));

//console.log(sum(arr));
console.log(evenArr(str));