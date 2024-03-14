function weather() {
    const town = document.querySelector('.city'); 
    const icon = document.querySelector('.weather-icon');
    const error = document.querySelector('.weather-error');
    const temperature = document.querySelector('.temperature');
    const description = document.querySelector('.weather-description');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');

    const API = '08f2a575dda978b9c539199e54df03b0';
    let lang = 'en';
    let units = 'metric';


    async function getWeather(cityName) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=${lang}&appid=${API}&units=${units}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            icon.className = 'weather-icon owf';
            icon.classList.add(`owf-${data.weather[0].id}`);
            temperature.textContent = `${data.main.temp}°C`;
            description.textContent = data.weather[0].description;
            wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
            humidity.textContent = `Humidity: ${data.main.humidity}%`
        } catch(e) {
            console.log(e);
        }
    }
    
    town.value = localStorage.getItem('city') || 'Astana';
    getWeather(town.value)

    town.addEventListener('change', () => {
        localStorage.setItem('city', town.value);
        getWeather(town.value)
    });
}

export default weather;