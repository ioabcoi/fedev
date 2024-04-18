# javascriptForBeginners : chrome-app

Link : [GU|javascriptForBeginners:chrome-app](https://ioabcoi.github.io/fedev/javascriptForBeginners/chrome-app/index.html "GU")

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
2021-04-01

## var 
```javascript
var a = 221;
var b = a - 5;
a = 4; // 재할당 O

var a = 221;
var b = a - 5;
var a = 4; // 재선언 O
```

## let 변수
```javascript
let a = 221;
let b = a - 5;
a = 4; // 재할당 O

let a = 221;
let b = a - 5;
let a = 4; // error 재선언 X
```

## const 상수 (변하지 않는 값)
```javascript
const a = 221;
let b = a - 5;
a = 4; // error 재할당 X

const a = 221;
let b = a - 5;
const a = 4; // error 재선언 X
```

## type
```javascript
const what = "Gu"; // string
const what = true; // boolean : true, false
const what = 9999; // number
const what = 99.9; // float
console.log(what);

input checked="checked" (true) // X
input checked (true) // O
```

## array 배열
```javascript
const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
const sat = "Sat";
const sun = "Sun";
console.log(mon, tue, wed, thu, fri, sat, sun);

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);
console.log(daysOfWeek[2]); // Wed
console.log(daysOfWeek[999]); // undefined

const something = "something";
const guInfo = ["hyeji", 34, true, "omg!!", something];
console.log(guInfo);
```

## object 유사배열
```javascript
const obj = { 
    key : value
}

const guInfo = {
    name : "hyeji",
    age : "34",
    gender : "female",
    tired : false,
    favMusician : ["Crush", "Paul kim"],
    favMusic : [
        {
            name : "Crush",
            title : "Beautiful"
        },
        {
            name : "Paul kim",
            title : "Every day, Every Moment"
        } 
    ]
};

console.log(guInfo);   
console.log(guInfo.name);

guInfo.tired = true;
console.log(guInfo.tired);

console.log(guInfo.favMusician[0]);
console.log(guInfo.favMusic[1].title);
```

## function 함수
```javascript
console.log(arg);  
// console : object
// log : function
// arg : argument

function sayHello(){
    console.log("Hello!");
}
sayHello();
console.log("Hi!");

function sayHello(arg){
    // console.log("Hello! " + arg);
    console.log("Hello!", arg);
}
sayHello("Gu");
console.log("Hi!");

function sayHello(name, age){
    console.log("Hello!", name, "! you have", age, "years of age.");
}
sayHello("Gu", 34);
```

---------------------------
2021-04-08

```javascript        
function sayHello(name, age){
    return `hello ${name}! your ${age} years old.`;
}
const greetGu = sayHello("Gu", 34);
console.log(greetGu);

const calculator = {
    plus: function(a, b){
        return a + b;
    }
}
const plus = calculator.plus(5, 5);
console.log(plus);
```

## contains, add, remove
```javascript        
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    }
}
function init(){
    title.addEventListener("click", handleClick);            
}
init();
```

## toggle
```javascript  
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}
function init(){
    title.addEventListener("click", handleClick);            
}
init();
```

## date
```javascript  
const date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
```

## localStorage
```javascript  
localStorage.setItem("Gu", ":-)");
localStorage.getItem("Gu");
```

---------------------------
2021-04-15

## images
```javascript  
const image = new Image();
```

## Array.filter();
```javascript  
주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

Array.prototype.filter();
arr.filter(callback(element[, index[, array]])[, thisArg]);

// 값이 10 이하인 모든 요소가 제거된 걸러진 배열을 만들기 위해 filter()를 사용
function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered 는 [12, 130, 44]
```
Link : [MDN | Array.filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "Array.filter")

## parseInt();
```javascript 
함수는 문자열 인자를 구문분석하여 특정 진수(수의 진법 체계에 기준이 되는 값)의 정수를 반환합니다.

parseInt(string, radix);

// 4를 리턴
parseInt(4.7, 10)
parseInt(4.7 * 1e22, 10)        // 매우 큰 숫자가 4가 됨
parseInt(0.00000000000434, 10)  // 매우 작은 숫자가 4가 됨
```
Link : [MDN | parseInt](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt "parseInt")

## JSON.parse();
```javascript 
메서드는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성합니다. 
선택적으로, reviver 함수를 인수로 전달할 경우, 결과를 반환하기 전에 변형할 수 있습니다.

JSON.parse(text[, reviver]);

JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
```
Link : [MDN | JSON.parse](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse, "JSON.parse")

## openweathermap
```javascript  
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

const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
```
Link : [openweathermap](https://openweathermap.org/ "openweathermap") 

---------------------------