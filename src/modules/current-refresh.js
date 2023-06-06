import getWeather from "./weather-data";

const CurrentWeatherLayout = async function () {
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
  buttons.setAttribute("id", "temp-btns");

  const fahrenheit = document.createElement("button");
  fahrenheit.setAttribute("id", "fahrenheit");
  fahrenheit.innerHTML = "°F";

  const celsius = document.createElement("button");
  celsius.setAttribute("id", "celsius");
  celsius.innerHTML = "°C";

  const description = document.createElement("div");
  description.setAttribute("id", "description");

  parent.appendChild(icon);
  parent.appendChild(temp);
  icon.appendChild(img);
  parent.appendChild(endInfo);
  endInfo.appendChild(buttons);
  buttons.appendChild(fahrenheit);
  buttons.appendChild(celsius);
  endInfo.appendChild(description);
};

const RefreshCurrentWeather = async function (city) {
  await CurrentWeatherLayout();

  const img = document.querySelector("#icon-img");
  const temp = document.querySelector("#temp");
  const description = document.querySelector("#description");

  temp.innerHTML = "...";
  description.innerHTML = "...";

  getWeather(city)
    .then((value) => {
      temp.innerHTML = value.current.temp_f;
      img.src = value.current.condition.icon;
      description.innerHTML = `${value.current.condition.text}, feels like ${value.current.feelslike_f}°F.`;
      console.log(icon.src);
    })
    // .then(parent.appendChild(temp))
    .catch((error) => {
      temp.innerHTML = `Error: ${error}`;
      console.log(error);
    });
};

export default RefreshCurrentWeather;
