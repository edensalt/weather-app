import popup from "./city-error";

const getWeather = async function (city) {
  let data;
  let error;
  const cityLabel = document.querySelector("#city");
  const input = document.querySelector("#city-input");

  while (!data || error) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=830c878837d444b58d1161321230506&q=${city}&days=3&aqi=no`,
        { mode: "cors" }
      );
      data = await response.json()
      if (data.error) {
        popup();
        city = cityLabel.getAttribute("city");
        input.setAttribute("placeholder", data.error.message)
        error = true;
      } else {
        error = false;
        input.setAttribute("placeholder", city)
        const exists = document.querySelector("#popup");
        if (exists) {
          setTimeout(() => {
            exists.remove();
          }, 3000)
        }
        return data;
      }
    } catch (error) {
      throw error;
    }
    
  }
}

export default getWeather;
