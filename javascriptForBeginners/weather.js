const weather = document.querySelector(".js-weather");

// https://openweathermap.org/
const API_KEY = "40f419375d167344e50226d2f84303a9";
const COORDS = "coords";

// https://openweathermap.org/current
function getWeather(lat, lng){
    // api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
    fetch(`https://pi.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metrics`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadCords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCords();
}
init();