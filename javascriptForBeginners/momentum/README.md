# javascriptForBeginners : momentum

>> 2021 ver
Link : [GU|javascriptForBeginners:chrome-app](https://ioabcoi.github.io/fedev/javascriptForBeginners/chrome-app/index.html "GU")

>> 2024 ver : update
Link : [GU|javascriptForBeginners:momentum](https://ioabcoi.github.io/fedev/javascriptForBeginners/momentum/index.html "GU")

---------------------------

# 강의
[nomadcoders](https://nomadcoders.co/javascript-for-beginners "nomadcoders")

## 배우는 이론
- Variables
- Functions
- Data Types
- Arrays, Objects
- DOM Functions
- Events
- if / else / for

## 구현하는 기능
- JS Clock
- JS To Do List
- Get Geolocation
- Get Weather Information
- Deploy to Github Pages

## 다음과 같은 패키지를 사용합니다.
```js
{
    "이름":"바닐라 JS로 크롬 앱 만들기",
    "섹션":"무엇을 사용하나요??",
    "패키지": [
        "Javascript"
        "localStorage"
        "AJAX"
        "JSON"
        "DOM"
        "fetch"
        "OpenWeather API"
    ]
}
```

- JavaScript
- HTML5
- Open Weather API

## 결과적으로, 이 수업 이후 ...
- 기초적인 수준이지만 자바스크립트 기본기에 대하여 이해하게된다.
- 자바스크립트로 시계. 할일목록. 날씨등 기본 기능을 구현할 수 있게된다.
- 바닐라 자바스크립트를 활용해서 간단한 웹 서비스를 만들수 있다.

## UPDATED SUMMARY
- 총 강의수: 60개 (8시간!!!)
- JS를 활용한 왕 기초적인 프론트엔드 빌드 배우고 + 결과물 까지!
- 더 친절하고. 더 자세한 설명으로 2021년 업데이트 되었어요!
- 무료 강의도 업데이트 해주는 것은 무엇? #노마진코더
- 네! 맞아요! 게다가 무료입니다!!

---------------------------
2024-04-18
2024-06-19

### 1 INTRODUCTION
### 1.0 ❤️ 무료 강의 ❤️
### 1.0 Welcome
### 1.1 What Are We Building
### 1.2 Requirements
### 1.3 Software Requirements

### 1.4 Why JS

넷스케이프 netscape 브라우저
html, css만 있었음
웹사이트를 인터렉티브하게 만들기를 원함
직접 프로그래밍 언어를 만들기로함
10일의 개발시간이 투자되어 자바스크립트 탄생
자바스크립트가 프론트엔드에 쓸 수 있는 유일한 프로그래밍 언어
웹 전체를 아우르는 유일한 언어
자바스크립트는 모든 브라우저에 내장되어있음 (html, css, javascript)
프론트엔드 필수 : 자바스크립트 필수 : 대체 불가
백엔드 : 언어 선택

### 1.5 Why JS

-three.js
자바스크립트 기술 깊게 배우고 싶다면 프레임워크로 넘어가면 됨
react native : 자바스크립트 만으로 안드로이드, ios 앱 만들 수 있음
일렉트론 : html, css, javascript로 데스크탑 앱 만들 수 있음 : vs code, facebook messenger, twitch, slack, figma 등등
프론트엔드를 자바스크립트로 만든 다음
백엔드까지 자바스크립트로 가능
예전엔 html, css, javascript -> c#, java, python,... 순서로 헀다면
이제는 자바스크립트만으로 프론트엔드, 백엔드 양쪽에서 하고싶은 대로 할 수 있음
강의 > wetube 클론 코딩 : 백엔드도 가진 웹사이트를 자바스크립트 만으로 만드는 법
3D -> javascript 
socket.io 으로 채팅, 실시간 기능 가능하게 함
ml5.js 를 쓰면 머신러닝 모델을 생성하는 웹사이트를 구축해서 그 모델을 훈련시킬 수 있음

### 1.6 Online IDE

컴퓨터에 vsvode 를 설치할 수 없을 때, 설치권한이 없는 컴퓨터일 때
replit.com
브라우저에서 코딩 가능하게 해줌
계정 가입, 로그인 후 프로그래밍 가능
'+' 선택 후 사용할 프로그래밍 언어 선택
Integrated Development Environment
효율적으로 소프트웨어를 개발하기 위한 통합개발환경 소프트웨어 어플리케이션 인터페이스이다. 
코드 편집기, 디버거, 컴파일러, 인터프리터 등을 포함하고 개발자에게 제공한다.
대표적으로 Cloud9, JSFiddle, Icenium, Codenvy 등이 있다.

---------------------------
2024-06-20

### 2 WELCOME TO JAVASCRIPT
### 2.0 Your First JS Project
### 2.1 Basic Data Types
### 2.2 Variables

```js
console.log(5 + 2);
console.log(5 + 2);
console.log(5 + 2);

const myName = "ghj";
const veryLongVariableName = 0;         // javascript, camelCase
const very_long_variable_name = 0;      // python, snake_case

const a = 5;
const b = 2;
console.log(a + b);
console.log(a * b);
console.log(a / b);
```

### 2.3 const and let

```js
let     // 재선언 X 재할당 O
const   // 재선언 X 재할당 X

const a = 5;
const b = 2;
let myName = "gu";
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);
const a = 3;        // error
const b = 6;        // error
a = 3;              // error
b = 6;              // error
let myName "gugu"   // error
myName = "gugugu";
console.log("my new name is " + myName);
```

---------------------------
2024-06-24

### 2.4 Booleans

```js
// 1 true
// 0 false
// null
// undefined

const a = null;
let b;
console.log(a, b);  // null, undefined
```

### 2.5 Arrays

```js
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";
const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
daysOfWeek.push("sun");
console.log(daysOfWeek, daysOfWeek[0]);
```

### 2.6 Objects

```js
const playerName = "9";
const playerPoints = 999999;
const playerAge = 99;

const player = {
    name : "9",
    points : 999999,
    age : 99
}
console.log(player.name, player.points, player.age);
player.nickname = "GuGu";
player.age = 36;
player.points = player.points + 1;
console.log(player);
```

### 2.7 Functions part One

```js
alert();
console.log();
console.log("Hello, 9");
console.log("Hello, kim");
console.log("Hello, loy");

function sayHello(nameOfPerson, age){
    // console.log("Hello, my name is " + nameOfPerson + ". I'm " + age + ".");
    return `Hello, my name is ${nameOfPerson}. I'm ${age}.`;
}
sayHello("9", 36);
sayHello("kim", 35);
```

### 2.8 Functions part Two

```js
function plus(a, b){
    return a + b;
}
function divide(a, b){
    return a / b;
}
function minus(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
plus(8, 50);
divide(10, 2);
minus(50, 10);
multiply(10, 10);

const player = {
    name : "9",
    points : 999999,
    age : 99,
    sayHello: function(otherPersonsName){
        // console.log(`Hello, ${otherPersonsName}! my name is ${player.name}.`);
        return `Hello, ${otherPersonsName}! my name is ${player.name}.`;
    }
}
player.sayHello("kim");
```

### 2.9 Recap
### 2.10 Recap II

```js
const calculator = {
    plus : function(a, b){
        console.log(a + b);
    },
    minus : function(a, b){
        console.log(a - b);
    },
    divide : function(a, b){
        console.log(a / b);
    },
    times : function(a, b){
        console.log(a * b);
    },
    power : function(a, b){
        console.log(a ** b);
    }
}
calculator.plus(5, 2);
calculator.minus(5, 2);
calculator.divide(5, 2);
calculator.times(5, 2);
calculator.power(5, 2);
```

### 2.11 Returns
### 2.12 Recap

```js
const calculator = {
    plus : function(a, b){
        return a + b;
    },
    minus : function(a, b){
        return a - b;
    },
    divide : function(a, b){
        return a / b;
    },
    times : function(a, b){
        return a * b;
    },
    power : function(a, b){
        return a ** b;
    }
}
calculator.plus(5, 2);
calculator.minus(5, 2);
calculator.divide(5, 2);
calculator.times(5, 2);
calculator.power(5, 2);
const plusResult = calculator.plus(5, 10);
const minusResult = calculator.minus(plusResult, 5);
const divideResult = calculator.divide(100, minusResult);
const timesResult = calculator.times(divideResult, 2);
const powerResult = calculator.power(timesResult, 2);
console.log(plusResult, minusResult, divideResult, timesResult, powerResult);

const age = 96;
function calculateKrAge(ageOfForeigner){
    ageOfForeigner + 2;
}
const krAge = calculateKrAge(96);   // undefined

const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}
const krAge = calculateKrAge(age);   // 98
```

### 2.13 Conditionals

```js
if ... else ...

const age = prompt("how old are you?");
console.log(age, typeof age, parseInt(age), typeof parseInt(age));

const age = parseInt(prompt("how old are you?"));
console.log(age, typeof age);

// "lalalal" -> NaN (Not a Number)

// string -> number
// parseInt()
// Number()
```

---------------------------
2024-06-25

### 2.14 Conditionals part Two

```js
isNaN();

const age = parseInt(prompt("how old are you?"));
console.log(isNaN(age));    // false -> number
console.log(isNaN(age));    // true -> not a number

if (condition){
    // condition === true
}

if (condition){
    // condition === true
} else {
    // condition === false
}

const age = parseInt(prompt("how old are you?"));
if (isNaN(age)){
    console.log("Please write a number.");
} else {
    console.log("Thank you for writing your age.");
}
```

### 2.15 Conditionals part Three
### 2.16 Recap

```js
const age = parseInt(prompt("how old are you?"));
if (isNaN(age) || age < 0){
    console.log("Please write a real positive number.");
} else if (age < 18){
    console.log("You are too young.");
} else if (age >= 18 && age <= 50){
    console.log("You can drink.");
} else if (age > 50 && age <= 80){
    console.log("You should exercise.");
} else if (age > 80) {
    console.log("You can do whatever you want.");
}

// AMD
// true && true === true
// true && false === false
// false && true === false
// false && false === false

// OR
// true || true === true
// true || false === true
// false || true === true
// false || false === false
```

---------------------------
2024-06-26

### 3 JAVASCRIPT ON THE BROWSER
### 3.0 The Document Object

```js
document
document.title
document.title = "Hi";
document.head
document.body
console.dir(document);
```

### 3.1 HTML in Javascript

```js
<h1 autofocus id="title" class="hello">Grab me!</h1>
const title = document.getElementById("title");
document.getElementById("title").innerText = "Got you!"
document.getElementById("title").autofocus
document.getElementById("title").id
document.getElementById("title").className
```

---------------------------
2024-06-27

### 3.2 Searching For Elements

```js
<h1 class="hello">Grab me!</h1>
<h1 class="hello">Grab me!</h1>
<h1 class="hello">Grab me!</h1>
const hellos = document.getElementByClassName("hello");

<div class="hello">
    <h1>Grab me!</h1>
</div>
const title = document.getElementByTagName("h1");
console.log(title);
const title = document.querySelector(".hello h1");
console.log(title);

<div class="hello">
    <h1>Grab me 1!</h1>
</div>
<div class="hello">
    <h1>Grab me 2!</h1>
</div>
<div class="hello">
    <h1>Grab me 3!</h1>
</div>
const title = document.querySelectorAll(".hello h1");
console.log(title);
```

### 3.3 Events

```js
console.log();
console.dir();

<div class="hello">
    <h1>Grab me 1!</h1>
</div>
<div class="hello">
    <h1>Grab me 2!</h1>
</div>
<div class="hello">
    <h1>Grab me 3!</h1>
</div>
const title = document.querySelector("div.hello:first-child h1");
// title.style.color = "blue";
function handleTitleClick() {
    console.log("title was clicked!");
}
title.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick;
```

### 3.4 Events part Two

```js
<div class="hello">
    <h1>Grab me 1!</h1>
</div>
<div class="hello">
    <h1>Grab me 2!</h1>
</div>
<div class="hello">
    <h1>Grab me 3!</h1>
</div>
const title = document.querySelector("div.hello:first-child h1");
function handleMouseEnter() {
    // console.log("mouse is here!");
    title.innerText = "Mouse is here!";
}
function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}
title.addEventListener("mouseenter", handleMouseEnter);
// title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseleave", handleMouseLeave);
// title.onmouseleave = handleMouseLeave;

// addEventListenr 를 더 선호하는 이유는 .removeEventListenr 로 제거할 수 있고, 다루기 더 좋음
```

### 3.5 More Events

```js
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("copy!!!");
}
function handleWindowOffline() {
    alert("SOS no WIFI!!!");
}
function handleWindowOnline() {
    alert("All Good!!!");
}
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
```

### 3.6 CSS in Javascript

```js
<h1>Click me!</h1>
const h1 = document.querySelector("h1");
function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}
h1.addEventListener("click", handleTitleClick);
```

### 3.7 CSS in Javascript part Two
### 3.8 CSS in Javascript part Three

```js
/*
h1 {
    color: cornflowerblue;
}
.clicked {
    color: tomato;
}
*/
<h1>Click me!</h1>
const h1 = document.querySelector("h1");
function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}
h1.addEventListener("click", handleTitleClick);

