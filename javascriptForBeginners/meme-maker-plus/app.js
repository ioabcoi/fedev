const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
    
const lineWidth = document.getElementById("line-width");
const fontRange= document.getElementById("font-size");
const color = document.getElementById("color");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const fontWeightOptions = Array.from(document.getElementsByName("font-weight"));
const fontStyleOptions = Array.from(document.getElementsByName("font-style"));
const modeBtn = document.getElementById("mode-btn");
const typeBtn = document.getElementById("type-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");
const fontInput = document.getElementById("font-family");
const saveBtn = document.getElementById("save");

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;
let isShape = false;
let fontSize = fontRange.value;
let fontWeight = fontWeightOptions[fontWeightOptions.map(e => e.checked).findIndex(e => e)].id;
let fontStyle = fontStyleOptions[fontStyleOptions.map(e => e.checked).findIndex(e => e)].id;
let fontFamily = "Arial";

function onMove(event) {
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        if(isShape) {
            ctx.fill();
        } else {
            ctx.stroke();
        }
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
function onFontSizeChange(event) {
    fontSize = event.target.value;
}
function onFontWeightChange(event) {
    fontWeight = event.target.id;
}
function onFontStyleChange(event) {
    fontStyle = event.target.id;
}
function onFontFamilyChange(event) {
    let myUrl = event.target.value;
    if(myUrl !== "") {
        fontFile = new FontFace('myfont', 'url(' + myUrl + ')');
        document.fonts.add(fontFile);
        fontFile.load();
        fontFamily = "myfont";
    } else {
        fontFamily = "Arial";
    }
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
        modeBtn.innerText = "🩸 Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "🧹 Draw";
    }
}
function onTypeClick(event) {
    if(isShape) {
        isShape = false;
        typeBtn.innerText = "🔘 Shape";
    } else {
        isShape = true;
        typeBtn.innerText = "➖ Line";
    }
}
function onCanvasClick() {
    if(isFilling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}
function onDestroyClick() {
    if(confirm("Do you really want to destroy?")) {
        ctx.save();
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.restore();
    }
}
function onEraserClick() {
    ctx.strokeStyle = "white";
    color.value = "#ffffff";
    isFilling = false;
    modeBtn.innerText = "🩸 Fill";
}
function onFileChange(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function() {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    }
}
function onDoubleClick(event) {
    const text = textInput.value;
    if(text !== "") {
        ctx.save();
        ctx.lineWidth = 1;
        ctx.font = fontWeight + ' ' + fontSize + 'px ' + fontFamily;
        if(fontStyle === "fill") {
            ctx.fillText(text, event.offsetX, event.offsetY);
        } else {
            ctx.strokeText(text, event.offsetX, event.offsetY);
        }
        ctx.restore();
    }
}
function onSaveClick() {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png";
    a.click();
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("dblclick", onDoubleClick);
lineWidth.addEventListener("change", onLineWidthChange);
fontRange.addEventListener("change", onFontSizeChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
fontWeightOptions.forEach((weight) => weight.addEventListener("change", onFontWeightChange));
fontStyleOptions.forEach((weight) => weight.addEventListener("change", onFontStyleChange));
modeBtn.addEventListener("click", onModeClick);
typeBtn.addEventListener("click", onTypeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
fontInput.addEventListener("change", onFontFamilyChange);
saveBtn.addEventListener("click", onSaveClick);