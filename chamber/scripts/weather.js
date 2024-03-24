// Weather/Forecast
const apiKey = "53f08f4aed81ac6ae9222e0ab578f708";
const lat = 43.826;
const lon = -111.7897;
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

const forecast = document.querySelector('#forecast');
const temperature = document.querySelector('#temperature');
const windSpeed = document.querySelector('#windSpeed');
const windChill = document.querySelector('#windChill');

async function apiFetch()
{
    const response = await fetch(apiURL);
    if (response.ok)
    {
        const data = await response.json();
        GetForecast(data);
        GetWeather(data);
    }
    else
    {
        throw Error(await response.text());
    }

}
// Forecast
function GetForecast(data) 
{  
    for (let i = 1; i <= 3; i++) 
    {
        let forecastInfo = data.list[i * 8];
        let forecastDate = (new Date(forecastInfo.dt * 1000)).toLocaleString('en-US', {weekday: 'long'});
        let forecastTemperature = forecastInfo.main.temp;
        let forecastDescription = forecastInfo.weather[0].description;  
        
        const forecastDiv = document.createElement('div');
        forecastDiv.innerHTML = `<p>${forecastDate}: ${forecastTemperature}&deg;F - ${forecastDescription}</p>`;
        forecast.appendChild(forecastDiv);
    }
}

function GetWeather(data)
{
    let forecastInfo = data.list[0];
    let temperatureNumber = forecastInfo.main.temp;
    let windSpeedNumber = forecastInfo.wind.speed;
    let windChillNumber = (35.74 + (0.6215 * temperatureNumber) - (35.75 * windSpeedNumber ** 0.16) + (0.4275 * temperatureNumber * windSpeedNumber ** 0.16)).toFixed(2);    
    
    temperature.textContent = temperatureNumber;
    windSpeed.textContent = windSpeedNumber;
    windChill.textContent = windChillNumber;
}

apiFetch();