const h1 = document.querySelector("h1");
function handleTitleClick() {
    h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);
```

---------------------------
2024-06-28

### 4 LOGIN
### 4.0 Input Values
### 4.1 Form Submission

```js
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
function onLoginBtnClick(){
    // console.dir(loginInput);
    // console.log("click!");
    // console.log(loginInput.value);

    const username = loginInput.value;
    if (username === "") {
        alert("Please write your name.");
    } else if (username.length > 15) {
        alert("Your name is too long.");
    }
}
loginButton.addEventListener("click", onLoginBtnClick);
```

### 4.2 Events

```js
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
function onLoginSubmit(event){
    event.preventDefault();
    // console.log(event);
    const username = loginInput.value;
    console.log(username);
}
loginForm.addEventListener("submit", onLoginSubmit);
```

### 4.3 Events part Two

```js
<a href="http://nomadcoders.co">Go to courses</a>
const link = document.querySelector("a");
function handleLinkClick(event) {
    // alert();
    event.preventDefault();
    console.dir(event);
}
link.addEventListener("click", handleLinkClick);
```

---------------------------
2024-07-23

### 4.4 Getting Username
### 4.5 Saving Username
### 4.6 Loading Username
### 4.7 Super Recap

```js
loginForm.classList.add("hidden");
greeting.classList.remove("hidden");

