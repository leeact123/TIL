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

4. array를 풀어헤쳐서 함수 파라미터로 사용

```js
function add(a, b, c) {
  console.log(a + b + c);
}

var arr = [10, 20, 30];
add(10, 20, 30); //60

add(arr[0], arr[1], arr[2]); //60

add.apply(undefined, arr); //60 ,옛날방식 , add함수를 undefined에서 실행하는데 파라미터로 arr를 풀어헤쳐서 실행하라는뜻.

add(...arr); //60, 요즘방식
```

## apply, call 함수 개념

person.인사()를 person2에서 사용하고 싶을때 person.인사.apply(person2)를 쓴다.
실행할함수.apply(적용할곳)

```js
var person = {
  인사: function () {
    console.log(this.name + "hi");
  },
};

var person2 = {
  name: "sony",
};
person.인사(); //undefinedhi
person.인사.apply(person2); //sonyhi
person.인사.call(person2); //sonyhi

person.인사.apply(person2, [1, 2]);
person.인사.call(person2, 1, 2);
```

apply call은 사용방법, 실행 결과가 같다.
apply는 파라미터를 [array]로 집어넣기가능
call은 따로따로 다 넣어줘야 한다.
