# codingEverybody

- Link : [생활코딩](https://opentutorials.org/course/743 "생활코딩")
- Link : [inflearn](https://www.inflearn.com/course/지바스크립트-언어-기본 "inflearn")

## Math
```javascript
Math.pow(3, 2); // 제곱 9
Math.round(10.6); // 반올림 11
Math.ceil(10.2); // 올림 11
Math.floor(10.6); // 내림 10
Math.sqrt(9); // 제곱근 3
Math.random(); // 랜덤 0~1
10 * Math.random(); // 랜덤 0~10
100* Math.random(); // 랜덤 0~100
```

## Data type
```javascript
Boolean true false
Number .. -1 0 1 ..
String "a" "b" "c"
Undefined
null

빈 문자열 false
undefined false
값이 할당되지 않음 false
null false
NaN false
```

## 연산자
```javascript
> >=
< <= 
= != 
== !==
=== !==
== 보다 === 추천!!
&& ||
```

## 조건문
```javascript
if(조건){
    실행 코드
}else if(조건2){
    실행 코드2
}else{
    실행 코드3
}
```

## 반복문
```javascript
while(조건){
    반복되는 코드
}

var i = 0;
while(i < 10){
    console.log(i);
    i++;
}

for(초기화; 반복되는 조건; 반복되는 코드){
    반복되는 코드
}

for(var i = 0; i < 10; i++){
    console.log(i);
}
```

## 함수
```javascript
function 함수명([인자...[, 인자]]){
    코드
    return 반환값
}

function hi(){
    console.log("hello!");
}
hi();

var hi = function(){
    console.log("hello!");
}
numbering();

// 익명 함수 : 정의 & 호출을 함께 실행 (일회성)
// 즉시 실행 함수 표현(IIFE, Immediately Invoked Function Expression)은 정의되자마자 즉시 실행되는 Javascript Function 를 말한다.
(function (){
    console.log("hello!");
})();
```

## 배열
```javascript
var 변수명 = ["element1", "element2"];

const array = new Array();
array[0] = "html";
array[1] = "css";
array[2] = "javascript";

const array = ["html", "css", "javascript"];

const array = new Array("html", "css", "javascript");

>>
array[0] // html
array[1] // css
array[2] // javascript

배열의 크기 array.length
배열의 끝에 원소를 추가 parray.push(element);
배열에 복수의 원소를 추가 array.concat([element1, element2]);
배열의 시작점에 원소를 추가 array.unshift(element);
배열의 원하는 지점에 원소를 추가 array.splice(index. howmany, element, ..., elementN);
배열의 첫번째 원소를 제거 array.shift();
배열의 마지막 원소를 제거 array.pop();
배열의 정렬 array.sort();
배열의 정렬(역순) array.reverse();
```

## 객체
```javascript
var 변수명 = {
    key : value
};

var information = {
    "gu" : 9,
    "hyeji" : 34,
    "birth" : 1228
};

var information = {};
information["gu"] = 9;
information["hyeji"] = 34;
information["birth"] = 1228;

var information = new Object();
information["gu"] = 9;
information["hyeji"] = 34;
information["birth"] = 1228;

>>
information["gu"] // 9
information["hyeji"] // 34
information["birth"] // 1228

객체에는 객체를 담을 수도 있고, 함수를 담을 수도 있다.

var information = {
    "list" : {
        "gu" : 9,
        "hyeji" : 34,
        "birth" : 1228
    },
    "show" : function(){
        alert("Hello!");
    }
};
console.log(information["list"]); // {"gu" : 9, "hyeji" : 34, "birth" : 1228}
console.log(information["list"]["gu"]); // 9
information["show"](); // alert("Hello!");
information.show(); // alert("Hello!");
```

## 모듈
```javascript
코드의 재활용, 유지보수 용이 -> 코드의 분리
```

## 라이브러리
```javascript
자주 사용되는 로직을 재사용하기 편리하도록 모아놓은 코드들의 집합.
```
