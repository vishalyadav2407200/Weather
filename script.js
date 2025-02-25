let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
const getWeatherData = async(city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise  = fetch(FULL_URL);
    const response = await weatherPromise;
    return await response.json();
  }
  const searchCity = async () =>{
    const city=document.getElementById('city-input').value
    const data=  await getWeatherData(city)
    showWeatherData(data)
  }
  console.log(API_KEY);
  showWeatherData = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
  }
