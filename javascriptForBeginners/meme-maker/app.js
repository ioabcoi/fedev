const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;


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
// ctx.beginPath();                                             // Begin a new Path
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
// ctx.stroke();                                                // Draw the Path
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
// ctx.arc(220, 110, 5, Math.PI, 2 * Math.PI);                  // Draw the circle
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
    // https://flatuicolors.com/

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
//     ctx.beginPath();                                                                // 마우스 움직일 때마다 새로운 path와 새로운 랜덤 컬러
//     // ctx.moveTo(0, 0);
//     // ctx.moveTo(400, 400);
//     ctx.moveTo(800, 800);                                                           // path의 시작 위치
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);                                       // path의 끝 위치 = 마우스 클릭 위치
//     ctx.stroke();
// }
// canvas.addEventListener("mousemove", onClick);


    // #2.1 Mouse Painting

// ctx.lineWidth = 2;
// ctx.moveTo(200, 200);
// ctx.lineTo(400, 400);
// ctx.stroke();

    // move draw

// ctx.lineWidth = 2;
// let isPainting = false;                                                            // mouseup 상태 : isPainting = false
// function onMove(event) {
//     if(isPainting) {
//         ctx.lineTo(event.offsetX, event.offsetY);
//         ctx.stroke();
//         return;
//     }
//     ctx.moveTo(event.offsetX, event.offsetY);
// }
// function onMouseDown(event) {
//     isPainting = true;                                                             // mousedown 일 경우 : isPainting = true 로 설정
// }
// function onMouseUp(event) { 
//     isPainting = false;                                                            // mouseup 일 경우 : isPainting = false 로 설정
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", onMouseDown);                                 // mousedown 일 경우 onMouseDown 함수 실행
// canvas.addEventListener("mouseup", onMouseUp);                                     // mouseup 일 경우 onMouseUp 함수 실행

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
// canvas.addEventListener("mouseleave", cancelPainting);                               // 마우스가 canvas 를 벗어날 경우 isPainting = false 로 설정


    // #2.2 Line Width
    
    // move draw + line width

// // ctx.lineWidth = 5;
// const lineWidth = document.getElementById("line-width");                             // input range #line-width 불러오기
// ctx.lineWidth = lineWidth.value;                                                     // input range #line-width 의 기본값으로 초기화
// let isPainting = false;
// function onMove(event) {
//     if(isPainting) {
//         ctx.lineTo(event.offsetX, event.offsetY);
//         ctx.stroke();
//         return;
//     }
//     // ctx.beginPath();                                                              // Draw the Path 1 : 1 or 2
//     ctx.moveTo(event.offsetX, event.offsetY);
// }
// function startPainting(event) {
//     isPainting = true;
// }
// function cancelPainting(event) {
//     isPainting = false;
//     ctx.beginPath();                                                                 // Draw the Path 2 : 1 or 2
// }
// function onLineWidthChange(event) {
//     // console.log(event.target.value);
//     ctx.lineWidth = event.target.value;                                              // input range #line-width 값을 가져와서 lineWidth 변경하기
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", startPainting);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);
// lineWidth.addEventListener("change", onLineWidthChange);                             // input range #line-width 값이 바뀔 때마다 onLineWidthChange 함수 실행


    // #2.3 Paint Color part One

    // move draw + line width + color

// const lineWidth = document.getElementById("line-width");
// const color = document.getElementById("color");                                      // input color 불러오기
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
//     ctx.strokeStyle = event.target.value;                                            // 도형 윤곽선 색를 클릭한 컬러값으로 변경
//     ctx.fillStyle = event.target.value;                                              // 도형 채우는 색를 클릭한 컬러값으로 변경
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", startPainting);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);
// lineWidth.addEventListener("change", onLineWidthChange);
// color.addEventListener("change", onColorChange);                                     // input color 컬러값이 선택되면 onColorChange 함수 실행


    // #2.4 Paint Color part Two

    // move draw + line width + color + background color

