const weather = document.querySelector(".js-weather");

const API_KEY = "";
const COORDS = "coords";

function getWeather(lat, lng){
    fetch(`https://url&lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metrics`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(coordsObj);
}

function handleGeoSucces(positon){
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