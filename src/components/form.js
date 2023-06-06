import { getCity } from "../modules/city";
import Refresh from "../modules/refresh";

const Form = async function () {
  return new Promise((resolve, reject) => {
    const parent = document.querySelector("#search-bar");

    const form = document.createElement("form");

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "city-input");
    input.setAttribute("placeholder", "Enter new city");

    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "city-submit");
    submit.innerHTML = "Search";

    submit.addEventListener("click", async (e) => {
      e.preventDefault();
      const newCity = getCity();
      console.log(newCity);
      if (newCity === "") {
        return;
      }
      Refresh(newCity);
      form.reset();
    });

    parent.appendChild(form);
    form.appendChild(input);
    form.appendChild(submit);

    resolve();

    reject(new Error("Form error"));
  });
};

export default Form;
