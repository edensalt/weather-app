import setTemp from "../modules/set-temp";

const GenerateButtons = async function () {
    const container = document.querySelector("#temp-btns");
    const fahrenheit = document.createElement("button");
    fahrenheit.setAttribute("id", "fahrenheit");
    fahrenheit.innerHTML = "°F";
    fahrenheit.addEventListener("click", () => {
      console.log("fahrenheit");
      setTemp("fahrenheit");
    });
  
    const celsius = document.createElement("button");
    celsius.setAttribute("id", "celsius");
    celsius.innerHTML = "°C";
    celsius.addEventListener("click", () => {
      console.log("celsius");
      setTemp("celsius");
    });
  
    container.appendChild(fahrenheit);
    container.appendChild(celsius);
  };

  export default GenerateButtons;