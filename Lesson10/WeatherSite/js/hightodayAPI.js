const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=1ad91da0351622e04f82f3950739cdaa";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current').textContent = kelvinToF(jsObject.list[0].main.temp) + "\u00B0F";
        document.getElementById('high').textContent = kelvinToF(jsObject.list[0].main.temp_max) + "\u00B0F";
        document.getElementById('low').textContent = kelvinToF(jsObject.list[0].main.temp_min) + "\u00B0F";
        document.getElementById('wind').textContent = (jsObject.list[0].wind.speed).toFixed(0) + " mph";
        document.getElementById('answer').textContent = windChill();
        //const imagesrc = 'http://openweathermap.org/img/wn/' + jsObject.list[0].weather[0].icon + '.png';
        //const desc = jsObject.list[0].weather.description;
        //document.getElementById('imagesrc').textContent = imagesrc;
        //document.getElementById('icon').setAttribute('src', imagesrc);
        //document.getElementById('icon').setAttribute('alt', desc);

    });

function kelvinToF(kelvin) {
    return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
}

function windChill(temp, wind) {
    var temp = parseFloat(document.getElementById("current").innerHTML);
    var wind = parseFloat(document.getElementById("wind").innerHTML);
    if (temp <= 50 && wind >= 3) {
        var windchill = 35.74 + (0.6215 * temp) - 35.75 * (wind ** 0.16) + (0.4275 * temp) * (wind ** 0.16);
        var answer = windchill.toFixed(0);
        return answer + "\u00B0F";
    } else {
        return "N/A";
    }
}