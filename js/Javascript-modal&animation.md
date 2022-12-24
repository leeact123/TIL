# Javascript-modal&animation

## 자바스크립트로 모달창, 애니메이션 효과 만들기

- css : visibility, opacity, transition

## How to

1. 시작스타일 설정 (css)
2. 최종스타일 설정 (css)
3. transiton 설정 (css)
4. `addEventListener`로 최종스타일로 변경

```HTML
<body>
    <div class="black-bg">
      <div class="white-bg">
        <h4>로그인하세요</h4>
        <button class="btn btn-danger" id="close">닫기</button>
      </div>
    </div>
    <button id="modal">로그인</button>
</body>
```

```css
.list-group {
  display: none;
}

.show {
  display: block;
}

.black-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  padding: 30px;
  visibility: hidden;
  opacity: 0;
  transition: all 1s;
}
.white-bg {
  background: white;
  border-radius: 5px;
  padding: 30px;
}

.open-modal {
  visibility: visible;
  opacity: 1;
}
```

```JS

        document.querySelector("#modal").addEventListener("click", function(){
          document.querySelector(".black-bg").classList.add("open-modal");
        })

        document.querySelector("#close").addEventListener("click", function(){
          document.querySelector(".black-bg").classList.remove("open-modal");
        })


```
