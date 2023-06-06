import getWeather from "./weather-data";

const CurrentWeatherLayout = async function() {
    const parent = document.querySelector("#current-weather");

    const icon = document.createElement("img");
    icon.setAttribute("id", "icon");

    const temp = document.createElement("div");
    temp.setAttribute("id", "temp");

    parent.appendChild(temp);
    parent.appendChild(icon);


}

const RefreshCurrentWeather = async function(city) {

    await CurrentWeatherLayout();

    const icon = document.querySelector("#icon");
    const temp = document.querySelector("#temp");
  
    temp.innerHTML = "Loading...";
  
    getWeather(city)
    .then((value) => {
      temp.innerHTML = `${value.current.temp_f}°F`;
      icon.src = value.current.condition.icon;
      console.log(icon.src);
    })
    // .then(parent.appendChild(temp))
    .catch((error) => {
      temp.innerHTML = `Error: ${error}`;
      console.log(error);
    });
  }

  export default RefreshCurrentWeather;