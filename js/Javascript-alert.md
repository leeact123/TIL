# Javascript-alert

## 자바스크립트로 alert창 열고 닫기

- display: none, blcok;
- onclick
- function

## How to

1. `display: none;` `display: block;`을 사용. 어떤창을 열고 닫는 것을 만들 때는 미리만들어놓은 창을 안보이게 해놓고 필요할 때 보이게 하는 방식으로 사용
2. `onclick`을 사용해서 클릭했을 때 특정element에 변화를 줄 수 있다.
3. `function`을 사용해서 긴 코드를 축약해서 쓸 수 있다.

```HTML
        <body>
            <div class="alert-box" id="alert">알림창</div>
            <button onclick="closeAlert()">X</button>

            <button onclick ="openAlert()">버튼</button>
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
