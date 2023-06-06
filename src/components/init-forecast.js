import getWeather from "../modules/weather-data";
import RefreshLocation from "../modules/location-refresh";
import RefreshCurrentWeather from "../modules/current-refresh";
import RefreshCurrentDate from "../modules/date-refresh";
import RefreshForecast from "../modules/forecast-refresh";

const InitWeather = async function (city) {
  try {
    RefreshLocation(city);
    RefreshCurrentWeather(city);
    RefreshCurrentDate(city);
    RefreshForecast(city);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default InitWeather;
