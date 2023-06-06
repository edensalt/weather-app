const Layout = function() {
    const parent = document.querySelector("#parent");

    const title = document.createElement("h1");
    title.innerHTML = "Weather App";
    
    const search = document.createElement("div");
    search.setAttribute("id", "search-bar");

    const forecast = document.createElement("div");
    forecast.setAttribute("id", "forecast");

    parent.appendChild(title);
    parent.appendChild(search);
    parent.appendChild(forecast);

}

export default Layout;