// const lineWidth = document.getElementById("line-width");
// const color = document.getElementById("color");
// const colorOptions = Array.from(document.getElementsByClassName("color-option"));     // 컬러값들을 불러와서 배열에 할당하기
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
//     const colorValue = event.target.dataset.color;                                  // 클릭한 컬러의 data-color 값 가져오기
//     ctx.strokeStyle = colorValue;                                                   // 도형 윤곽선 색를 클릭한 컬러값으로 변경
//     ctx.fillStyle = colorValue;                                                     // 도형 채우는 색를 클릭한 컬러값으로 변경
//     color.value = colorValue;                                                       // input color 값을 클릭한 컬러값으로 변경
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", startPainting);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);
// lineWidth.addEventListener("change", onLineWidthChange);
// color.addEventListener("change", onColorChange);
// // console.log(colorOptions);
// colorOptions.forEach((color) => color.addEventListener("click", onColorClick));     // 컬러들 각각 클릭 시 onColorClick 함수 실행


    // #2.5 Filling Mode

// const lineWidth = document.getElementById("line-width");
// const color = document.getElementById("color");
// const colorOptions = Array.from(document.getElementsByClassName("color-option"));
// const modeBtn = document.getElementById("mode-btn");                                 // mode button : Draw or Fill : 그리기 or 채우기 (최초에는 Draw 상태)
// ctx.lineWidth = lineWidth.value;
// let isPainting = false;
// let isFilling = false;                                                               // Draw 상태 : isFilling = false
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
//     const colorValue = event.target.dataset.color;
//     ctx.strokeStyle = colorValue;
//     ctx.fillStyle = colorValue;
//     color.value = colorValue;
// }
// function onModeClick(event) {
//     if(isFilling) {                                                                  // Filling 상태 : isFilling = true 이면?
//         isFilling = false;                                                           // Draw 상태 : isFilling = false 로 바꾸고
//         modeBtn.innerText = "🩸 Fill";                                                  // mode button 텍스트를 Fill 로 변갱
//     } else {                                                                         // Draw 상태 : isFilling = false 이면?
//         isFilling = true;                                                            // Filling 상태 : isFilling = true 로 바꾸고
//         modeBtn.innerText = "🧹 Draw";                                                  // mode button 텍스트를 Draw 로 변갱
//     }
// }
// function onCanvasClick() { 
//     if(isFilling) {                                                                  // Filling 상태 : isFilling = true 일 경우에만
//         ctx.fillRect(0, 0, 800, 800);                                                // canvas 전체에 현재 색상으로 사각형 그리기 = 전체 채우기
//     }
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", startPainting);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);
// canvas.addEventListener("click", onCanvasClick);                                     // canvas 클릭 시 onCanvasClick 함수 실행
// lineWidth.addEventListener("change", onLineWidthChange);
// color.addEventListener("change", onColorChange);
// colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
// modeBtn.addEventListener("click", onModeClick);                                      // mode button (Draw or Fill) 클릭 시 onModeClick 함수 실행


    // #2.6 Eraser

// const lineWidth = document.getElementById("line-width");
// const color = document.getElementById("color");
// const colorOptions = Array.from(document.getElementsByClassName("color-option"));
// const modeBtn = document.getElementById("mode-btn");
// const destroyBtn = document.getElementById("destroy-btn");                           // destroy button : 전체 삭제
// const eraserBtn = document.getElementById("eraser-btn");                             // eraser button : 지우개
// ctx.lineWidth = lineWidth.value;
// let isPainting = false;
// let isFilling = false;
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
//     const colorValue = event.target.dataset.color;
//     ctx.strokeStyle = colorValue;
//     ctx.fillStyle = colorValue;
//     color.value = colorValue;
// }
// function onModeClick(event) {
//     if(isFilling) {
//         isFilling = false;
//         modeBtn.innerText = "🩸 Fill";
//     } else {
//         isFilling = true;
//         modeBtn.innerText = "🧹 Draw";
//     }
// }
// function onCanvasClick() {
//     if(isFilling) {
//         ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//     }
// }
// function onDestroyClick() {
//     ctx.fillStyle = "white";                                                         // canvas 채우기 색상을 흰색으로 변경 
//     ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);                                 // canvas 전체 흰색으로 채우기
// }
// function onEraserClick() {
//     ctx.strokeStyle = "white";                                                       // path 컬러를 흰색으로 변경
//     isFilling = false;                                                               // Draw 상태 : isFilling = false 로 바꾸고
//     modeBtn.innerText = "🩸 Fill";                                                      // mode button 텍스트를 Fill 로 변갱
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", startPainting);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);
// canvas.addEventListener("click", onCanvasClick);
// lineWidth.addEventListener("change", onLineWidthChange);
// color.addEventListener("change", onColorChange);
// colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
// modeBtn.addEventListener("click", onModeClick);
// destroyBtn.addEventListener("click", onDestroyClick);                                // destroy button 클릭 시 onDestroyClick 실행
// eraserBtn.addEventListener("click", onEraserClick);                                  // eraser button 클릭 시 onEraserClick 실행


    // #2.7 Recap

