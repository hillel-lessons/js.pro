/*
* Сделать конвертер валют
*/

function converter(num1, currency1, currency2) {
    //let q1 = confirm('Вы хотите продать или купить?');
    let q2 = +prompt('Введите сумму вашего бабла');

    if (!isNaN(q2)) {
        let q3 = prompt('Введите вашу валюту');
        let q4 = prompt('Введите валюту которую хотите получить');
        let result;

        if (q3 === 'grn' ) {

        }

        return result;
    }
    else {
        alert('Вы ввели не число!');
    }



    // currencyBuy = currencyBuy || 'usd';
    // let result;
    // const usd = 26;
    // const eur = 28;
    //
    // if (currencyBuy === 'usd') {
    //     result = num1 * usd;
    // }
    // else if (currencyBuy === 'eur') {
    //     result = num1 * eur;
    // }
    //
    // return result;
}

console.log(converter(100, 'eur'));