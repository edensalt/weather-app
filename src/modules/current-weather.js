const getWeather = async function (city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=830c878837d444b58d1161321230506&q=${city}&days=3&aqi=no`,
      { mode: "cors" }
    );
    const data = await response.json()
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default getWeather;
