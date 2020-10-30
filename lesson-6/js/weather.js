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

//Current Date Start
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
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
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("currentdate").textContent = fulldate;
//End of Current Date


//Pancakes Start
if (d.getDay() == 5) {
    document.getElementById("pancakes").innerHTML = "Saturday = Preston Pancakes in the Park!</br>9:00 a.m. Saturday at the city park pavilion.";
} else {
    document.getElementById("pancakes").style.display = "none";
}
//End of Pancakes