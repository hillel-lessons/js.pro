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

    function symStr(s, sc) {
        if (sc) {
            --sc;
            allSymbols += symbol;
            symStr(s, sc);
            return allSymbols;
        }
    }

    console.log(symStr(symbol, symbolCnt));
    console.log(str);

    return (side === 'left') ? symStr(symbol, symbolCnt) + str : str + symStr(symbol, symbolCnt);
}

console.log(strSymbol("Вася", 10));
// strSymbol("Вася", 10)