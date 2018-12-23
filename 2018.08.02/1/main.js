const arr = [
    {
        name: 'year',
        value: 2014
    },
    {
        name: 'year',
        value: 2018
    },
    {
        name: 'year',
        value: 2016
    },
    {
        name: 'q',
        value: 1
    },
    {
        name: 'month',
        value: 4
    },
    {
        name: 'q',
        value: 4
    },
    {
        name: 'year',
        value: 2012
    },
    {
        name: 'month',
        value: 12
    }
];

function getSummary(array) {
    return array.reduce(function (prev, obj) {
        // if (prev[obj.name] === obj.name) {
        //     prev[obj.name].push(obj.value);
        // } else {
        //     prev[obj.name] = [];
        //     prev[obj.name].push(obj.value);
        // }
        //
        // return prev;

        if (prev[obj.name]) {
            prev[obj.name].push(obj.name);
        } else {
            prev[obj.name] = [];
        }
    }, {});
}

console.log(getSummary(arr));