import getWeather from "./weather-data";
import load from "../images/load.png";
import GenerateButtons from "../components/buttons";

const CurrentWeatherLayout = async function (measurement) {
  const parent = document.querySelector("#current-weather");

  parent.innerHTML = "";

  const icon = document.createElement("div");
  icon.setAttribute("id", "icon");

  const img = document.createElement("img");
  img.setAttribute("id", "icon-img");

  const temp = document.createElement("div");
  temp.setAttribute("id", "temp");
  temp.setAttribute("deg", "f");

  const endInfo = document.createElement("div");
  endInfo.setAttribute("id", "temp-info");

  const buttons = document.createElement("div");
  buttons.classList.add("temp-btns");

  const description = document.createElement("div");
  description.setAttribute("id", "description");

  parent.appendChild(icon);
  parent.appendChild(temp);
  icon.appendChild(img);
  parent.appendChild(endInfo);
  endInfo.appendChild(buttons);
  GenerateButtons(measurement);
  endInfo.appendChild(description);
};

const RefreshCurrentWeather = async function (city, measurement) {
  await CurrentWeatherLayout(measurement);

  const img = document.querySelector("#icon-img");
  const temp = document.querySelector("#temp");
  const description = document.querySelector("#description");

  const textLoad = `<div class="text-loading"><span class="text-load dot-1">.</span><span class="text-load dot-2">.</span><span class="text-load dot-3">.</span></div>`;

  temp.innerHTML = textLoad;
  description.innerHTML = textLoad;
  img.src = load;
  img.classList.add("loading");

  getWeather(city)
    .then((value) => {
      img.src = value.current.condition.icon;
      img.classList.remove("loading");
      if (measurement === "celsius") {
        temp.innerHTML = value.current.temp_c;
        description.innerHTML = `${value.current.condition.text}, feels like ${value.current.feelslike_c}°C.`;

      } else {
        temp.innerHTML = value.current.temp_f;
        description.innerHTML = `${value.current.condition.text}, feels like ${value.current.feelslike_f}°F.`;
      }
    })
    // .then(parent.appendChild(temp))
    .catch((error) => {
      temp.innerHTML = `Error: ${error}`;
      console.log(error);
    });
};

export default RefreshCurrentWeather;
