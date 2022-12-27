//navbar 스크롤시 작아지게 커지게
const navLogo = document.querySelector(".navbar-brand");

function scrollMove() {
   if (window.scrollY >= 100) {
    navLogo.style.fontSize = "20px"; 
   }else if (window.scrollY == 0) {
    navLogo.style.fontSize = "30px";
   }
}
window.addEventListener("scroll", scrollMove);

//div박스 스크롤이 다 내려가면 alert
const loremBox = document.querySelector(".lorem");
function loremScroll() {
    let divScroll = loremBox.scrollTop;
    let divHeight = loremBox.scrollHeight;
    let divBoxheight = loremBox.clientHeight;
    console.log(divScroll, divHeight, divBoxheight);
    if (divScroll + divBoxheight == divHeight){
     alert("약관을 다 읽으셨습니다");
    }
}
loremBox.addEventListener("scroll", loremScroll);



