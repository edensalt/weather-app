import { setCity } from "./city";
import RefreshCurrentWeather from "./current-refresh";
import RefreshCurrentDate from "./date-refresh";
import RefreshLocation from "./location-refresh";

const Refresh = async function(newCity) {
    // const input = document.querySelector("#city-input")
    const temp = document.querySelector("#temp");
    temp.innerHTML = "Loading...";

    // const tempPromise = setCity(newCity);
    // const data = await tempPromise;

    // temp.innerHTML = `${data.current.temp_f}°F`;
    // input.setAttribute("placeholder", "Enter new ");

    RefreshLocation(newCity);
    RefreshCurrentWeather(newCity);
    RefreshCurrentDate(newCity);

}

export default Refresh;