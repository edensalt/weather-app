import Refresh from "../modules/refresh";
import setTemp from "../modules/set-temp";

const GenerateButtons = async function (measurement) {
    const container = document.querySelector(".temp-btns");
    const fahrenheit = document.createElement("button");
    fahrenheit.setAttribute("id", "fahrenheit");
    fahrenheit.innerHTML = "°F";
    fahrenheit.addEventListener("click", () => {
      const src = document.querySelector("#city");
      const city = src.getAttribute("city");
      setTemp("fahrenheit");
      Refresh(city);
    });
  
    const celsius = document.createElement("button");
    celsius.setAttribute("id", "celsius");
    celsius.innerHTML = "°C";
    celsius.addEventListener("click", () => {
      const src = document.querySelector("#city");
      const city = src.getAttribute("city");
      setTemp("celsius");
      Refresh(city);
    });
  
    container.appendChild(fahrenheit);
    container.appendChild(celsius);

    const select = document.getElementById(measurement);
    select.className= "temp-focus";
    console.log(select);

    let other;
    if (measurement === "celsius") {
      other = "fahrenheit";
      container.classList.add("reverse");
    } else other = "celsius";

    const unselect = document.getElementById(other);
    unselect.className= "temp-unfocus";
    console.log(unselect);
  };

  export default GenerateButtons;