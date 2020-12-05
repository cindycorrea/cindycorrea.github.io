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
const requestURL = 'https://www.dropbox.com/s/hfwzol425np3240/rentals.json?dl=0';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    then(function (jsonObject) {
        const rentals = jsonObject['rentals'];
        for (let i = 0; i < rentals.length; i++) {
            let section = document.createElement('section');
            let div = document.createElement('div');
            let img = document.createElement('img');
            let p = document.createElement('p');

            img.setAttribute('src', './images/' + rentals[i].picture);
            img.setAttribute('alt', rentals[i].type + "</br>" + rentals[i].name);
            p.textContent = rentals[i].type + "</br>" + rentals[i].name + "</br>" + rentals[i].capability;

            div.appendChild(img);
            div.appendChild(p);

            section.appendChild(div);

            document.querySelector('div.rentals').appendChild(section);
        }
    });
//end rentals build