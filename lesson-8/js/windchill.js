var temp = parseFloat(document.getElementById("temp").innerHTML);
var wind = parseFloat(document.getElementById("wind").innerHTML);
if (temp <= 50 && wind >= 3) {
    var windchill = 35.74 + (0.6215 * temp) - 35.75 * (Math.pow(wind, 0.16)) + (0.4275 * temp) * (Math.pow(wind, 0.16));
    var answer = windchill.toFixed(0);
    document.getElementById("answer").innerHTML = answer + "&#730;F";
} else {
    document.getElementById("answer").innerHTML = "N/A";
}