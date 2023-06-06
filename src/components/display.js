import getWeather from "../modules/weather";

const Weather = function (city) {
  const parent = document.querySelector("#parent");

  const weather = document.createElement("div");
  weather.setAttribute("id", "temp");

  getWeather(city)
    .then((value) => {
      weather.innerHTML = value;
    })
    .then(parent.appendChild(weather))
    .catch((error) => {console.log(error)});
};

export default Weather;
