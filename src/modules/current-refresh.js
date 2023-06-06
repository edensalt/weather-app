import getWeather from "./weather-data";

const CurrentWeatherLayout = async function() {
    const parent = document.querySelector("#current-weather");

    const icon = document.createElement("div");
    icon.setAttribute("id", "icon");

    const img = document.createElement("img");
    img.setAttribute("id", "icon-img");

    const temp = document.createElement("div");
    temp.setAttribute("id", "temp");
    temp.setAttribute("deg", "f");

    const fahrenheit = document.createElement("button");
    fahrenheit.setAttribute("id", "fahrenheit");
    fahrenheit.innerHTML = "°F";

    const celsius = document.createElement("button");
    celsius.setAttribute("id", "celsius");
    celsius.innerHTML = "°C";

    const description = document.createElement("div");
    description.setAttribute("id", "description");


    parent.appendChild(temp);
    parent.appendChild(icon);
    icon.appendChild(img);
    parent.appendChild(fahrenheit);
    parent.appendChild(celsius);
    parent.appendChild(description);

}

const RefreshCurrentWeather = async function(city) {

    await CurrentWeatherLayout();

    const img = document.querySelector("#icon-img");
    const temp = document.querySelector("#temp");
    const description = document.querySelector("#description")
  
    temp.innerHTML = "...";
    description.innerHTML = "...";
  
    getWeather(city)
    .then((value) => {
      temp.innerHTML = value.current.temp_f;
      img.src = value.current.condition.icon;
      description.innerHTML = `${value.current.condition.text}, feels like ${value.current.feelslike_f}°F.`
      console.log(icon.src);
    })
    // .then(parent.appendChild(temp))
    .catch((error) => {
      temp.innerHTML = `Error: ${error}`;
      console.log(error);
    });
  }

  export default RefreshCurrentWeather;