const students = [
    {
        firstName: 'Oleg',
        classRoom: '1a'
    },
    {
        firstName: 'Ivan',
        classRoom: '6b'
    },
    {
        firstName: 'Tanya',
        classRoom: '1a'
    },
    {
        firstName: 'Denis',
        classRoom: '6b'
    },
    {
        firstName: 'Artem',
        classRoom: '1a'
    },
    {
        firstName: 'Dima',
        classRoom: '6b'
    },
];

const result = students.reduce((prev, current) => {
    console.log(current);
    if (!prev[current.classRoom]) {
        prev[current.classRoom] = [];
        prev[current.classRoom].push(current.firstName);
    } else {
        prev[current.classRoom].push(current.firstName);
    }

    return prev;
}, {});

console.log(result);