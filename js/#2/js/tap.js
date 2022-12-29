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

let car2 = {name : "소나타", price: [50000, 3000, 4000]}; 


productName.innerHTML = car2.name;
productPrice.innerHTML = car2.price[0];

