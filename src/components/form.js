import { getCity, setCity } from "../modules/city";
import Refresh from "../modules/refresh";

const Form = async function () {
  const parent = document.querySelector("#search-bar");

  const form = document.createElement("form");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "city-input");
  input.setAttribute("placeholder", "e.g. Austin");

  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "city-submit");
  submit.innerHTML = "Generate";

  submit.addEventListener("click", async (e) => {
    e.preventDefault();
    Refresh("loading...");
    const newCity = getCity();
    if (newCity === "") {
      return;
    }
    const tempPromise = setCity(newCity);
    const t = await tempPromise;
    Refresh(t);
    form.reset();
    input.setAttribute("placeholder", newCity);
})

  parent.appendChild(form);
  form.appendChild(input);
  form.appendChild(submit);
 
};

export default Form;
