var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];


  const productBox = document.querySelector(".row");

  for (i = 0; i < products.length; i++){
  productBox.insertAdjacentHTML("beforeend",
  `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${products[i].title}</h5>
  <p>가격 : ${products[i].price}</p>
</div>`)
  }

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