const tabBtn = document.querySelectorAll(".tab-button");
const contentBox = document.querySelectorAll(".tab-content");


    for (let i = 0; i < tabBtn.length; i++){
    
        tabBtn[i].addEventListener("click", function(){
        tabBtn.forEach(function(tab){
        tab.classList.remove("selected");
        });
        tabBtn[i].classList.add("selected");
        contentBox.forEach(function(content){
        content.classList.remove("show");
        });
        contentBox[i].classList.add("show");
    })
}




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

