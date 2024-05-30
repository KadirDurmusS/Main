const cityInput = document.querySelector(".inputText");
const btn = document.querySelector(".btn");
const btnDiv = document.querySelector(".a");



btn.addEventListener("click", () => {
    getData(cityInput.value)
})

cityInput.addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
        getData(cityInput.value);
    }
})
function getData(name) {
    const API = "794d1ece0e0a18655a290ccdbe1b3ef0";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`
    fetch(baseURL).then(res => res.json())
        .then(data => {
            const { name, sys: { country }, main: { temp, feels_like }, weather: [{ description }] } = data;
            const city = document.querySelector("#sehir");
            const temperature = document.querySelector("#sicaklik");
            const weatherDesc = document.querySelector("#havaDurumu");
            const feel = document.querySelector("#hissedilen");
            city.textContent = `${name},${country}`;
            weatherDesc.textContent = `${description}`;
            temperature.textContent = `${temp}`;
            feel.textContent = `${feels_like}`;
            cityInput.value = "";
        }).catch(err => console.log(err));

}