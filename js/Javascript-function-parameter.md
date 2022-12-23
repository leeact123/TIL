# Javascript-function-parameter

## 자바스크립트 parameter를 사용하면 중복되는 function을 줄일 수 있다.

- parameter

## How to

1. `parameter(매개변수)`를 function ()안에 써주면 `argument(인수)`를 전달 받을 수 있다.
2. `parameter`를 사용하면 function이 중복되는것을 방지할 수 있다.

```HTML
        <body>
            <div class="alert-box" id="alert">알림창</div>
            <button onclick="closeAlert()">X</button>

            <button onclick ="openAlert()">버튼</button>
        </body>
```

## 수정

```HTML
        <body>
            <div class="alert-box" id="alert">알림창</div>
            <button onclick="alert('none')">X</button>

            <button onclick ="alert('block')">버튼</button>
        </body>
```

```css
.alert-box {
  background-color: skyblue;
  padding: 20px;
  color: white;
  border-radius: 5px;
  display: none;
}
```

```JS

        function openAlert() {
            document.getElementById('alert').style.display = 'block';
        }
        function closeAlert() {
            document.getElementById('alert').style.display = 'none';
        }


```

## 수정

```js
function Alert(change) {
  document.getElementById("alert").style.display = change;
}
```
