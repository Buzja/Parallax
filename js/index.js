const parallaxObj = document.getElementById("parallax");
const parallaxSpeed = parallaxObj.dataset.parallaxspeed;
let startPos = parallaxObj.offsetTop;

window.addEventListener("scroll", () => {
    if (window.scrollY >= startPos) {
        parallaxObj.style.backgroundPositionY = (window.scrollY - startPos) / parallaxSpeed + "px";
    }
})

window.onresize = () => {
    startPos = parallaxObj.offsetTop;
    parallaxObj.style.backgroundPositionY = 0 + "px";
}