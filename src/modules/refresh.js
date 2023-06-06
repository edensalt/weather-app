import RefreshCurrentWeather from "./current-refresh";
import RefreshCurrentDate from "./date-refresh";
import RefreshForecast from "./forecast-refresh";
import RefreshLocation from "./location-refresh";

const Refresh = async function(newCity) {

    RefreshLocation(newCity);
    RefreshCurrentWeather(newCity);
    RefreshCurrentDate(newCity);
    RefreshForecast(newCity);

}

export default Refresh;