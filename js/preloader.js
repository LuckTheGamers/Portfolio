const loader = document.querySelector(".preloader");
loader.classList.add("preloader-js");
var windowDisplay = document.querySelector("body");
windowDisplay.classList.add("hiddenOverflow");

window.addEventListener("load", () =>{
    windowDisplay.classList.remove("hiddenOverflow")
    loader.remove();
});