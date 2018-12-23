let arr = [1, [1, 2, 3, 5], 2, 3, '123'];
let arr2 = newArr(arr);
arr[0] = 'Привет';
arr2[1][0] = 'Новый привет';

function newArr(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                console.log(newArr[i]);
                //console.log(arr[i][j]);
            }
        }

        newArr[i] = arr[i];
    }

    return newArr;
}

console.log('arr1', arr);
console.log('arr2', arr2);