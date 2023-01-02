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
    //div박스에서 스크롤한양
    let divHeight = loremBox.scrollHeight;
    //div박스의 실제높이
    let divBoxheight = loremBox.clientHeight;
    //div박스가 보여지는 높이
   
    if (divScroll + divBoxheight == divHeight){
     alert("약관을 다 읽으셨습니다");
    }
}
loremBox.addEventListener("scroll", loremScroll);



