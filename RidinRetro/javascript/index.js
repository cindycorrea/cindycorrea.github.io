//Toggle Menu Start
const compressMenu = document.querySelector('.compress');
const mainnav = document.querySelector('.navigation');

compressMenu.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
    if (window.innerWidth > 1000) mainnav.classList.remove('responsive')
};
//End of Toggle Menu

//Start Current Date
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var d = new Date();
var dayName = daynames[d.getDay()];
var monthName = months[d.getMonth()];
var year = d.getFullYear();
var fulldate = dayName + ", " + monthName + ", " + year;
document.getElementById('currentdate').textContent = fulldate;
//End Current Data

//Start last updated
document.getElementById("lastUpdated").textContent = document.lastModified;
//end last updated

//Start rentals build
const requestURL = 'https://raw.githubusercontent.com/cindycorrea/cindycorrea.github.io/master/RidinRetro/data/rentals.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        const rentals = jsonObject['rentals'];
        console.log(rentals);
        for (let i = 0; i < rentals.length; i++) {
            //rental summary start
            let section = document.createElement('section');
            let div = document.createElement('div');
            let img = document.createElement('img');
            let type = document.createElement('p');
            let name = document.createElement('p');
            let capability = document.createElement('p');

            img.setAttribute('src', './images/' + rentals[i].picture);
            img.setAttribute('alt', rentals[i].type + '\n' + rentals[i].name);
            type.textContent = rentals[i].type;
            name.textContent = rentals[i].name;
            capability.textContent = rentals[i].capability;

            section.appendChild(img);
            div.appendChild(type);
            div.appendChild(name);
            div.appendChild(capability);

            section.appendChild(div);

            document.querySelector('div.rentals').appendChild(section);
            //rental summary end

            //prices table start
            let tr = document.createElement('tr');
            let name2 = document.createElement('td');
            let persons = document.createElement('td');
            let walkHalf = document.createElement('td');
            let walkFull = document.createElement('td');
            let resHalf = document.createElement('td');
            let resFull = document.createElement('td');


            name2.textContent = rentals[i].name;
            persons.textContent = rentals[i].person;
            walkHalf.textContent = "$" + rentals[i].whalfday;
            walkFull.textContent = "$" + rentals[i].wfullday;
            resHalf.textContent = "$" + rentals[i].rhalfday;
            resFull.textContent = "$" + rentals[i].rfullday;

            tr.appendChild(name2);
            tr.appendChild(persons);
            tr.appendChild(walkHalf);
            tr.appendChild(walkFull);
            tr.appendChild(resHalf);
            tr.appendChild(resFull);

            document.querySelector('tbody.prices').appendChild(tr);

        }
    });
//end rentals build

//weather start
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&exclude=hourly,minutely&units=imperial&appid=1ad91da0351622e04f82f3950739cdaa"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current').textContent = (jsObject.current.temp).toFixed(0) + "\u00B0F";
        document.getElementById('conditions').textContent = jsObject.current.weather[0].main;
        document.getElementById('humidity').textContent = jsObject.current.humidity + "%";

        //weather end

        //forecast start
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const d = new Date;
        for (let day = 0; day < 3; day++) {

            let tr = document.createElement('tr');
            let dayName = document.createElement('td');
            let current = document.createElement('td');

            dayName.textContent = weekdays[(d.getDay() % 7) + day + 1];
            current.textContent = (jsObject.daily[day].temp.day).toFixed(0) + "\u00B0F";

            tr.appendChild(dayName);
            tr.appendChild(current);

            document.querySelector('table.forecast').appendChild(tr);
        }
    });