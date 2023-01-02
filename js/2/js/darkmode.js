const badge = document.querySelector(".badge");

let count = 0;


function countPlus() {
    count += 1;
    if (count % 2 == 1) {
        badge.innerHTML = "Light";
    } else {
        badge.innerHTML = "Dark";
    }
}

badge.addEventListener("click", countPlus);