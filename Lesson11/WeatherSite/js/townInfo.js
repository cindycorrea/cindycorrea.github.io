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

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsObject) {
        const towns = jsObject.towns.filter(x => x.name.includes('Preston'))[0];

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


        document.querySelector('aside.events').appendChild(card);

    });

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


        document.querySelector('aside.events').appendChild(card);

    });
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsObject) {
        const towns = jsObject.towns.filter(x => x.name.includes('Soda Springs'))[0];

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


        document.querySelector('aside.events').appendChild(card);

    });