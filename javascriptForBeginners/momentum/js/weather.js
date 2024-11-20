// openweathermap.org/api
const API_KEY = "40f419375d167344e50226d2f84303a9";

function onGeoOk(position) {
    // console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log("You live in ", lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data.name, data.weather[0].main);
            const city = document.querySelector("#weather span:nth-child(1)");
            const weather = document.querySelector("#weather span:nth-child(2)");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError() {
    console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);