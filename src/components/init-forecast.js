import getWeather from "../modules/weather-data";
import RefreshLocation from "../modules/location-refresh";

const InitWeather = function (city) {
  const parent = document.querySelector("#current");

  const weather = document.createElement("div");
  weather.setAttribute("id", "temp");

  weather.innerHTML = "Loading...";

  RefreshLocation(city);

  getWeather(city)
    .then((value) => {
      weather.innerHTML = `${value.current.temp_f}°F`;
    })
    .then(parent.appendChild(weather))
    .catch((error) => {
      weather.innerHTML = `Error: ${error}`;
      console.log(error);
    });

  const forecastParent = document.querySelector("#forecast");

  const today = document.createElement("div");
  today.setAttribute("id", "today");
  today.innerHTML = "loading...";

  getWeather(city)
    .then((value) => {
      today.innerHTML = `Average temp for today, ${value.forecast.forecastday[0].date}, will be ${value.forecast.forecastday[0].day.avgtemp_f}°F`;
    })
    .then(forecastParent.appendChild(today))
    .catch((error) => {
      today.innerHTML = `Error: ${error}`;
      console.log(error);
    });

  const tomorrow = document.createElement("div");
  tomorrow.setAttribute("id", "tomorrow");
  tomorrow.innerHTML = "loading...";

  getWeather(city)
    .then((value) => {
      tomorrow.innerHTML = `Average temp for tomorrow, ${value.forecast.forecastday[1].date}, will be ${value.forecast.forecastday[1].day.avgtemp_f}°F`;
    })
    .then(forecastParent.appendChild(tomorrow))
    .catch((error) => {
      tomorrow.innerHTML = `Error: ${error}`;
      console.log(error);
    });

  const nextDay = document.createElement("div");
  nextDay.setAttribute("id", "next-day");
  nextDay.innerHTML = "loading...";

  getWeather(city)
    .then((value) => {
      nextDay.innerHTML = `Average temp in two days, ${value.forecast.forecastday[2].date}, will be ${value.forecast.forecastday[2].day.avgtemp_f}°F`;
    })
    .then(forecastParent.appendChild(nextDay))
    .catch((error) => {
      nextDay.innerHTML = `Error: ${error}`;
      console.log(error);
    });
};

export default InitWeather;
