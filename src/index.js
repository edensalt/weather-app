import InitWeather from "./components/init-forecast";
import Form from "./components/form";
import Layout from "./components/layout";
import "./output.css";


function setContentParent() {
  const div = document.createElement("div");
  div.setAttribute("id", "parent");

  return div;
}

document.body.appendChild(setContentParent());

Layout().then(() => {
  return Form();
}).then(() => {
  return InitWeather("Austin");
}).catch((error) => {
  console.log(error);
});