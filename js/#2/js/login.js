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

  const idInput = document.querySelector("#id-input");
  const passInput = document.querySelector("#password-input");
  
  document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    if ( idInput.value == '') {
      alert("아이디입력하세요");
    }
    if ( passInput.value == '') {
      alert("비번입력하세요");
    }
    if ( passInput.value.length < 6) {
      alert("6자이상");
    }});
