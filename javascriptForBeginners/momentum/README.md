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

three.js
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

### 2.3 const and let

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

---------------------------
2024-06-21

### 2.4 Booleans
### 2.5 Arrays
### 2.6 Objects
### 2.7 Functions part One
### 2.8 Functions part Two
### 2.9 Recap
### 2.10 Recap II
### 2.11 Returns
### 2.12 Recap
### 2.13 Conditionals
### 2.14 Conditionals part Two
### 2.15 Conditionals part Three
### 2.16 Recap

### 3 JAVASCRIPT ON THE BROWSER
### 3.0 The Document Object
### 3.1 HTML in Javascript
### 3.2 Searching For Elements
### 3.3 Events
### 3.4 Events part Two
### 3.5 More Events
### 3.6 CSS in Javascript
### 3.7 CSS in Javascript part Two
### 3.8 CSS in Javascript part Three

### 4 LOGIN
### 4.0 Input Values
### 4.1 Form Submission
### 4.2 Events
### 4.3 Events part Two
### 4.4 Getting Username
### 4.5 Saving Username
### 4.6 Loading Username
### 4.7 Super Recap

### 5 CLOCK
### 5.0 Intervals
### 5.1 Timeouts and Dates
### 5.2 PadStart
### 5.3 Recap

### 6 QUOTES AND BACKGROUND
### 6.0 Quotes
### 6.1 Background
### 6.2 Recap

### 7 TO DO LIST
### 7.0 Setup
### 7.1 Adding ToDos
### 7.2 Deleting To Dos
### 7.3 Saving To Dos
### 7.4 Loading To Dos part One
### 7.5 Loading To Dos part Two
### 7.6 Deleting To Dos part One
### 7.7 Deleting To Dos part Two
### 7.8 Deleting To Dos part Three

### 8 WEATHER
### 8.0 Geolocation
### 8.1 Weather API
### 8.2 Conclusions

---------------------------