# javascriptForBeginners : meme-maker

> Link : [GU|javascriptForBeginners:meme-maker](https://ioabcoi.github.io/fedev/javascriptForBeginners/meme-maker/index.html "GU")

---------------------------

# 강의
[nomadcoders](https://nomadcoders.co/javascript-for-beginners-2 "nomadcoders")

## 구현하는 기능
- HTML5 Canvas
- Mouse Events
- 2D Context
- 2D Painting
- Brush Size
- Image Saving

## 다음과 같은 패키지를 사용합니다.
```js
{
    "이름":"바닐라JS로 그림 앱 만들기",
    "섹션":"무엇을 사용하나요??",
    "패키지": [
        "Javascript"
        "Canvas"
        "2D Context"
        "Pointer Events"
    ]
}
```

- JavaScript
- HTML5
- CSS

## 결과적으로, 이 수업 이후 ...
- 자바스크립트 기본기에서 더 나아가 인터랙티브한 기능에 대하여 이해하게된다.
- 자바스크립트로 그림판 구현할 수 있게된다.
- 바닐라 자바스크립트를 활용해서 간단한 웹 서비스를 만들수 있다.

## 바닐라 JS로 그림 앱 만들기 (2022)
- 이제는 '짤 생성기' (Meme Maker. 밈 메이커)를 만들자!
- 2022 버전! 그림판에서 더욱 더 재밌게! 업그레이드 해서 돌아왔습니다!
- 총 강의수: 24개 (2.9시간)
- JS 심화학습을 원한다면. 딱맞춤인 강의입니다.
- JS Canvas 를 배워서. 일명 '짤 생성기'를 만듭니다.
- 한글자막 100% 업데이트 완료되었습니다 ;)

---------------------------
2024-03-28

## 참고
[CanvasAPI공식문서](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API "link")
[벚꽃](https://codepen.io/at80/pen/kyOdeK "link")
[Spiral](https://codepen.io/hakimel/pen/QdWpRv "link")
[FallingConfetti(색종이)](https://codepen.io/linrock/pen/nMadjQ "link")
[ParallaxSkyline](https://codepen.io/jackrugile/pen/nmexZj "link")
[FizzySparks](https://codepen.io/waisbren89/pen/gwvVpP "link")
[Fireworks](https://codepen.io/juliangarnier/pen/gmOwJX "link")
[MechanicalGrass](https://codepen.io/tholman/pen/DvYNNV "link")

---------------------------
2024-04-02

[w3schools](https://www.w3schools.com/tags/ref_canvas.asp "link")

## HTML Canvas Reference
> The <canvas> element defines a bitmapped area in an HTML page.
> The Canvas API allows JavaScript to draw graphics on the canvas.
> The Canvas API can draw shapes, lines, curves, boxes, text, and images, with colors, rotations, transparencies, and other pixel manipulations.

You can add a canvas element anywhere in an HTML page with the <canvas> tag:

```js
<canvas id="myCanvas" width="300" height="150"></canvas>
```

You can access a <canvas> element with the HTML DOM method getElementById().
To draw in the canvas you need to create a 2D context object:

```js
const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
```

- Note
> The HTML <canvas> element itself has no drawing abilities.
> You must use JavaScript to draw any graphics.
> The getContext() method returns an object with tools (methods) for drawing.

### Drawing on the Canvas
After you have created a 2D context, you can draw on the canvas.
The fillRect() method draws a black rectangle with a top-left corner at position 20,20. The rectangle is 150 pixel wide and 100 pixels high.

```js
const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

ctx.fillRect(20, 20, 150, 100);
```

### Using Colors
The fillStyle property sets the fill color of the drawing object:

```js
const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 100);
```

You can also create a new <canvas> element with the document.createElement() method, and add the element to an existing HTML page:

```js
const myCanvas = document.createElement("canvas");
document.body.appendChild(myCanvas);
const ctx = myCanvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 100);
```

### Paths
The common way to draw on the canvas is to:
- Begin a Path - beginPath()
- Move to a Point - moveTo()
- Draw in the Path - lineTo()
- Draw the Path - stroke()

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 100);
ctx.lineTo(70, 100);
ctx.stroke();
```

- Complete Canvas API Reference
> This reference covers all Properties and Methods of the getContext("2d") Object, used to draw text, lines, boxes, circles, pictures, and more on the canvas.

### Drawing Methods
fillRect()	                Draws a "filled" rectangle
strokeRect()	            Draws a rectangle (with no fill)
clearRect()	                Clears specified pixels within a rectangle

### Path Methods
beginPath()	                Begins a new path or resets the current path
closePath()	                Adds a line to the path from the current point to the start
isPointInPath()	            Returns true if the specified point is in the current path
moveTo()	                Moves the path to a point in the canvas (without drawing)
lineTo()	                Adds a line to the the path
fill()	                    Fills the current path
rect()	                    Adds a rectangle to the path
stroke()	                Draws the current path

#### Circles and Curves
bezierCurveTo()	            Adds a cubic Bézier curve to the path
arc()	                    Adds an arc/curve (circle, or parts of a circle) to the path
arcTo()	                    Adds an arc/curve between two tangents to the path
quadraticCurveTo()	        Adds a quadratic Bézier curve to the path

### Text
direction	                Sets or returns the direction used to draw text
fillText()	                Draws "filled" text on the canvas
font	                    Sets or returns the font properties for text content
measureText()	            Returns an object that contains the width of the specified text
strokeText()	            Draws text on the canvas
textAlign	                Sets or returns the alignment for text content
textBaseline	            Sets or returns the text baseline used when drawing text

### Colors, Styles, and Shadows
addColorStop()	            Specifies the colors and stop positions in a gradient object
createLinearGradient()	    Creates a linear gradient (to use on canvas content)
createPattern()	            Repeats a specified element in the specified direction
createRadialGradient()	    Creates a radial/circular gradient (to use on canvas content)
fillStyle	                Sets or returns the color, gradient, or pattern used to fill the drawing
lineCap	                    Sets or returns the style of the end caps for a line
lineJoin	                Sets or returns the type of corner created, when two lines meet
lineWidth	                Sets or returns the current line width
miterLimit	                Sets or returns the maximum miter length
shadowBlur	                Sets or returns the blur level for shadows
shadowColor	                Sets or returns the color to use for shadows
shadowOffsetX	            Sets or returns the horizontal distance of the shadow from the shape
shadowOffsetY	            Sets or returns the vertical distance of the shadow from the shape
strokeStyle	                Sets or returns the color, gradient, or pattern used for strokes

### Transformations
scale()	                    Scales the current drawing bigger or smaller
rotate()	                Rotates the current drawing
translate()	                Remaps the (0,0) position on the canvas
transform()	                Replaces the current transformation matrix for the drawing
setTransform()	            Resets the current transform to the identity matrix. Then runs transform()

### Image Drawing
drawImage()	                Draws an image, canvas, or video onto the canvas

### The ImageData Object / Pixel Manipulation
createImageData()	        Creates a new, blank ImageData object
getImageData()	            Returns an ImageData object that copies the pixel data for the specified rectangle on a canvas
ImageData.data	            Returns an object that contains image data of a specified ImageData object
ImageData.height	        Returns the height of an ImageData object
ImageData.width	            Returns the width of an ImageData object
putImageData()	            Puts the image data (from a specified ImageData object) back onto the canvas

### Compositing
globalAlpha	                Sets or returns the current alpha or transparency value of the drawing
globalCompositeOperation	Sets or returns how a new image are drawn onto an existing image

### Other Methods
clip()	                    Clips a region of any shape and size from the original canvas
save()	                    Saves the state of the current drawing context and all its atributes
restore()	                Restores the previously saved state and attributes
createEvent()	 
getContext()	 
toDataURL()

---------------------------
2024-04-02

[mdn](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API "link")

## Canvas API

Canvas API는 JavaScript와 HTML <canvas> 엘리먼트를 통해 그래픽을 그리기위한 수단을 제공합니다. 
무엇보다도 애니메이션, 게임 그래픽, 데이터 시각화, 사진 조작 및 실시간 비디오 처리를 위해 사용됩니다.
Canvas API는 주로 2D 그래픽에 중점을 두고 있습니다. 
WebGL API 또한 <canvas> 엘리먼트를 사용하며, 하드웨어 가속 2D 및 3D 그래픽을 그립니다.

[JavaScript](https://developer.mozilla.org/ko/docs/Web/JavaScript "link")
[Html](https://developer.mozilla.org/ko/docs/Web/HTML "link")
[WebGLAPI](https://developer.mozilla.org/ko/docs/Web/API/WebGL_API "link")

> WebGL
> WebGL(Web Graphics Library)은 플러그인을 사용하지 않고 웹 브라우저에서 상호작용 가능한 3D와 2D 그래픽을 표현하기 위한 JavaScript API입니다. 
> WebGL은 HTML5 <canvas> 요소에서 사용할 수 있는, OpenGL ES 2.0을 대부분 충족하는 API를 제공합니다.

### 기본 예시
canvas에 초록색 사각형을 그리는 간단한 예시입니다.

#### HTML 
```js
<canvas id="canvas"></canvas>
```

#### JavaScript
Document.getElementById() 메소드는 HTML <canvas> 엘리먼트에 대한 참조를 얻습니다. 
그 다음, HTMLCanvasElement.getContext() 메소드는 엘리먼트의 컨텍스트(렌더링될 그리기의 대상)를 얻습니다.
실제 그리기는 CanvasRenderingContext2D (en-US) 인터페이스를 사용해 수행됩니다. fillStyle (en-US) 프로퍼티는 사각형을 초록색으로 만듭니다. fillRect() (en-US) 메소드는 좌측 상단 코너를 (10, 10) 위치에 놓으며, 너비를 150, 높이를 100으로 지정합니다.

[getElementById](https://developer.mozilla.org/ko/docs/Web/API/Document/getElementById "link")
[getContext](https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/getContext "link")
[CanvasRenderingContext2D(en-US)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D "link")
[fillStyle(en-US)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle "link")
[fillRect(en-US)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect "link")

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
```

### 레퍼런스
[HTMLCanvasElement](https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement "link")
[CanvasRenderingContext2D(en-US)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D "link")
[CanvasGradient(en-US)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient "link")
[CanvasImageSource(en-US)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D "link")
[CanvasPattern(en-US)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern "link")
[ImageBitmap(en-US)](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap "link")
[ImageData](https://developer.mozilla.org/ko/docs/Web/API/ImageData "link")
[RenderingContext]( "link")
[TextMetrics(en-US)](https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics "link")
[OffscreenCanvasExperimental](https://developer.mozilla.org/ko/docs/Web/API/OffscreenCanvas "link")
[Path2D(en-US)Experimental](https://developer.mozilla.org/en-US/docs/Web/API/Path2D "link")
[ImageBitmapRenderingContext(en-US)Experimental](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapRenderingContext "link")
[CanvasCaptureMediaStream(en-US)Experimental](https://developer.mozilla.org/en-US/docs/Web/API/CanvasCaptureMediaStreamTrack "link")

참고: 노트: WebGLRenderingContext에 관련된 인터페이스는 WebGL 하위에 참조되어있습니다.
CanvasCaptureMediaStream (en-US)은 관련된 인터페이스입니다.

### 가이드 및 튜토리얼

[Canvas튜토리얼](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial "link")
Canvas API의 기본적인 사용과 고급 기능 모두를 다루는 이해하기 쉬운 튜토리얼.

[HTML5Canvas깊이살펴보기](https://joshondesign.com/p/books/canvasdeepdive/title.html "link")
Canvas API 및 WebGL의 실습, 자세한 소개.

[Canvas핸드북](https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html "link")
Canvas API에 대한 유용한 레퍼런스.

[데모:Abasicray-caster]( "link")
Canvas를 사용한 ray-tracing 애니메이션 데모.

[Canvas를사용하여비디오조작](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Manipulating_video_using_canvas "link")
<video>와 <canvas>를 조합하여 실시간으로 비디오 데이터를 조작.

[video](https://developer.mozilla.org/ko/docs/Web/HTML/Element/video "link")
[canvas](https://developer.mozilla.org/ko/docs/Web/HTML/Element/canvas "link")

### 라이브러리
Canvas API는 굉장히 강력하지만, 사용하는 것이 항상 간단하지 않습니다. 아래에 나열된 라이브러리들은 캔버스 기반 프로젝트를 더 빠르고 더 쉽게 생성할 수 있게 해줍니다.

[EaselJS](https://createjs.com/easeljs "link")
게임, 생성 예술 및 기타 고도의 그래픽 경험을 쉽게 생성할 수 있게 해주는 오픈소스 캔버스 라이브러리입니다.

[Fabric.js](http://fabricjs.com/ "link")
SVG 파싱 기능을 갖춘 오픈소스 캔버스 라이브러리입니다.

[heatmap.js](https://www.patrick-wied.at/static/heatmapjs/ "link")
캔버스 기반 데이터 열지도를 생성하기위한 오픈소스 라이브러리입니다.

[JavaScriptInfoVisToolkit](https://thejit.org/ "link")
인터렉티브한 데이터 시각화를 생성합니다.

[Konva.js](https://konvajs.org/ "link")
데스크탑 및 모바일 애플리케이션을 위한 2D 캔버스 라이브러리입니다.

[p5.js](https://p5js.org/ "link")
예술가, 디자이너, 교육자 및 입문자를 위한 캔버스 그리기 기능의 모든 세트를 포함하고 있습니다.

[Paper.js](http://paperjs.org/  "link")
HTML5 Canvas 위에서 실행되는 오픈소스 벡터 그래픽 스크립팅 프레임워크입니다.

[Phaser](https://phaser.io/ "link")
Canvas 및 WebGL 기반의 브라우저 게임을 위한 빠르고, 자유롭고, 재미있는 오픈소스 프레임워크입니다.

[Processing.js](https://processingjs.org/ "link")
Processing 시각화 언어의 포트입니다.

[Pts.js](https://ptsjs.org/ "link")
canvas 및 SVG를 사용한 창의적인 코딩 및 시각화를 위한 라이브러리입니다.

[Rekapi](https://github.com/jeremyckahn/rekapi "link")
Canvas를 위한 애니메이션 키 프레임 API입니다.

[Scrawl-canvas](https://scrawl.rikweb.org.uk/ "link")
2D 캔버스 엘리먼트를 생성하고 조작하기위한 오픈소스 JavaScript 라이브러리입니다.

[ZIM 프레임워크](https://zimjs.com/ "link")
canvas에서의 창의적인 코딩을 위한 편의성, 컴포넌트 및 컨트롤을 제공하는 프레임워크입니다. 
접근성 및 다채로운 튜토리얼을 포함합니다.

---------------------------
2024-04-04

[CanvasTutorial](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial "link")



---------------------------
2024-04-05

[whatwg](https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element "link")

---------------------------
---------------------------
---------------------------