const eventAlert = document.querySelector(".alert");
let time = 5;

function eventScreen() {
    time -= 1;
    eventAlert.innerHTML = `${time}초 이내 구매시 사은품 증정`;
    if (time == 0) {
        clearInterval(timeCount);
        eventAlert.style.display = "none";
    }
}

const timeCount = setInterval(eventScreen, 1000);