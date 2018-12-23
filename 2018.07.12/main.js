// Найти кол-во нечетных положительных чисел

const arr = [-5, 10, 8, 1, -2, 0, -3, 3];

// 1
function findNegativeNums(array) {
    let count = 0;

    for (let item of array) {
        if (item > 0 && item % 2 !== 0) {
            count++;
        }
    }

    return count;
}

// 2
function findPositiveNums(array) {
    let count = 0;

    for (let item of array) {
        if (item > 0 && item % 2 === 0) {
            count++;
        }
    }

    return count;
}

// 3
function sumNegativeNums(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 !== 0) {
            sum += parseInt(array[i]);
        }
    }

    return sum;
}

// 4
function sumPositiveNums(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 === 0) {
            sum += array[i];
        }
    }

    return sum;
}

// 5
function findCompositionNums(array) {
    let composition = 1;

    for (let item of array) {
        if (item > 0) {
            composition *= item;
        }
    }

    return composition;
}

// 6
function findMultiplicity4(array) {
    let count = 0;

    for (let item of array) {
        if (item > 1 && item % 4 === 0) {
            count++;
        }
    }

    return count;
}

// 7
function findMaxElement(array) {
    const max = Math.max(...array);

    console.log('Исходный массив ', array);

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== max) {
            console.log('Index ', i);
            console.log('Item', array[i]);
            console.log('--------');
            array.splice(i, 1);
            //i--;
        }
    }

    return array;
}

// 8
function findDifference(array) {
    let arr = [];
    let arr2 = [9, -6, 9, 0, -1, 0, -2, 2];

    for (let i = 0; i < arr2.length; i++) {
        arr[i] = array[i] - arr2[i];
    }

    return arr;
}

// console.log('1. Количество нечетных положительных элементов', findNegativeNums(arr));
// console.log('2. Количество четных положительных элементов', findPositiveNums(arr));
// console.log("3. Сумма четных положительных чисел", sumPositiveNums(arr));
// console.log("4. Сумма нечетных положительных чисел", sumNegativeNums(arr));
// console.log("5. Произведение положительных элементов", findCompositionNums(arr));
// console.log("6. Количество элементов кратные 4", findMultiplicity4(arr));
console.log("7. Найти самое большое значение", findMaxElement(arr));
//console.log("8. Разность двух массивов", findDifference(arr));


