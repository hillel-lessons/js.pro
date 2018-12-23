const array = [1, 2, 3, 4];

function arrayToJSON(arr) {
    let tempArr = "";
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (count < arr.length - 1) {
            //tempArr +=
        }

        count++;
    }

    return "[" + tempArr + "]";

    //return "[" + arr.toString() + "]";
}

console.log(arrayToJSON(array));