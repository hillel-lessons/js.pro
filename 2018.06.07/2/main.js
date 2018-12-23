let question = prompt('Введите число');
let steps = 0;

for (let i = 0; i < question.length; i++) {
    if (question[i] % 5) {
        steps++
    }
}

console.log(steps);