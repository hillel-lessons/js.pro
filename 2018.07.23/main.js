/*
написать функцию generateList(array)
принимает массив из чисел и массивов чисел, например [1,2, [1.1,1.2,1.3] ,3]
нужно сгенерировать список из елементов,
а если в массиве встречается массив то делать вложенный список
*/

const arr = [1,2, [1.1,1.2,1.3] ,3];

function generateList(array) {
    const ul = document.createElement('ul');

    ul.setAttribute("class", "dynamic-ul");

    array.forEach((item) => {
        const li = document.createElement('li');
        const liText = document.createTextNode(item);

        if (Array.isArray(item)) {
            const subUl = document.createElement('ul');
            subUl.setAttribute("class", "sub-list");

            item.forEach((subItem) => {
                const subLi = document.createElement('li');
                const liText = document.createTextNode(subItem);

                subLi.appendChild(liText);
                subUl.appendChild(subLi);
            });

            li.appendChild(subUl);
        }
        else {
            li.appendChild(liText);
        }

        ul.appendChild(li);
    });

    document.body.querySelector('main').appendChild(ul);
}

generateList(arr);