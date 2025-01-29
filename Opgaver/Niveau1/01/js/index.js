
let button = document.getElementById("my-button");
let green = false;

button.addEventListener("click", function () {
    green = !green;
    button.style.backgroundColor = green ? "#7f7" : "#eee";
});