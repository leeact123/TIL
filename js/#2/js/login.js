document.querySelector("#modal").addEventListener("click", function () {
    document.querySelector(".black-bg").classList.add("open-modal");
  })

  document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".black-bg").classList.remove("open-modal");
  })

  document.querySelector(".navbar-toggler").addEventListener("click", function () {
    document.querySelector(".list-group").classList.
    toggle("show");
  })

   //로그인창 안에 input
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
