function getTemp() {
    const parent = document.querySelector("#parent");
    const currentTemp = parent.temp;
    return currentTemp;
}

const setTemp = async function(temp) {
    try {
        const currentTemp = await getTemp();
        if (currentTemp === temp) {
           return;
        }
        const parent = document.querySelector("#parent");
        parent.setAttribute("temp", temp)
    }
    catch (error) {
        console.log(error)
    }
};

export default setTemp;