// const lineWidth = document.getElementById("line-width");
// const color = document.getElementById("color");
// const colorOptions = Array.from(document.getElementsByClassName("color-option"));
// const modeBtn = document.getElementById("mode-btn");
// const destroyBtn = document.getElementById("destroy-btn");
// const eraserBtn = document.getElementById("eraser-btn");
// ctx.lineWidth = lineWidth.value;
// let isPainting = false;
// let isFilling = false;
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
//     const colorValue = event.target.dataset.color;
//     ctx.strokeStyle = colorValue;
//     ctx.fillStyle = colorValue;
//     color.value = colorValue;
// }
// function onModeClick(event) {
//     if(isFilling) {
//         isFilling = false;
//         modeBtn.innerText = "🩸 Fill";
//     } else {
//         isFilling = true;
//         modeBtn.innerText = "🧹 Draw";
//     }
// }
// function onCanvasClick() {
//     if(isFilling) {
//         ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//     }
// }
// function onDestroyClick() {
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
// }
// function onEraserClick() {
//     ctx.strokeStyle = "white";
//     isFilling = false;
//     modeBtn.innerText = "🩸 Fill";
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", startPainting);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);
// canvas.addEventListener("click", onCanvasClick);
// lineWidth.addEventListener("change", onLineWidthChange);
// color.addEventListener("change", onColorChange);
// colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
// modeBtn.addEventListener("click", onModeClick);
// destroyBtn.addEventListener("click", onDestroyClick);
// eraserBtn.addEventListener("click", onEraserClick);


    // #3.0 Adding Images

// const lineWidth = document.getElementById("line-width");
// const color = document.getElementById("color");
// const colorOptions = Array.from(document.getElementsByClassName("color-option"));
// const modeBtn = document.getElementById("mode-btn");
// const destroyBtn = document.getElementById("destroy-btn");
// const eraserBtn = document.getElementById("eraser-btn");
// const fileInput = document.getElementById("file");                                       // input file
// ctx.lineWidth = lineWidth.value;
// let isPainting = false;
// let isFilling = false;
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
//     const colorValue = event.target.dataset.color;
//     ctx.strokeStyle = colorValue;
//     ctx.fillStyle = colorValue;
//     color.value = colorValue;
// }
// function onModeClick(event) {
//     if(isFilling) {
//         isFilling = false;
//         modeBtn.innerText = "🩸 Fill";
//     } else {
//         isFilling = true;
//         modeBtn.innerText = "🧹 Draw";
//     }
// }
// function onCanvasClick() {
//     if(isFilling) {
//         ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//     }
// }
// function onDestroyClick() {
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
// }
// function onEraserClick() {
//     ctx.strokeStyle = "white";
//     isFilling = false;
//     modeBtn.innerText = "🩸 Fill";
// }
// function onFileChange(event) {
//     // console.dir(event.target);
//     // console.dir(event.target.files[0].name);
//     // console.log(URL.createObjectURL(file));
//     const file = event.target.files[0];                                                 // input file 로 불러와진 파일 배열의 files[0] 첫번째 파일
//     const url = URL.createObjectURL(file);                                              // 브라우저의 메모리 안에있는 유저가 업로드한 파일의 url을 불러옴
//     const image = new Image();                                                          // <img src="" /> image element 생성 = document.createElement("img")
//     image.src = url;                                                                    // 생성된 img 태그의 src 속성을 유저가 업로드한 파일의 url로 설정
//     image.onload = function() {                                                         // image load가 끝나면
//         ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);                        // 이미지를 불러와서 canvas 사이즈에 맞게 그려줌
//         fileInput.value = null;                                                         // input file 초기화 (새로운 파일을 또 불러올 수 있도록)
//     }
// }
// /*
// canvas.onmousemove = function() {}
// canvas.onmousemove = onMove;
// canvas.addEventListener("mousemove", onMove);
// */
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", startPainting);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);
// canvas.addEventListener("click", onCanvasClick);
// lineWidth.addEventListener("change", onLineWidthChange);
// color.addEventListener("change", onColorChange);
// colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
// modeBtn.addEventListener("click", onModeClick);
// destroyBtn.addEventListener("click", onDestroyClick);
// eraserBtn.addEventListener("click", onEraserClick);
// fileInput.addEventListener("change", onFileChange);                                      // input file 에 파일이 선택되면 onFileChange 함수 실행


    // #3.1 Adding Text

