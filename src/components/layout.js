const Layout = function() {
    const parent = document.querySelector("#parent");

    const header = document.createElement("div");
    header.classList.add("header");

    const title = document.createElement("h1");
    title.innerHTML = "Weather App";

    const cityDiv = document.createElement("div");
    cityDiv.classList.add("city");

    const location = document.createElement("div");
    location.classList.add("location");

    const city = document.createElement("h1");
    city.innerHTML = "AUSTIN";

    const state = document.createElement("h2");
    state.innerHTML = "Texas";
    
    const search = document.createElement("div");
    search.setAttribute("id", "search-bar");

    const current = document.createElement("div");
    current.setAttribute("id", "current");

    const forecast = document.createElement("div");
    forecast.setAttribute("id", "forecast");

    parent.appendChild(header);
    header.appendChild(title);
    header.appendChild(cityDiv);
    cityDiv.appendChild(location);
    location.appendChild(city);
    location.appendChild(state);
    cityDiv.appendChild(search);
    parent.appendChild(current);
    parent.appendChild(forecast);

}

export default Layout;