// дуглас крокфорд js сильные стороны

/*
* Создать валютный калькулятор
* 1. Вводим сумму которую хотим поменять в инпут (баксы)
* 2. Выбираем радиокнопкой гривны или евро
* 3. Нажимаем на кнопку и выводим результат
* */

let exchangeRates = [];

$.ajax({
    url: "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",
    success: function(data){

        exchangeRates = data.filter(function (item) {
            console.log(item.cc);
            return item.cc === 'USD';
        });
    }
});

console.log(exchangeRates);
















$('.form').on('submit', function (e) {
    e.preventDefault();

    const currency = parseInt($('#currency').val());
    const currencyType = $('input[type=radio]:checked').val();
    let result = '';

    if (currencyType === 'grn') {
        result = currency * exchangeRates.grn;
    }
    else {
        result = currency * exchangeRates.euro;
    }

    $('.result').append('<p>' + result + '</p>');
});