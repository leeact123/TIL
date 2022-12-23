# Javascript-getElementByID

## 자바스크립트로 HTML 내용 조작하기

- getElementByID
- innerHTML
- styleColor
- fontSize

## How to

1. HTML 태그에 id를 추가한다.
2. `getElementByID`를 사용해서 조작하고자 하는 태그의 id를 가져온다.
3. `innerHTML` `styleColor` `fontSize` 를 이용해서 텍스트의 내용, 색깔, 크기를 변경한다.

```HTML
<body>
    <h1 id="hello">헬로</h1>
    <h1 id="hi">자바스크립트 어렵네요</h1>
</body>
```

```JS

        document.getElementById("hello").innerHTML = "안녕";
        document.getElementById("hello").style.color = "red";
        document.getElementById("hi").innerHTML = "자바스크립트 쉬운데요";
        document.getElementById("hello").style.fontSize = "25px";


```
