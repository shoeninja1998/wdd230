const apiKey = "53f08f4aed81ac6ae9222e0ab578f708";
const city = "Rexburg, US"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

const weather = document.querySelector('#weather');
const weatherIcon = document.querySelector('#weatherIcon');

async function apiFetch() {
    try
    {
        const response = await fetch(url);
        if (response.ok)
        {
        const data = await response.json();
// Icon
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = data.weather[0].description;
        weatherIcon.setAttribute('height', '100')
// Temperature
        weather.innerHTML = `${data.main.temp}&deg;F - ${data.weather[0].description}`;
        console.log(data);
        }
        else
        {
            throw Error(await response.text());
        }
    }
    catch (error)
    {
      console.log(error);
    }
}

apiFetch();