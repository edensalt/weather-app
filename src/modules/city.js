import getWeather from "./weather";

function getCity() {
    const input = document.querySelector("#city-input");
    const city = input.value;
    return city;
}

const setCity = async function() {
    try {
        const city = await getCity();
        if (city === undefined) {
            city = "Austin";
        }
        const temp = await getWeather(city);
        return temp;
    }
    catch (error) {
        console.log(error)
    }
};

export { getCity, setCity };