// const lineWidth = document.getElementById("line-width");
// const color = document.getElementById("color");
// const colorOptions = Array.from(document.getElementsByClassName("color-option"));
// const modeBtn = document.getElementById("mode-btn");
// const destroyBtn = document.getElementById("destroy-btn");
// const eraserBtn = document.getElementById("eraser-btn");
// const fileInput = document.getElementById("file");
// const textInput = document.getElementById("text");                                       // input text element
// ctx.lineWidth = lineWidth.value;
// ctx.lineCap = "round";                                                                   // 라인 스타일을 둥글게 만들기
// let isPainting = false;
// let isFilling = false;
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
//     const colorValue = event.target.dataset.color;
//     ctx.strokeStyle = colorValue;
//     ctx.fillStyle = colorValue;
//     color.value = colorValue;
// }
// function onModeClick(event) {
//     if(isFilling) {
//         isFilling = false;
//         modeBtn.innerText = "🩸 Fill";
//     } else {
//         isFilling = true;
//         modeBtn.innerText = "🧹 Draw";
//     }
// }
// function onCanvasClick() {
//     if(isFilling) {
//         ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//     }
// }
// function onDestroyClick() {
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
// }
// function onEraserClick() {
//     ctx.strokeStyle = "white";
//     isFilling = false;
//     modeBtn.innerText = "🩸 Fill";
// }
// function onFileChange(event) {
//     const file = event.target.files[0];
//     const url = URL.createObjectURL(file);
//     const image = new Image();
//     image.src = url;
//     image.onload = function() {
//         ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//         fileInput.value = null;
//     }
// }
// function onDoubleClick(event) {
//     const text = textInput.value;                                                        // input text 값을 불러와서
//     if(text !== "") {                                                                    // input text 에 값이 있을 경우
//         ctx.save();                                                                      // ctx의 현재 상태를 저장 (색상, 스타일 등) *ctx를 수정하는 것은 모든 것에 영향을 미침
//         ctx.lineWidth = 1;                                                               // line width 1로 변경
//         ctx.font = "68px Arial";                                                         // font size, font family 설정
//         // console.log(event.offsetX, event.offsetY);
//         // ctx.strokeText(text, event.offsetX, event.offsetY);
//         ctx.fillText(text, event.offsetX, event.offsetY);                                // 더블클릭 위치에 input text 값을 뿌려준다
//         ctx.restore();                                                                   // ctx의 저장된 상태로 복구
//         // ctx.lineWidth = lineWidth.value;
//     }
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", startPainting);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);
// canvas.addEventListener("click", onCanvasClick);
// canvas.addEventListener("dblclick", onDoubleClick);                                      // canvas 더블클릭 시 onDoubleClick 함수 실행
// lineWidth.addEventListener("change", onLineWidthChange);
// color.addEventListener("change", onColorChange);
// colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
// modeBtn.addEventListener("click", onModeClick);
// destroyBtn.addEventListener("click", onDestroyClick);
// eraserBtn.addEventListener("click", onEraserClick);
// fileInput.addEventListener("change", onFileChange);


    // #3.2 Saving Image

// const lineWidth = document.getElementById("line-width");
// const color = document.getElementById("color");
// const colorOptions = Array.from(document.getElementsByClassName("color-option"));
// const modeBtn = document.getElementById("mode-btn");
// const destroyBtn = document.getElementById("destroy-btn");
// const eraserBtn = document.getElementById("eraser-btn");
// const fileInput = document.getElementById("file");
// const textInput = document.getElementById("text");
// const saveBtn = document.getElementById("save");                                         // save button : 이미지 저장

