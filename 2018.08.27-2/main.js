/*
* 1. Сделать метод lenght, который будет считать количество свойств у объекта
* 2.
*/

function User(name, lastname) {
    this.name = name;
    this.lastname = lastname;
}

User.prototype.length = function () {
    let count = 0;

    for (let i in this) {
        if (this.hasOwnProperty(i)) {
            count++;
        }
    }

    return count;
};

const arr = [5, 5, 5, 5];

arr.average = function () {
    const isAllNumbers = this.some(function (item) {
        return !parseInt(item);
    });

    if (!isAllNumbers) {
        let num = this.reduce((accumulator, currentValue) => {
            return (accumulator + currentValue);
        });
        
        return num / this.length;
    } else {
        alert('Так не честно (');
    }
};


const user1 = new User('Вася', 'Пупкин');
//console.log(user1.length());

console.log(arr.average());