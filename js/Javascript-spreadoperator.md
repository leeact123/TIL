# spread operator

---

### spread operator (...)

소괄호, 중괄호, 대괄호 안에서만 쓸 수 있다.

---

## 기능

1. Array에 붙이면 대괄호를 제거해준다.

```js
var arr = ["hello", "world"];
console.log(...arr); //hello world
```

2. 문자에 쓰일 때

```js
var 문자 = "hello";
console.log(...문자); //h e l l o
console.log("h", "e", "l", "l", "o"); //h e l l o
//문자는 문자[0] 처럼 인덱싱이 가능하다. array는 아니지만 array처럼 인식한다.
```

---

## 활용

1. array 합치기, 복사

```js
var a = [1, 2, 3];
var b = [4, 5];

var c = [...a, ...b]; // a, b array를 합친다. 대괄호를 제거해서 대괄호 안에 넣어준것.
console.log(c); // [1, 2, 3, 4, 5]
```

2. Deep copy

```js
var a = [1, 2, 3];
var b = a; //등호로 복사하면 a값이 변경될 때 b값도 같이 변경된다. 값을 공유하게 되는 문제.

a[3] = 4;

console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3, 4]
```

각각 독릭적인 값을 가지도록 array,object를 복사하려면 spread operator를 이용한다.

```js
var a = [1, 2, 3];
var b = [...a];
s;

a[3] = 4;

console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3]
```

3. Object 합치기, Deep copy

Object에 붙이면 중괄호를 없애준다.

```js
var o1 = { a: 1, b: 2 };
var o2 = { ...o1, c: 3 };
console.log(o2); // {a: 1, b: 2, c: 3}
```

```js
var o1 = { a: 1, b: 2 };
var o2 = 01;
console.log(o2); // {a: 1, b: 2, c: 3}
```

```js
var o1 = { a: 1, b: 2 };
var o2 = { ...o1, a: 2 }; // { a : 2, b : 2} a가 중복 될 때 뒤에 값이 적용된다.

var o1 = { a: 1, b: 2 };
var o2 = { a: 2, ...o1 }; // { a : 1, b: 2}
```
