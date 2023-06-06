import getWeather from "./weather-data";

const RefreshCurrentWeather = async function(city) {
    const parent = document.querySelector("#current-weather");
  
    const temp = document.createElement("div");
    temp.setAttribute("id", "temp");
  
    temp.innerHTML = "Loading...";
  
    getWeather(city)
    .then((value) => {
      temp.innerHTML = `${value.current.temp_f}°F`;
    })
    .then(parent.appendChild(temp))
    .catch((error) => {
      temp.innerHTML = `Error: ${error}`;
      console.log(error);
    });
  }

  export default RefreshCurrentWeather;