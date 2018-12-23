/*
* Привет. Ваше задание на работу с API - вывести все данные о погоде в виде картотки, где будет заголовок - название
* города и текущая температура, а ниже список из всех доступных свойств.
* Используйте https://openweathermap.org/api или любой другой сервис.
*/

let whether = {};

$.ajax("https://api.openweathermap.org/data/2.5/weather?q=Odessa,ua&appid=25ece42b6aa73898b4b9d281106b9e58")
    .done(function(data) {
        whether = data;
    })
    .fail(function() {
        alert("error");
    });

function render(data) {
    $('.whether').addClass('active').empty();

    return `
        <div class="whether__card">
            <div class="whether__card-name">Ваш город: ${data.name}, координаты: ${data.coord.lat}, ${data.coord.lon}</div>
            <div class="whether__card-wind">Скорость ветра: ${data.wind.speed}</div>
            <div class="whether__card-whether">Погода: ${data.weather[0].main}, ${data.weather[0].description}</div></div>
        </div>
    `;
}

document.querySelector('.get-whether').addEventListener('click', function () {
    $('.whether').append(render(whether));
});