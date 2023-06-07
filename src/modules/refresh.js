import RefreshCurrentWeather from "./current-refresh";
import RefreshCurrentDate from "./date-refresh";
import RefreshForecast from "./forecast-refresh";
import RefreshLocation from "./location-refresh";

const Refresh = async function(newCity) {

    const parent = document.querySelector("#parent");
    const measurement = parent.getAttribute("temp");

    RefreshLocation(newCity);
    RefreshCurrentWeather(newCity, measurement);
    RefreshCurrentDate(newCity);
    RefreshForecast(newCity, measurement);

}

export default Refresh;