# arrow function

---

## 함수를 만드는 이유

1. 코드를 묶고 싶을 때 사용
2. 입출력 기계를 만들고 싶을 때 사용
   함수는 그냥 막쓰라고 있는 문법이 아니다.

---

## arrow function의 장점

1. 입출력 함수를 만들 때 보기쉬움
   ```js
   let 함수 = (a) => {return a + 10}`
   ```
2. 파라미터가 1개면 소괄호도 생략가능
   ```js
   let 함수 = a => {return a + 10}`
   ```
3. 코드가 한줄이면 중괄호,return도 생략가능
   ```js
   let 함수 = (a) => a + 10;
   let 함수 = (a) => console.log(a);
   ```

---

## arrow function 예시

1. forEach 콜백함수

```js
[1, 2, 3, 4]
  .forEach(function (a) {
    console.log(a);
  })

  [
    //fucntion을 제거하고 축약할 수 있다
    (1, 2, 3, 4)
  ].forEach((a) => {
    console.log(a);
  })

  [
    //소괄호,중괄호,function을 제거하고 축약할 수 있다...
    (1, 2, 3, 4)
  ].forEach((a) => console.log(a));
```

2. addEventListener 콜백함수

```js
document.querySelector("btn").addEventListener("click", function (e) {
  e.currentTarget;
});

document.querySelector("btn").addEnentListener("click", (e) => {
  this;
});
```

일반 이벤트리스너에서 `this == e.currentTarget`
arrow function 이벤트리스너에선 `this == 바깥의 this값`
바깥에 있던 this값을 내부에서 그대로 사용한다.

3. Object 안의 함수

```js
let 오브젝트 = {
  함수: function () {
    this; //메소드 안에서 this를 쓰면 그 함수를 가지고 있는 오브젝트를 말한다.
  },
};

let 오브젝트 = {
  함수: () => {
    this; //바깥에 있는 this값이 사용될 수 있으므로 주의한다.
  },
};
오브젝트.함수();
```
