const temperature = document.getElementById('temperature');
const windspeed = document.getElementById('windspeed');
const windchill = document.getElementById('windchill');

let temperatureNumber = 28;
let windspeedNumber = 10;
let windchillNumber = (35.74 + (0.6215 * temperatureNumber) - (35.75 * windspeedNumber ** 0.16) + (0.4275 * temperatureNumber * windspeedNumber ** 0.16)).toFixed(2);

temperature.textContent = temperatureNumber;
windspeed.textContent = windspeedNumber;
windchill.textContent = windchillNumber;

