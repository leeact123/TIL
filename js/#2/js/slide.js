const slideContainer = document.querySelector(".slide-container");
const slideButton1 = document.querySelector(".slide-1");
const slideButton2 = document.querySelector(".slide-2");
const slideButton3 = document.querySelector(".slide-3");
const previousButton = document.querySelector(".slide-4");
const nextButton = document.querySelector(".slide-5");

function imgSlide1() {
    slideContainer.style.transform = "translateX(0vw)";
}

slideButton1.addEventListener("click", imgSlide1);

function imgSlide2() {
    slideContainer.style.transform = "translateX(-100vw)";
}

slideButton2.addEventListener("click", imgSlide2);

function imgSlide3() {
    slideContainer.style.transform = "translateX(-200vw)";
}

slideButton3.addEventListener("click", imgSlide3);


//이전,다음 버튼
function previousSlide() {
    slideContainer.style.transform = "translateX(100vw)";
}

previousButton.addEventListener("click", previousSlide);

function nextSlide() {
   
   
    slideContainer.style.transform = "translateX(-100vw)";
}

nextButton.addEventListener("click", nextSlide);