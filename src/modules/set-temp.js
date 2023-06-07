function getTemp() {
    const parent = document.querySelector("#parent");
    const currentTemp = parent.getAttribute("temp");
    return currentTemp;
}

const setTemp = async function(temp) {
    try {
        const currentTemp = getTemp();
        if (currentTemp === temp) {
           return;
        }
        const parent = document.querySelector("#parent");
        parent.setAttribute("temp", temp)
    }
    catch (error) {
        console.debug(error)
    }
};

export default setTemp;