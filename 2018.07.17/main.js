/*
* Создать массив объектов. В каждом объекте должа содержаться информация о человеке: имя, пол, год рождения. Объектов должно быть 5-10.
1 - посчитать средний возраст
2 - отпределить представителей какого пола больше
* */

const arr = [
    {
        name: 'Victor',
        sex: 'Man',
        birth: 1990
    },
    {
        name: 'Denis',
        sex: 'Man',
        birth: 1988
    },
    {
        name: 'Olga',
        sex: 'Woman',
        birth: 1992
    },
    {
        name: 'Leonid',
        sex: 'Woman',
        birth: 1994
    },
    {
        name: 'Alexandra',
        sex: 'Woman',
        birth: 1955
    },
    {
        name: 'Olga',
        sex: 'Woman',
        birth: 1992
    }
];

// 1
function averageAge(array) {
    const currentYear = new Date().getFullYear();

    const getAllBirthdays = array.map((user) => currentYear - user.birth);
    const birthdaysSum = getAllBirthdays.reduce((accumulator, currentValue) => accumulator + currentValue);

    return Math.round(birthdaysSum / array.length);
}

// 2
function sex(array) {
    const manCount = array.filter(function (user) {
        return user.sex === 'Man';
    });

    const womanCount = array.filter(function (user) {
        return user.sex === 'Woman';
    });

    if (manCount.length > womanCount.length) {
        return 'Мужчин больше чем женщин';
    }
    else if (manCount.length === womanCount.length) {
        return 'Поровну';
    }
    else {
        return 'Женщин больше чем мужчин';
    }
}

console.log(averageAge(arr));
//console.log(sex(arr));