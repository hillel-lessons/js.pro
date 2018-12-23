/*
* 1 - Строка
* 2 - Длина строки
* 3 - Символ заполнения
* 4 - С какой стороны заполнять "Символ заполнения"
*/

function strSymbol(str, strLength, symbol, side) {
    side = side || 'left';
    symbol = symbol || '*';
    let allSymbols = '';
    let symbolCnt = parseInt(strLength - str.length);

    if (str.length < strLength) {
        for(let i = 0; i < symbolCnt; i++) {
            allSymbols += symbol;
        }

        return (side === 'left') ? allSymbols + str : str + allSymbols;
    }

    return str;
}

console.log(strSymbol("Вася", 10));