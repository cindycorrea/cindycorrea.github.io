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
                let h3 = document.createElement('h3');
                let motto = document.createElement('h4');
                let founded = document.createElement('p');
                let pop = document.createElement('p');
                let rain = document.createElement('p');
                let photo = document.createElement('img');

                h3.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                founded.textContent = "Year Founded: " + towns[i].yearFounded;
                pop.textContent = "Current Population: " + towns[i].currentPopulation;
                rain.textContent = "Average Rainfall: " + towns[i].averageRainfall + "\"";
                photo.setAttribute('src', towns[i].photo);
                photo.setAttribute('alt', towns[i].name);

                card.appendChild(h3);
                card.appendChild(motto);
                card.appendChild(founded);
                card.appendChild(pop);
                card.appendChild(rain);
                card.appendChild(photo);

                document.querySelector('div.towns').appendChild(card);
            }
        }
    });

    