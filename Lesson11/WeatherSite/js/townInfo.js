const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        var townNames = ['Fish Haven', 'Preston', 'Soda Springs'];
        for (let i = 0; i < towns.length; i++) {
            if (townNames.includes(towns[i].name)) {
                //do something now that you have the town name
                let card = document.createElement('section');
                let data = document.createElement('div');
                let h3 = document.createElement('h3');
                let motto = document.createElement('h4');
                let founded = document.createElement('p');
                let pop = document.createElement('p');
                let rain = document.createElement('p');
                let photo = document.createElement('img');
                
                h3.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                pop.textContent = "Current Population: " + towns[i].currentPopulation;
                rain.textContent = "Average Rainfall: " + towns[i].averageRainfall + "\"";
                photo.setAttribute('src', './images/' + towns[i].photo);
                photo.setAttribute('alt', towns[i].name);

                data.appendChild(h3);
                data.appendChild(motto);
                data.appendChild(founded);
                data.appendChild(pop);
                data.appendChild(rain);

                card.appendChild(data);
                card.appendChild(photo);

                document.querySelector('div.towns').appendChild(card);
            }
        }
    });

    