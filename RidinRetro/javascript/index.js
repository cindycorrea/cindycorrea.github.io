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

            img.setAttribute('src', '../images/' + rentals[i].picture);
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