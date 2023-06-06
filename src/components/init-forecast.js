import getWeather from "../modules/weather-data";
import RefreshLocation from "../modules/location-refresh";
import RefreshCurrentWeather from "../modules/current-refresh";
import RefreshCurrentDate from "../modules/date-refresh";

const InitWeather = async function (city) {

  try {
    RefreshLocation(city);
    RefreshCurrentWeather(city);
    RefreshCurrentDate(city);
  
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
  } catch (error) {
    console.log(error);
    throw error;
  }

  
};

export default InitWeather;
