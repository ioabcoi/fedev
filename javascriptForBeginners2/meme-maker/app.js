const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

    // #1.1 Our First Drawing

// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();
// ctx.rect(350, 350, 100, 100);
// ctx.rect(450, 450, 100, 100);
// ctx.fillStyle = "red";
// ctx.fill();


    // #1.2 Paths

// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();
// ctx.beginPath();                     // Begin a new Path
// ctx.rect(350, 350, 100, 100);
// ctx.rect(450, 450, 100, 100);
// ctx.fillStyle = "red";
// ctx.fill();


    // #1.3 moveTo and lineTo

// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.stroke();                        // Draw the Path
// ctx.fill();


    // #1.4 Drawing Project One

// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.strokeRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();


    // #1.5 Drawing Project Two

// ctx.fillRect(210 - 30, 200 - 10, 15, 100);
// ctx.fillRect(350 - 30, 200 - 10, 15, 100);
// ctx.fillRect(260 - 30, 200 - 10, 60, 200);
// ctx.arc(250, 130, 50, 0, 2 * Math.PI);
// ctx.fill();
// ctx.beginPath();
// ctx.fillStyle = "white";
// // ctx.arc(220, 110, 5, 0, 2 * Math.PI);
// // ctx.arc(250, 110, 5, 0, 2 * Math.PI);
// ctx.arc(220, 110, 5, Math.PI, 2 * Math.PI);
// ctx.arc(250, 110, 5, Math.PI, 2 * Math.PI);
// ctx.fill();
// // https://www.w3schools.com/tags/canvas_arc.asp


    // #2.0 Painting Lines

    // click

// ctx.lineWidth = 2;
// // ctx.moveTo(0, 0);
// function onClick(event){
//     // console.log(event, offsetX, offsetY);
//     ctx.moveTo(0, 0);
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }
// canvas.addEventListener("click", onClick);

    // mousemove

// ctx.lineWidth = 2;
// // ctx.moveTo(0, 0);
// function onClick(event){
//     // console.log(event, offsetX, offsetY);
//     ctx.moveTo(0, 0);
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }
// canvas.addEventListener("mousemove", onClick);

    // mousemove + color

// ctx.lineWidth = 2;
// const colors = [
//     "#fad390",
//     "#f8c291",
//     "#6a89cc",
//     "#82ccdd",
//     "#b8e994",
//     "#f6b93b",
//     "#e55039",
//     "#4a69bd",
//     "#60a3bc",
//     "#78e08f"
// ];
// // ctx.moveTo(0, 0);
// function onClick(event){
//     // console.log(event, offsetX, offsetY);
//     ctx.beginPath();
//     // ctx.moveTo(0, 0);
//     // ctx.moveTo(400, 400);
//     ctx.moveTo(800, 800);
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }
// canvas.addEventListener("mousemove", onClick);

// https://flatuicolors.com/


    // #2.1 Mouse Painting

// ctx.lineWidth = 2;
// ctx.moveTo(200, 200);
// ctx.lineTo(400, 400);
// ctx.stroke();

    // move draw

// ctx.lineWidth = 2;
// let isPainting = false;
// function onMove(event) {
//     if(isPainting) {
//         ctx.lineTo(event.offsetX, event.offsetY);
//         ctx.stroke();
//         return;
//     }
//     ctx.moveTo(event.offsetX, event.offsetY);
// }
// function onMouseDown(event) {
//     isPainting = true;
// }
// function onMouseUp(event) {
//     isPainting = false;
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", onMouseDown);
// canvas.addEventListener("mouseup", onMouseUp);

    // move draw + bug 
    // mousedown 한 채로 canvas 밖으로 나가면 mouseup 실행되지 않아서, 나갔다가 다시 들어오면 계속 그려지는 버그

// ctx.lineWidth = 2;
// let isPainting = false;
// function onMove(event) {
//     if(isPainting) {
//         ctx.lineTo(event.offsetX, event.offsetY);
//         ctx.stroke();
//         return;
//     }
//     ctx.moveTo(event.offsetX, event.offsetY);
// }
// function startPainting(event) {
//     isPainting = true;
// }
// function cancelPainting(event) {
//     isPainting = false;
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", startPainting);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);


    // #2.2 Line Width
    
    // move draw + line width

