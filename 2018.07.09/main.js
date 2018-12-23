const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

function indexOf(array, val) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === val) {
            return i;
        }
    }

    return -1;
}

function lastIndexOf(array, val) {
    for (let i = array.length; i--;) {
        if (array[i] === val) {
            return i;
        }
    }

    return -1;
}

console.log(indexOf(arr, -37));
console.log(lastIndexOf(arr, 4));