const Layout = function() {

    return new Promise((resolve, reject) => {
        const parent = document.querySelector("#parent");

        const header = document.createElement("div");
        header.classList.add("header");
    
        const title = document.createElement("h1");
        title.innerHTML = "Weather App";
    
        const cityDiv = document.createElement("div");
        cityDiv.classList.add("city-div");
    
        const location = document.createElement("div");
        location.classList.add("location");
    
        const city = document.createElement("h1");
        city.setAttribute("id", "city");
    
        const state = document.createElement("h2");
        state.setAttribute("id", "state");
        state.innerHTML = "Texas";
        
        const search = document.createElement("div");
        search.setAttribute("id", "search-bar");
    
        const current = document.createElement("div");
        current.setAttribute("id", "current");
    
        const currentWeather = document.createElement("div");
        currentWeather.setAttribute("id", "current-weather");
    
        const currentDate = document.createElement("div");
        currentDate.setAttribute("id", "current-date");

        const dateUpdate = document.createElement("div");
        dateUpdate.innerHTML = "Last updated:";
    
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
        current.appendChild(currentWeather);
        current.appendChild(currentDate);
        currentDate.appendChild(dateUpdate);
        parent.appendChild(forecast);
        resolve();
        
        reject(new Error("Layout error"))
    })
    

}

export default Layout;