// // ctx.lineWidth = 5;
// const lineWidth = document.getElementById("line-width");
// ctx.lineWidth = lineWidth.value;
// let isPainting = false;
// function onMove(event) {
//     if(isPainting) {
//         ctx.lineTo(event.offsetX, event.offsetY);
//         ctx.stroke();
//         return;
//     }
//     // ctx.beginPath();                                    // Draw the Path 1 : 1 or 2
//     ctx.moveTo(event.offsetX, event.offsetY);
// }
// function startPainting(event) {
//     isPainting = true;
// }
// function cancelPainting(event) {
//     isPainting = false;
//     ctx.beginPath();                                        // Draw the Path 2 : 1 or 2
// }
// function onLineWidthChange(event) {
//     // console.log(event.target.value);
//     ctx.lineWidth = event.target.value;
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", startPainting);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);
// lineWidth.addEventListener("change", onLineWidthChange);


    // #2.3 Paint Color part One

    // move draw + line width + color

// const lineWidth = document.getElementById("line-width");
// const color = document.getElementById("color");
// ctx.lineWidth = lineWidth.value;
// let isPainting = false;
// function onMove(event) {
//     if(isPainting) {
//         ctx.lineTo(event.offsetX, event.offsetY);
//         ctx.stroke();
//         return;
//     }
//     ctx.moveTo(event.offsetX, event.offsetY);
// }
// function startPainting(event) {
//     isPainting = true;
// }
// function cancelPainting(event) {
//     isPainting = false;
//     ctx.beginPath();
// }
// function onLineWidthChange(event) {
//     ctx.lineWidth = event.target.value;
// }
// function onColorChange(event) {
//     // console.log(event.target.value);
//     ctx.strokeStyle = event.target.value;
//     ctx.fillStyle = event.target.value;
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", startPainting);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);
// lineWidth.addEventListener("change", onLineWidthChange);
// color.addEventListener("change", onColorChange);


    // #2.4 Paint Color part Two

    // move draw + line width + color + background color

// const lineWidth = document.getElementById("line-width");
// const color = document.getElementById("color");
// const colorOptions = Array.from(document.getElementsByClassName("color-option"));
// ctx.lineWidth = lineWidth.value;
// let isPainting = false;
// function onMove(event) {
//     if(isPainting) {
//         ctx.lineTo(event.offsetX, event.offsetY);
//         ctx.stroke();
//         return;
//     }
//     ctx.moveTo(event.offsetX, event.offsetY);
// }
// function startPainting(event) {
//     isPainting = true;
// }
// function cancelPainting(event) {
//     isPainting = false;
//     ctx.beginPath();
// }
// function onLineWidthChange(event) {
//     ctx.lineWidth = event.target.value;
// }
// function onColorChange(event) {
//     ctx.strokeStyle = event.target.value;
//     ctx.fillStyle = event.target.value;
// }
// function onColorClick(event) {
//     // console.log(event.target);
//     // console.dir(event.target.dataset.color);
//     // ctx.strokeStyle = event.target.dataset.color;
//     // ctx.fillStyle = event.target.dataset.color;
//     const colorValue = event.target.dataset.color;
//     ctx.strokeStyle = colorValue;
//     ctx.fillStyle = colorValue;
//     color.value = colorValue;
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", startPainting);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);
// lineWidth.addEventListener("change", onLineWidthChange);
// color.addEventListener("change", onColorChange);
// // console.log(colorOptions);
// colorOptions.forEach((color) => color.addEventListener("click", onColorClick));


    // #2.5 Filling Mode

const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const modeBtn = document.getElementById("mode-btn");
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;
function onMove(event) {
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting(event) {
    isPainting = true;
}
function cancelPainting(event) {
    isPainting = false;
    ctx.beginPath();
}
function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}
function onColorClick(event) {
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}
function onModeClick(event) {
    if(isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}
function onCanvasClick() {
    if(isFilling) {
        ctx.fillRect(0, 0, 800, 800);        
    }
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));    
modeBtn.addEventListener("click", onModeClick);

    // #2.6 Eraser
    // #2.7 Recap