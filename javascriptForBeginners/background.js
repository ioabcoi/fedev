/* image 

const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.png`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();
*/

/* background color */
const body = document.querySelector("body");

const COLOR_ARRAY = ["#000000", "#413c69", "#4a47a3", "#290149", "#4a3933", "#28527a", "#290149"];
const COLOR_NUMBER = COLOR_ARRAY.length;

function paintColor(colorNumber){
    const div = document.createElement("div");
    div.style.backgroundColor = COLOR_ARRAY[colorNumber];
    div.classList.add("bgColor");
    body.prepend(div);
}

function getRandom(){
    const number = Math.floor(Math.random() * COLOR_NUMBER);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintColor(randomNumber);
}

init();