const lat = 33.1581;
const lon = -117.3506;
const apiKey = '53f08f4aed81ac6ae9222e0ab578f708';
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const weather = document.querySelector('#weather');

async function apiFetch()
{
    const weatherResponse = await fetch(weatherUrl);
    if (weatherResponse.ok) {
        const weatherData = await weatherResponse.json();
        const forecastResponse = await fetch(forecastUrl);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            GetWeather(weatherData, forecastData);
        }
    }
}

function GetWeather(weatherData, forecastData) {
// Weather
    var temperature = weatherData.main.temp;
    var icon = weatherData.weather[0].icon;
    var description = weatherData.weather[0].description;
    var humidity = weatherData.main.humidity;

    var weatherSection = document.createElement('section');
    weatherSection.classList.add('main', 'weather', 'card');
    weatherSection.innerHTML = `
        <h2>Today's Weather</h2>
        <p>${temperature}&degF</p>
        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}">
        <p>${description}</p>
        <p>Humidity: ${humidity}%</p>`;
    weather.appendChild(weatherSection);

// Forecast
    var forecast = document.createElement('section');
    forecast.innerHTML = `<h2>3 Day Forecast</h2>`
    for (let i = 1; i < 4; i++) {
        var forecastInfo = forecastData.list[i * 8];
        var date = new Date(forecastInfo.dt * 1000);
        date.setHours(9, 0, 0, 0);
        var formattedDate = date.toLocaleString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true });
        var forecastDescription = forecastInfo.weather[0].description;
        var forecastIcon = forecastInfo.weather[0].icon;

        var forecastSection = document.createElement('section');
        forecastSection.classList.add('card', 'forecast');
        forecastSection.innerHTML = `
            <h3>${formattedDate}</h3>
            <img src="https://openweathermap.org/img/wn/${forecastIcon}.png" alt="${forecastDescription}">
            <p>${forecastDescription}</p>`;
        forecast.appendChild(forecastSection);
        weatherSection.appendChild(forecast);
    }
}

apiFetch();

const drinksOrdered = document.querySelector('#drinksOrdered');
drinksOrdered.textContent = parseInt(localStorage.getItem('drinkCounter'));