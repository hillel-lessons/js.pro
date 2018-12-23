let arr = [1, 2, 3, '123'];

function addElem(arr, elem) {
    arr[arr.length] = elem;
    return arr;
}

console.log(addElem(arr, 'привет'));