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
      const data = await response.json()
      console.log(data);
      if (data.error) {
        console.log(data.error.message)
        city = cityLabel.getAttribute("city");
        input.setAttribute("placeholder", data.error.message)
        error = true;
      } else {
        error = false;
        return data;

      }
    } catch (error) {
      console.log(error);
      throw error;
    }
    
  }
}

export default getWeather;
