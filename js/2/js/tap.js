const tabBtn = document.querySelectorAll(".tab-button");
const contentBox = document.querySelectorAll(".tab-content");


//     for (let i = 0; i < tabBtn.length; i++){
    
//         tabBtn[i].addEventListener("click", function(){
//         tabBtn.forEach(function(tab){
//         tab.classList.remove("selected");
//         });
//         tabBtn[i].classList.add("selected");
//         contentBox.forEach(function(content){
//         content.classList.remove("show");
//         });
//         contentBox[i].classList.add("show");
//     })
// }


// for (let i = 0; i < tabBtn.length; i++){
    
//     tabBtn[i].addEventListener("click", function(){
//     openTab(i);
// })
// }

function openTab(num) {
        tabBtn.forEach(function(tab){
        tab.classList.remove("selected");
        });
        tabBtn[num].classList.add("selected");
        contentBox.forEach(function(content){
        content.classList.remove("show");
        });
        contentBox[num].classList.add("show");
}

const btnList = document.querySelector(".list");

btnList.addEventListener("click", function(e){
  openTab(e.target.dataset.id);
  
})



// function showSelectTab1() {
//     tabBtn.forEach(function(tab){
//         tab.classList.remove("selected");
//     });
//     tabBtn[0].classList.add("selected");
//     contentBox.forEach(function(content){
//         content.classList.remove("show");
//     })
//     contentBox[0].classList.add("show");
// }

// tabBtn[0].addEventListener("click", showSelectTab1);

// function showSelectTab2() {
//     tabBtn.forEach(function(tab){
//         tab.classList.remove("selected");
//     });
//     tabBtn[1].classList.add("selected");
//     contentBox.forEach(function(content){
//         content.classList.remove("show");
//     })
//     contentBox[1].classList.add("show");
// }

// tabBtn[1].addEventListener("click", showSelectTab2);

// function showSelectTab3() {
//     tabBtn.forEach(function(tab){
//         tab.classList.remove("selected");
//     });
//     tabBtn[2].classList.add("selected");
//     contentBox.forEach(function(content){
//         content.classList.remove("show");
//     })
//     contentBox[2].classList.add("show");
// }

// tabBtn[2].addEventListener("click", showSelectTab3);




const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");

let car2 = {name : "?????????", price: [50000, 3000, 4000]}; 


productName.innerHTML = car2.name;
productPrice.innerHTML = car2.price[0];

const productForm = document.querySelector(".my-5");
const productChoice = document.querySelector(".form-select");
const productOption = document.querySelector(".product-option");

let pants = [28, 30, 32];
let shirts = [95, 100, 105];

function showSize() {
  if(productChoice.value == "??????"){   
  productOption.classList.remove("form-hide");
  productOption.innerHTML = "";
 shirts.forEach(function(data){
  productOption.insertAdjacentHTML("beforeend", `<option>${data}</option>`);
 }) 
 
} else if (productChoice.value == "??????"){
  productOption.classList.add("form-hide");
} else if (productChoice.value == "??????"){
  productOption.classList.remove("form-hide");
  productOption.innerHTML = "";
  pants.forEach(function(item) {
  productOption.insertAdjacentHTML("beforeend", `<option>${item}</option>`);
  })
}
}

productChoice.addEventListener("click", showSize);








let template = "<p>??????</p>";
document.querySelector("#test").insertAdjacentHTML("beforeend", template);
//$("#test").append(template); 
