const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=1ad91da0351622e04f82f3950739cdaa";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = kelvinToF(jsObject.list[0].main.temp);
        const imagesrc = 'http://openweathermap.org/img/wn/' + jsObject.list[0].weather[0].icon + '.png';
        const desc = jsObject.list[0].weather.description;
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);

    });

function kelvinToF(kelvin) {
    return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
}