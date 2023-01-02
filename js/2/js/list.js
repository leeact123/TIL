var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];


  const productBox = document.querySelector(".row");

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
  `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${a.title}</h5>
  <p>가격 : ${a.price}</p>
</div>`;
productBox.insertAdjacentHTML("beforeend", productTemplate);
})
}
createProduct(products);

const moreBtn = document.querySelector("#more-btn");
let count = 0;

function getProductsData(){
count++
if (count >= 3) {
  moreBtn.style.display = "none";
}
fetch(`https://codingapple1.github.io/js/more${count}.json`)
.then(res => res.json())
.then(data => {
 createProduct(data);
})
.catch(error => {
  console.log("failed");
})

}

moreBtn.addEventListener("click", getProductsData);

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