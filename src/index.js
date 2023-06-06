import Weather from "./components/display";
import Form from "./components/form";
import "./style.css";

function setContentParent() {
    const div = document.createElement('div');
    div.setAttribute('id', 'parent');
    return div;
  }

document.body.appendChild(setContentParent());

Form();
Weather('Austin');