greeting.innerText = `Hello! ${username}`;
"Hello! " + username
`Hello! ${username}`

localStorage.setItem("username", "gu");
localStorage.getItem("username");
localStorage.removeItem("username");
```

### 5 CLOCK
### 5.0 Intervals
### 5.1 Timeouts and Dates
### 5.2 PadStart
### 5.3 Recap

```js
setInterval(sayHello, 5000);
setTimeout(sayHello, 5000);

const date = new Date();
date.getDate();
date.getDay();
date.getFullYear();
date.getHours();
date.getMinutes();
date.getSeconds();

padStart();
padEnd();

const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");
clock.innerText = `${hours}:${minutes}:${seconds}`;
```

---------------------------
2024-08-07

### 6 QUOTES AND BACKGROUND
### 6.0 Quotes
### 6.1 Background
### 6.2 Recap

- Time waits for no ones.
- If you don't know where you're going, just go.
- Love me like there's no tomorrow.
- Everything happens for a reason.
- Everything I do always comes back to me.
- Worrying solves nothing.
- Everything changes but Nothing changes.
- Be yourself.
- If it's meant to be It will be.
- Worrying will never change the outcome.

```js
Math.random();                      // 0 ~ 0.99999.....
Math.random() * 10;                 // 0 ~ 9.99999.....
Math.floor(Math.random() * 10);     // 0 ~ 9
Math.floor(Math.random() * 4);      // 0 ~ 3
Math.round()                        // 반올림
Math.ceil()                         // 올림
Math.floor()                        // 내림