// ctx.lineWidth = lineWidth.value;
// ctx.lineCap = "round";
// let isPainting = false;
// let isFilling = false;
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
//     const colorValue = event.target.dataset.color;
//     ctx.strokeStyle = colorValue;
//     ctx.fillStyle = colorValue;
//     color.value = colorValue;
// }
// function onModeClick(event) {
//     if(isFilling) {
//         isFilling = false;
//         modeBtn.innerText = "🩸 Fill";
//     } else {
//         isFilling = true;
//         modeBtn.innerText = "🧹 Draw";
//     }
// }
// function onCanvasClick() {
//     if(isFilling) {
//         ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//     }
// }
// function onDestroyClick() {
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
// }
// function onEraserClick() {
//     ctx.strokeStyle = "white";
//     isFilling = false;
//     modeBtn.innerText = "🩸 Fill";
// }
// function onFileChange(event) {
//     const file = event.target.files[0];
//     const url = URL.createObjectURL(file);
//     const image = new Image();
//     image.src = url;
//     image.onload = function() {
//         ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//         fileInput.value = null;
//     }
// }
// function onDoubleClick(event) {
//     const text = textInput.value;
//     if(text !== "") {
//         ctx.save();
//         ctx.lineWidth = 1;
//         ctx.font = "68px Arial";
//         ctx.fillText(text, event.offsetX, event.offsetY);
//         ctx.restore();
//     }
// }
// function onSaveClick() {
//     // console.log(canvas.toDataURL());
//     const url = canvas.toDataURL();                                                      // canvas에 있는 그림 데이터를 base64로 인코딩 된 이미지 url로 변환
//     const a = document.createElement("a");                                               // <a href="url" download></a> : a 태그 생성, download 속성 : a 클릭 시 href="url" 파일 다운로드
//     a.href = url;                                                                        // a.href 는 이미지 데이터를 저장한 url 변수로 설정
//     a.download = "myDrawing.png";                                                        // download 파일명.확장자를 myDrawing.png 로 설정
//     console.log(a);
//     a.click();                                                                           // 생성된 a 태그를 클릭!
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", startPainting);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);
// canvas.addEventListener("click", onCanvasClick);
// canvas.addEventListener("dblclick", onDoubleClick);
// lineWidth.addEventListener("change", onLineWidthChange);
// color.addEventListener("change", onColorChange);
// colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
// modeBtn.addEventListener("click", onModeClick);
// destroyBtn.addEventListener("click", onDestroyClick);
// eraserBtn.addEventListener("click", onEraserClick);
// fileInput.addEventListener("change", onFileChange);
// saveBtn.addEventListener("click", onSaveClick);                                          // save button 클릭 시 onSaveClick 함수 실행


    // #3.3 Recap

// const lineWidth = document.getElementById("line-width");
// const color = document.getElementById("color");
// const colorOptions = Array.from(document.getElementsByClassName("color-option"));
// const modeBtn = document.getElementById("mode-btn");
// const destroyBtn = document.getElementById("destroy-btn");
// const eraserBtn = document.getElementById("eraser-btn");
// const fileInput = document.getElementById("file");
// const textInput = document.getElementById("text");
// const saveBtn = document.getElementById("save");

// ctx.lineWidth = lineWidth.value;
// ctx.lineCap = "round";
// let isPainting = false;
// let isFilling = false;
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
//     const colorValue = event.target.dataset.color;
//     ctx.strokeStyle = colorValue;
//     ctx.fillStyle = colorValue;
//     color.value = colorValue;
// }
// function onModeClick(event) {
//     if(isFilling) {
//         isFilling = false;
//         modeBtn.innerText = "🩸 Fill";
//     } else {
//         isFilling = true;
//         modeBtn.innerText = "🧹 Draw";
//     }
// }
// function onCanvasClick() {
//     if(isFilling) {
//         ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//     }
// }
// function onDestroyClick() {
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
// }
// function onEraserClick() {
//     ctx.strokeStyle = "white";
//     isFilling = false;
//     modeBtn.innerText = "🩸 Fill";
// }
// function onFileChange(event) {
//     const file = event.target.files[0];
//     const url = URL.createObjectURL(file);
//     const image = new Image();
//     image.src = url;
//     image.onload = function() {
//         ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//         fileInput.value = null;
//     }
// }
// function onDoubleClick(event) {
//     const text = textInput.value;
//     if(text !== "") {
//         ctx.save();
//         ctx.lineWidth = 1;
//         ctx.font = "68px Arial";
//         ctx.fillText(text, event.offsetX, event.offsetY);
//         ctx.restore();
//     }
// }
// function onSaveClick() {
//     const url = canvas.toDataURL();
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "myDrawing.png";
//     a.click();
// }
// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", startPainting);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);
// canvas.addEventListener("click", onCanvasClick);
// canvas.addEventListener("dblclick", onDoubleClick);
// lineWidth.addEventListener("change", onLineWidthChange);
// color.addEventListener("change", onColorChange);
// colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
// modeBtn.addEventListener("click", onModeClick);
// destroyBtn.addEventListener("click", onDestroyClick);
// eraserBtn.addEventListener("click", onEraserClick);
// fileInput.addEventListener("change", onFileChange);
// saveBtn.addEventListener("click", onSaveClick);
    
    
    // #3.4 CSS


    // #3.5 Code Challenge
    // 텍스트 폰트 스타일 (종류 및 사이즈, 볼드, 스타일) 변경 기능

    // #3.5.1 font Weight
    // input radio : lighter / normal / bolder

    // #3.5.2 font Size
    // input range : 10 20 30 40 50 60 70 80 90 100

    // #3.5.3 font Family
    // input text : FontFace() : url 불러오기

    /*
    font-style -> input radio : strokeText or FillText
    line-mode -> input radio : line mode or shape mode : onMove : stroke() -> fill()
    

    */
    
