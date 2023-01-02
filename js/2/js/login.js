//로그인창 열기
const loginButton = document.querySelector("#modal");
const loginScreen = document.querySelector(".black-bg");

function openLoginScreen() {
  loginScreen.classList.add("open-modal");
}
loginButton.addEventListener("click",openLoginScreen);

//로그인창 닫기
const loginCloseButton = document.querySelector("#close");

function closeLoginScreen() {
  loginScreen.classList.remove("open-modal");
}  
loginCloseButton.addEventListener("click",closeLoginScreen);
 
loginScreen.addEventListener("click", function(e){
  
  // e.target; //유저가 실제로 누른거
  // e.currentTarget; //이벤트리스너 달린곳
  // e.preventDefault; //이벤트 기본동작 막기
  // e.stopPropagation; // 상위요소로 이벤트버블링 막기
 
if (e.target == loginScreen) {
  loginScreen.classList.remove("open-modal");
}
})

//메뉴창
const toggleButton = document.querySelector(".navbar-toggler");
const menuList = document.querySelector(".list-group");

function openToggle() {
  menuList.classList.
  toggle("show");
}

toggleButton.addEventListener("click",openToggle);

   //로그인창 안에 input창
   const idInput = document.querySelector("#id-input");
   const passInput = document.querySelector("#password-input");
   const loginForm = document.querySelector("#login-form")
   
   loginForm.addEventListener("submit", function(event){
     event.preventDefault();
     if ( idInput.value == '') {
       alert("아이디입력하세요");
     }
     if (/\S+@\S+\.\S+/.test(idInput.value) == false) {
       alert("이메일형식아님");
     }
     if ( /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(passInput.value) == false) {
       alert("비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.");
     }
 
   });

  

