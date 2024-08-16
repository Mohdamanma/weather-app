const apiKey = "8b5012b4e52c4fb0a0180cf4f5e1ba27";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const input = document.querySelector(".search input");
const inputBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    error.style.display = "block";
  } else {
    const data = await response.json();
    console.log(data.main.name);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (input.value == data.main.name) {
    } else {
      error.style.display = "block";
    }

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    weather.style.display = "block";
    error.style.display = "none";

  }
}

inputBtn.addEventListener("click", () => {
  checkWeather(input.value);
  console.log(input.value);
});
