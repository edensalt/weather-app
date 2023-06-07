import getWeather from "../modules/weather-data";
import RefreshLocation from "../modules/location-refresh";
import RefreshCurrentWeather from "../modules/current-refresh";
import RefreshCurrentDate from "../modules/date-refresh";
import RefreshForecast from "../modules/forecast-refresh";

const InitWeather = async function (city) {
  try {

    const parent = document.querySelector("#parent");
    const measurement = parent.getAttribute("temp");

    RefreshLocation(city);
    RefreshCurrentWeather(city, measurement);
    RefreshCurrentDate(city);
    RefreshForecast(city, measurement);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default InitWeather;
