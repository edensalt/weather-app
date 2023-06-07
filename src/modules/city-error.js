const popup = function () {
    const parent = document.querySelector("form");

    const exists = document.querySelector("#popup");

    if (!exists) {
        const warning = document.createElement("div");

    warning.innerHTML = "City not found."
    warning.setAttribute("id", "popup");

    parent.appendChild(warning);
    } else return;

}

export default popup;