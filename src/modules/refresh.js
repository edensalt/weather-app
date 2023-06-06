import { setCity } from "./city";
import RefreshLocation from "./location-refresh";

const Refresh = async function(newCity) {
    const input = document.querySelector("#city-input")
    const temp = document.querySelector("#temp");
    temp.innerHTML = "Loading...";

    const tempPromise = setCity(newCity);
    const data = await tempPromise;

    temp.innerHTML = `${data.current.temp_f}°F`;
    input.setAttribute("placeholder", newCity);
    RefreshLocation(newCity);

}

export default Refresh;