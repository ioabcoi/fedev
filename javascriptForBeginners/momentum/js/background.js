const images = [
    "1.png",
    "2.png",
    "3.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage);

const bgImage = document.createElement("img");
bgImage.src = `../chrome-app/images/${chosenImage}`;
// console.log(bgImage);
document.body.prepend(bgImage);
// document.body.appendChild(bgImage);

// 'https://picsum.photos/1920/1024/?random=' + num