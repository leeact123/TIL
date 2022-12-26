const slideContainer = document.querySelector(".slide-container");
const slideButton1 = document.querySelector(".slide-1");
const slideButton2 = document.querySelector(".slide-2");
const slideButton3 = document.querySelector(".slide-3");
const previousButton = document.querySelector(".before-button");
const nextButton = document.querySelector(".next-button");


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
let currentImg = 1;

function previousSlide() {
    
    if (currentImg == 3) {
        slideContainer.style.transform = "translateX(-100vw)";
        currentImg -= 1;
    } else if (currentImg == 2) {
        slideContainer.style.transform = "translateX(0vw)";
        currentImg -=1;
    }
}

previousButton.addEventListener("click", previousSlide);


function nextSlide() {
    if ( currentImg ==1) {
        slideContainer.style.transform = "translateX(-100vw)";
        currentImg += 1;
    } else if ( currentImg ==2) {
        slideContainer.style.transform = "translateX(-200vw)";
        currentImg += 1;
    }
}

nextButton.addEventListener("click", nextSlide);

// function nextSlide() {
//    if(slideContainer.style.transform == "translateX(0vw)") {
//        slideContainer.style.transform = "translateX(-100vw)";
//     } else if (slideContainer.style.transform == "translateX(-100vw)") {
//         slideContainer.style.transform ="translatex(-200vw)";
//     }
   
// }

// nextButton.addEventListener("click", nextSlide);

// function previousSlide() {
//     if (slideContainer.style.transform == "translateX(-200vw)") {
//         slideContainer.style.transform = "translateX(-100vw)";
//      } else if (slideContainer.style.transform == "translateX(-100vw)") {
//          slideContainer.style.transform ="translatex(0vw)";
//      }
//  }
//  previousButton.addEventListener("click", previousSlide);