/*
Давайте начнем с этого!
0. Вам нужно сделать конструктор сущности Студент.
1. У Студента есть имя, фамилия, год рождения — это свойства.
2. Есть массив с оценками, это тоже свойство.
3. И есть возможность получить возраст студента и его средний балл — это методы.
4. Еще у всех Студентов есть по 2 массива одинаковой длины - оценки и посещаемость, в нем 20 элементов, изначально они не заполнены, но на 20 элементов.
    Массив в котором отмечается посещаемость, каждый раз когда мы вызываем метод .present() на очередное пустое место в массив записывается true.
    Когда вызываем .absent() — записывается false. Массив это свойство, present и absent — методы.
5. Оценки записываются методом mark();
6. Предусмотрите какую нибудь защиту от того чтоб в массиве посещаемости не могло быть более 20 записей.
7. Ну и последний метод: .summary(), он проверяет среднюю оценку, и среднее посещение(количествоПосещений/количествоЗанятий),
    и если средняя оценка больше 90 а среднее посещение больше 0.9, то метод summary, возвращает строку "Ути какой молодчинка!",
    если одно из этих значений меньше, то — "Норм, но можно лучше", если оба ниже — "Редиска!".

Ну и не забудьте после того как напишите замечательный конструктор, создать пару экземпляров(студентов) и подергать методы.

--------

1. Создать конструктор массива, который будет содержать объекты из прошлого задания на прототипы.
2. Массивы созданные с помощью этого конструктора должны содержать следующие методы:
3. .attendance
    * если вызывается без аргумента, то возвращает среднюю посещаемость группы за одно занятие;
    * если с аргументом — строкой содержащей фамилию одного из студентов, то возвращает его место в рейтинге посещаемости
4. .performance — то же самое, но с оценками
*/

function Student(name, surname, bday) {
    this.name = name;
    this.surname = surname;
    this.bday = bday;

    this.marks = [];
    this.attendance = [];
}

function Group() {}

Group.prototype = Array.prototype;

// Средняя посещаемость группы
Group.prototype.attendance = function(student) {
    if (student) {
        const currentStudent = this.find((item) => {
            return item.surname === student;
        });

        return currentStudent.getPresentAverage();
    } else {
        return this.reduce((acc, current) => {
            return (acc.getPresentAverage() + current.getPresentAverage()) / this.length;
        });
    }
};

// Средняя арифметическое оценок группы
Group.prototype.performance = function(student) {
    if (student) {
        const currentStudent = this.find((item) => {
            return item.surname === student;
        });

        return currentStudent.getAverage();
    } else {
        return this.reduce((acc, current) => {
            return (acc.getAverage() + current.getAverage()) / this.length;
        });
    }
};

// Получить возраст
Student.prototype.getAge = function () {
    return new Date().getFullYear() - this.bday;
};

// Среднее арифметическое оценки
Student.prototype.getAverage = function () {
    const sum = this.marks.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    });

    return sum / this.marks.length;
};

// Присутствие
Student.prototype.present = function () {
    (this.marks.length < 20) ? this.attendance.push(1) : alert('Очередь заполнена');
};

// Отсутствие
Student.prototype.absent = function () {
    (this.marks.length < 20) ? this.attendance.push(0) : alert('Очередь заполнена');
};

// Поставить оценку
Student.prototype.setMark = function (mark) {
    mark = mark || 0;

    if (this.marks.length < 20) {
        this.marks.push(parseInt(mark))
    } else {
        alert('Стек для оценок заполнен');
    }
};

// Среднее арифметическое посещений
Student.prototype.getPresentAverage = function () {
    const allPresent = this.attendance.filter(function (item) {
        return item > 0;
    });

    return allPresent.length / this.attendance.length;
};

// Общая сводка
Student.prototype.getSummary = function () {
    if (this.getAverage() >= 90 && this.getPresentAverage() >= 0.9) {
        return 'Ути какой молодчинка!';
    }
    else if (this.getAverage() < 90 && this.getPresentAverage() < 0.9) {
        return 'Редиска!';
    }
    else if (this.getAverage() < 90 || this.getPresentAverage() < 0.9) {
        return 'Норм, но можно лучше';
    }
};

const s1 = new Student('Denis', 'Lubchenko', 29);

s1.setMark(90);
s1.setMark(90);
s1.setMark(90);
s1.setMark(90);

s1.present();
s1.present();
s1.present();
s1.absent();

const s2 = new Student('Vasiliy', 'Pupkin', 22);

s2.setMark(50);
s2.setMark(50);
s2.setMark(50);
s2.setMark(50);

s2.present();
s2.present();
s2.absent();
s2.absent();

g1 = new Group();
g1.push(s1);
g1.push(s2);

console.log(g1);
console.log(g1.attendance());
console.log(g1.attendance('Lubchenko'));
console.log(g1.performance());
console.log(g1.performance('Lubchenko'));
