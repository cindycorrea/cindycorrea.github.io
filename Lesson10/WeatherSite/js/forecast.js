const weatherAPI = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=1ad91da0351622e04f82f3950739cdaa";


fetch(weatherAPI)
.then(function (response) {
    return response.json();
})
    .then((jsObject) => {
            console.log(jsObject); 
                const list = jsonObject['list.array'];
                var timeStamp = ['18:00:00'];
                for (let i = 0; i < list.length; i++) {
                    if (timeStamp.includes(forecast[i].list)) {
                        //do something now that you have the town name
                        //create the elements
                        let card = document.createElement('div');
                        let day = document.createElement('span');
                        let icon = document.createElement('img');
                        let conditions = document.createElement('span');

                        //where do I get the information for the elements?
                        day.textContent = list[i].name;
                        icon.setAttribute('src', 'http://openweathermap.org/img/wn/' + jsObject.list[0].weather[0].icon + '.png');
                        icon.setAttribute('alt', jsObject.list[0].weather.description);
                        conditions.textContent = kelvinToF(jsObject.list[0].main.temp) + "\u00B0F";

                        //where do I put the elements?
                        card.appendChild(day);
                        card.appendChild(icon);
                        card.appendChild(conditions);

                        //where do I put the elements in the document?
                        document.querySelector('div.forecast').appendChild(card);
                    }
                }
    });

        function kelvinToF(kelvin) {
            return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
        }