quote.innerText = todaysQuote.quote;
const bgImage = document.createElement("img");
document.body.prepend(bgImage);
document.body.appendChild(bgImage);
```

---------------------------
2024-08-07

### 7 TO DO LIST
### 7.0 Setup
### 7.1 Adding ToDos

```js
const li = document.createElement("li");
const span = document.createElement("span");
span.innerText = newToDo;
const button = document.createElement("button");
button.innerText = "❌";
button.addEventListener("click", deleteToDo);
li.appendChild(span);
li.appendChild(button);
toDoList.appendChild(li);
```

---------------------------
2024-08-12

### 7.2 Deleting To Dos

```js
const li = event.target.parentElement;
li.remove();
```

### 7.3 Saving To Dos

```js
const toDos = [];
toDos.push(newToDo);
localStorage.setItem("todos", toDos);
JSON.stringify(obj);    // to string
localStorage.setItem("todos", JSON.stringify(toDos));
```

---------------------------
2024-08-30

### 7.4 Loading To Dos part One
### 7.5 Loading To Dos part Two

```js
JSON.stringify(obj);    // to string
JSON.parse(obj);        // to array

JSON.parse(localStorage.getItem("todos"));
===
const TODOS_KEY = "todos";
JSON.parse(localStorage.getItem(TODOS_KEY));

function sayHello(item) {
    console.log("this is the turn of", item);
}
parsedToDos.forEach(sayHello);
===
parsedToDos.forEach((item) => console.log("this is the turn of", item));
```

---------------------------
2024-09-02

### 7.6 Deleting To Dos part One
### 7.7 Deleting To Dos part Two
### 7.8 Deleting To Dos part Three

```js
// remove
const li = event.target.parentElement;
li.remove();
// const removeToDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
// toDos = removeToDos;
toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
saveToDos();

// paint
const li = document.createElement("li");
li.id = newToDo.id;
const span = document.createElement("span");
span.innerText = newToDo.text;

const newToDoObj = {
    text: newToDo,
    id: Date.now(),
};
toDos.push(newToDoObj);
paintToDo(newToDoObj);
```

---------------------------
2024-11-20

### 8 WEATHER
### 8.0 Geolocation

```js
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
}
function onGeoError() {
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```

### 8.1 Weather API
### 8.2 Conclusions

```js
// openweathermap.org/api

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
// console.log(url);
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.name, data.weather[0].main, data.main.temp);
    });
```

---------------------------