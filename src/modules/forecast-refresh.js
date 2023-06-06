import getWeather from "./weather-data";
import { format, parse } from "date-fns";


const ForecastLayout = async function () {
  const parent = document.querySelector("#forecast");

  parent.innerHTML = "";

  const dayArray = ["Today", "Tomorrow", "Next Day"]


  for (let i = 0; i < 3; i++) {
    const div = document.createElement("div");
    div.setAttribute("index", i);
    div.classList.add("forecast-div");

    const header = document.createElement("h3");
    header.innerHTML = dayArray[i];

    const fullDisplay = document.createElement("div");
    
    const date = document.createElement("div");
    date.setAttribute("id", `forecast-date-${i}`)
    const forecastDisplay = document.createElement("div");

    const icon = document.createElement("div");
    icon.classList.add("icon")
    const img = document.createElement("img");
    img.setAttribute("id", `forecast-img-${i}`);
    const details = document.createElement("div");
    details.classList.add("details")
    const hl = document.createElement("div");
    hl.setAttribute("id", `forecast-hl-${i}`)
    const description = document.createElement("div");
    description.setAttribute("id", `forecast-description-${i}`)


    const sunrise = document.createElement("div");
    sunrise.classList.add("sunrise")
    const sunriseIcon = document.createElement("img");
    sunriseIcon.setAttribute("id", `forecast-riseicon-${i}`)
    const sunriseTime = document.createElement("div")
    sunriseTime.setAttribute("id", `forecast-risetime-${i}`)
    const sunset = document.createElement("div");
    sunset.classList.add("sunset");
    const sunsetIcon = document.createElement("img");
    sunsetIcon.setAttribute("id", `forecast-seticon-${i}`)
    const sunsetTime = document.createElement("div")
    sunsetTime.setAttribute("id", `forecast-settime-${i}`)

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

  for (let i = 0; i < 3 ; i++) {


    const date = document.querySelector(`#forecast-date-${i}`);
    const img = document.querySelector(`#forecast-img-${i}`);
    const hl = document.querySelector(`#forecast-hl-${i}`);
    const description = document.querySelector(`#forecast-description-${i}`);
    const sunrise = document.querySelector(`#forecast-risetime-${i}`);
    const sunset = document.querySelector(`#forecast-settime-${i}`);

    description.innerHTML = "...";

    let day = i;

    getWeather(city, day)
    .then((value) => {
        const forecastDate = value.forecast.forecastday[day].date;
        date.innerHTML = DateReformat(forecastDate);
        img.src = value.forecast.forecastday[day].day.condition.icon;
        hl.innerHTML = `${value.forecast.forecastday[day].day.maxtemp_f}°F / ${value.forecast.forecastday[day].day.mintemp_f}°F`
        description.innerHTML = value.forecast.forecastday[day].day.condition.text;
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
