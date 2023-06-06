import getWeather from "../modules/weather";

const InitWeather = function (city) {
  const parent = document.querySelector("#forecast");

  const weather = document.createElement("div");
  weather.setAttribute("id", "temp");

  weather.innerHTML = 'loading...';

  getWeather(city)
    .then((value) => {
      weather.innerHTML = value;
    })
    .then(parent.appendChild(weather))
    .catch((error) => {console.log(error)});
};

export default InitWeather;
