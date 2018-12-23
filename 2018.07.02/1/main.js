let arr = [1, 2, 3, 'denis', true, [2, 3, 5, 99], 6, 99];

console.table(arr);

for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 99) {
                console.log(`Совпадение найдено на ${i} строке, в подстроке ${j}`);
            }
        }
    }

    if (arr[i] === 99) {
        console.log(`Совпадение найдено на ${i} строке`);
    }
}