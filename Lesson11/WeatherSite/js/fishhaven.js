const weatherAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&units=imperial&appid=1ad91da0351622e04f82f3950739cdaa";

fetch(weatherAPI)
    .then(response => response.json())
    .then(jsObject => {
        //console.log(jsObject);
        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        //console.log(forecast);
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].dt_txt);

            let card = document.createElement('div');
            let dayName = document.createElement('span');
            let icon = document.createElement('img');
            let conditions = document.createElement('span');

            dayName.textContent = weekdays[(d.getDay()) % 7];
            icon.setAttribute('src', 'http://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '.png');
            icon.setAttribute('alt', forecast[day].weather[0].description);
            conditions.textContent = (forecast[day].main.temp).toFixed(0) + "\u00B0F";

            card.appendChild(dayName);
            card.appendChild(icon);
            card.appendChild(conditions);

            document.querySelector('div.forecast').appendChild(card);
            document.getElementById('conditions').textContent = jsObject.list[0].weather[0].main;
            document.getElementById('current').textContent = (jsObject.list[0].main.temp).toFixed(0) + "\u00B0F";
            document.getElementById('humidity').textContent = jsObject.list[0].main.humidity + "%";
            document.getElementById('wind').textContent = (jsObject.list[0].wind.speed).toFixed(0) + " mph";
            document.getElementById('answer').textContent = windChill();
        }
    });

function windChill() {
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


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsObject) {
            const towns = jsObject.towns.filter(x => x.name.includes('Fish Haven'))[0];

            let card = document.createElement('section');
            let h3 = document.createElement('h3');
            let events = document.createElement('ul');
            let item = document.createElement('li');

            h3.textContent = towns.name + " Events";
            item.textContent = towns.events;

            for (let e = 0; e < towns.events.length; e++) {
                let item = document.createElement('li');
                events.appendChild(item);
                item.textContent = towns.events[e];
            };
            console.log(towns.events);

            card.appendChild(h3);

            card.appendChild(events);


            document.querySelector('div.events').appendChild(card);

    });