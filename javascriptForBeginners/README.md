# javascriptForBeginners


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

## images
```javascript  
const image = new Image();
```

## filter(); 
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

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
```

## parseInt();
```javascript 
함수는 문자열 인자를 구문분석하여 특정 진수(수의 진법 체계에 기준이 되는 값)의 정수를 반환합니다.

parseInt(string, radix);

// 4를 리턴
parseInt(4.7, 10)
parseInt(4.7 * 1e22, 10)        // 매우 큰 숫자가 4가 됨
parseInt(0.00000000000434, 10)  // 매우 작은 숫자가 4가 됨

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt
```

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

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
```

## openweathermap
```javascript  
https://openweathermap.org/

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
