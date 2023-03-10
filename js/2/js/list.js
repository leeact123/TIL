const productBox = document.querySelector(".row");
const priceSortBtn = document.querySelector("#price");


var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];


//가격순정렬
function priceSort(){
  products.sort(function(a, b) {
    return a.price - b.price
  })

  productBox.innerHTML = "";
  createProduct(products);

}

priceSortBtn.addEventListener("click", priceSort);

//다나가순 정렬하기
const reverseTitleSort = document.querySelector("#title-reverse");

function titleSort(){
products.sort(function(a, b) {
  if (a.title > b.title) return -1;
  else if (b.title > a.title) return 1;
  else return 0;
});
  productBox.innerHTML = "";
  createProduct(products);
}

reverseTitleSort.addEventListener("click", titleSort);

//6만원이하 상품보기
const priceLimit = document.querySelector("#under-price");

function priceLimitSort() {
  let newProducts = products.filter(function(a){
    return a.price <= 60000;
  });
  productBox.innerHTML = "";
  createProduct(newProducts);
}

priceLimit.addEventListener("click", priceLimitSort);


//   for (i = 0; i < products.length; i++){
//   productBox.insertAdjacentHTML("beforeend",
//   `<div class="col-sm-4">
//   <img src="https://via.placeholder.com/600" class="w-100">
//   <h5>${products[i].title}</h5>
//   <p>가격 : ${products[i].price}</p>
// </div>`)
//   }

function createProduct(dataFile){
  dataFile.forEach((a, i) =>{
  let productTemplate =
  `<div class="col-sm-4 product-col">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${a.title}</h5>
  <p>가격 : ${a.price}</p>
  <button id="buy">구매</button>
</div>`;
productBox.insertAdjacentHTML("beforeend", productTemplate);
})
}
createProduct(products);

const moreBtn = document.querySelector("#more-btn");
let clickCount = 0;

function getProductsData(){
clickCount++
if (clickCount >= 3) {
  moreBtn.style.display = "none";
}//3번 이상 클릭시 더보기 버튼 사라지게 한다. 아니면 추가 목록이 닫히게 만들 수도 있을 듯. 생각해볼것
fetch(`https://codingapple1.github.io/js/more${clickCount}.json`)
.then(res => res.json())
.then(data => {
 createProduct(data);
})
.catch(error => {
  console.log("failed");
})

}

moreBtn.addEventListener("click", getProductsData);


const productCol = document.querySelector(".product-col");
const buyBtn = document.querySelectorAll("#buy");

function saveProduct(e) {
  let productName = e.target.previousElementSibling.previousElementSibling.innerHTML;
  console.log(productName);
  let newTitle = JSON.stringify([productName]);
  
  if(localStorage.getItem("cart") != null){
      let getIT = JSON.parse(localStorage.cart);
      getIT.push(productName);
      let addItem = JSON.stringify(getIT);
      localStorage.setItem("cart", addItem);
  } else {
      localStorage.setItem("cart", newTitle);
  }
}
 
buyBtn[0].addEventListener("click", saveProduct);
buyBtn[1].addEventListener("click", saveProduct);
buyBtn[2].addEventListener("click", saveProduct);

// let arr = [1,2,3];
// let newArr = JSON.stringify(arr);

// localStorage.setItem("num", newArr);
// let getArr = localStorage.getItem("num");
// console.log(JSON.parse(getArr));

//ajax get
// $.get('https://codingapple1.github.io/hello.txt').done(function(data){
//   console.log(data)
// })
// .fail(function(){
//   console.log("실패함")
// })

//ajax로 post
// $.post('https://codingapple1.github.io/hello.txt', {name :'kim'}).done(function(data){
//   console.log(data)
// }) 


// $.get("https://codingapple1.github.io/price.json").done(function(data2){
//   console.log(data2)
// })
// .fail(function(){
//   console.assert.log("실패함")
// })


//javascript ajax get
// fetch("https://codingapple1.github.io/price.json")
// .then(res => res.json())
// .then(data => {
//   console.log(data.price) 
// })
// .catch(error => {
//   console.log(error)
// })