const lineWidth = document.getElementById("line-width");
// #3.5.2 font Size : input range 불러오기
const fontRange= document.getElementById("font-size");
const color = document.getElementById("color");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
// #3.5.1 font Weight : input radio 값들을 배열에 넣기
const fontWeightOptions = Array.from(document.getElementsByName("font-weight"));
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");
// #3.5.3 font Family : input text 불러오기
const fontInput = document.getElementById("font-family");
const saveBtn = document.getElementById("save");

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;
// #3.5.2 font Size : input range 의 기본값으로 초기화
// console.log(fontRange.value);
let fontSize = fontRange.value;
// #3.5.1 font Weight : input radio 의 기본값으로 초기화
// console.log(fontWeightOptions.map(e => e.checked).findIndex(e => e));
// console.log(fontWeightOptions.map(e => e.checked).findIndex(e => e).id);
let fontWeight = fontWeightOptions[fontWeightOptions.map(e => e.checked).findIndex(e => e)].id;  
// #3.5.3 font Family : input text 의 기본값으로 초기화
let fontFamily = "Calibri";

function onMove(event) {
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        // ctx.fill();                                                      // update : 마우스 움직일 때 도형 그리기
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting(event) {
    isPainting = true;
}
function cancelPainting(event) {
    isPainting = false;
    // ctx.fill();                                                          // update : 마우스 버튼을 뗄 때 도형 그리기
    ctx.beginPath();
}
function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}
// #3.5.2 font Size : input range 값을 가져와서 fontSize 변경하기
function onFontSizeChange(event) {
    fontSize = event.target.value;
    // console.log(fontSize);
}
// #3.5.1 font Weight : input radio :checked 값을 가져와서 fontWeight 변경하기
function onFontWeightChange(event) {
    // console.log(event, event.target, event.target.id);
    fontWeight = event.target.id;
}
// #3.5.3 font Family : input text 값을 가져와서 fontFamily 변경하기
function onFontFamilyChange(event) {
    // console.log(event.target.value);
    let myUrl = event.target.value;
    fontFamily = new FontFace('myfont', 'url(' + myUrl + ')');
    // console.log(fontFamily);
    // console.log(fontFamily, myUrl);
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
function onCanvasClick() {
    if(isFilling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}
function onDestroyClick() {
    ctx.save();                                                             // update
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.restore();                                                          // update
}
function onEraserClick() {
    ctx.strokeStyle = "white";
    color.value = "#ffffff";                                                // update
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
        // console.log(fontSize, fontWeight);
        console.log(fontFamily);
        if(fontInput.value !== "") {
            fontFamily.load().then(() => {
                ctx.font = fontWeight + ' ' + fontSize + 'px myfont'; 
            });
        } else {
            ctx.font = fontWeight + ' ' + fontSize + 'px ' + fontFamily;
        }
        ctx.fillText(text, event.offsetX, event.offsetY);
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
// #3.5.2 font Size : input range 값이 바뀔 때마다 onFontSizeChange 함수 실행
fontRange.addEventListener("change", onFontSizeChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
// #3.5.1 font Weight : input radio 값이 바뀔 때마다 onFontWeightChange 함수 실행
fontWeightOptions.forEach((weight) => weight.addEventListener("change", onFontWeightChange));
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
// #3.5.3 font Family : input text 값이 바뀔 때마다 onFontFamilyChange 함수 실행
fontInput.addEventListener("change", onFontFamilyChange);
saveBtn.addEventListener("click", onSaveClick);