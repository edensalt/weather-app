import getWeather from "./weather-data";
import { format, parse } from "date-fns";
import load from "../images/load.png";

const ForecastLayout = async function () {
  const parent = document.querySelector("#forecast");

  parent.innerHTML = "";

  const dayArray = ["Today", "Tomorrow", "Next Day"];

  for (let i = 0; i < 3; i++) {
    const div = document.createElement("div");
    div.setAttribute("index", i);
    div.classList.add("forecast-div");

    const header = document.createElement("h3");
    header.innerHTML = dayArray[i];

    const fullDisplay = document.createElement("div");
    fullDisplay.classList.add("full-forecast");

    const date = document.createElement("div");
    date.setAttribute("id", `forecast-date-${i}`);
    const forecastDisplay = document.createElement("div");
    forecastDisplay.classList.add("forecast-display");

    const icon = document.createElement("div");
    icon.classList.add("icon");
    const img = document.createElement("img");
    img.setAttribute("id", `forecast-img-${i}`);
    const details = document.createElement("div");
    details.classList.add("details");
    const hl = document.createElement("div");
    hl.setAttribute("id", `forecast-hl-${i}`);
    const description = document.createElement("div");
    description.setAttribute("id", `forecast-description-${i}`);

    const sunrise = document.createElement("div");
    sunrise.classList.add("sunrise");
    const sunriseIcon = document.createElement("div");
    sunriseIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunrise"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg>`;
    const sunriseTime = document.createElement("div");
    sunriseTime.setAttribute("id", `forecast-risetime-${i}`);
    const sunset = document.createElement("div");
    sunset.classList.add("sunset");
    const sunsetIcon = document.createElement("div");
    sunsetIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunset"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline></svg>`;
    const sunsetTime = document.createElement("div");
    sunsetTime.setAttribute("id", `forecast-settime-${i}`);

    parent.appendChild(div);

    div.appendChild(header);
    div.appendChild(fullDisplay);

    fullDisplay.appendChild(date);
    fullDisplay.appendChild(forecastDisplay);

    forecastDisplay.appendChild(icon);
    icon.appendChild(img);
    forecastDisplay.appendChild(details);
    details.appendChild(hl);
    details.appendChild(description);

    fullDisplay.appendChild(sunrise);
    sunrise.appendChild(sunriseIcon);
    sunrise.appendChild(sunriseTime);
    fullDisplay.appendChild(sunset);
    sunset.appendChild(sunsetIcon);
    sunset.appendChild(sunsetTime);
  }
};

const DateReformat = function (date) {
  const dateString = date;
  const dateObj = parse(dateString, "yyyy-MM-dd", new Date());
  const formattedDate = format(dateObj, "ccc, LLLL d");
  return formattedDate;
};

const RefreshForecast = async function (city) {
  await ForecastLayout();

  for (let i = 0; i < 3; i++) {
    const date = document.querySelector(`#forecast-date-${i}`);
    const img = document.querySelector(`#forecast-img-${i}`);
    const hl = document.querySelector(`#forecast-hl-${i}`);
    const description = document.querySelector(`#forecast-description-${i}`);
    const sunrise = document.querySelector(`#forecast-risetime-${i}`);
    const sunset = document.querySelector(`#forecast-settime-${i}`);

    const textLoad = `<div class="text-loading"><span class="text-load dot-1">.</span><span class="text-load dot-2">.</span><span class="text-load dot-3">.</span></div>`;

    img.src = load;
    img.classList.add("loading");
    date.innerHTML = textLoad;
    hl.innerHTML = textLoad;
    description.innerHTML = textLoad;
    sunrise.innerHTML = textLoad;
    sunset.innerHTML = textLoad;

    let day = i;

    getWeather(city, day)
      .then((value) => {
        const forecastDate = value.forecast.forecastday[day].date;
        date.innerHTML = DateReformat(forecastDate);
        img.src = value.forecast.forecastday[day].day.condition.icon;
        img.classList.remove("loading");
        hl.innerHTML = `${value.forecast.forecastday[day].day.maxtemp_f}°F <span class="low">/ ${value.forecast.forecastday[day].day.mintemp_f}°F</span>`;
        description.innerHTML =
          value.forecast.forecastday[day].day.condition.text;
        sunrise.innerHTML = value.forecast.forecastday[day].astro.sunrise;
        sunset.innerHTML = value.forecast.forecastday[day].astro.sunset;
      })
      // .then(parent.appendChild(temp))
      .catch((error) => {
        description.innerHTML = `Error: ${error}`;
        console.log(error);
      });
  }
};

export default RefreshForecast;
