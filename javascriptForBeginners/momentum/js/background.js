const images = [
    "1.png",
    "2.png",
    "3.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage);

const bg = document.querySelector("#bg");
const bgImage = document.createElement("img");
bgImage.src = `../chrome-app/images/${chosenImage}`;
// console.log(bgImage);
// bg.prepend(bgImage);
bg.style.backgroundImage = `url(${bgImage.src})`;
// document.body.appendChild(bgImage);

// 'https://picsum.photos/1920/1024/?random=' + num