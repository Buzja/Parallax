const parallaxObjects = document.querySelectorAll(".parallax");
const parallaxSpeed = 2;

function parralax() {
    parallaxObjects.forEach(obj => {
        const startPos = obj.offsetTop;
        const objHeight = startPos + obj.clientHeight;

        if (window.scrollY + window.innerHeight >= startPos && window.scrollY <= objHeight)
            obj.style.backgroundPositionY = (window.scrollY - startPos) / parallaxSpeed + "px";
    });
}
window.addEventListener("scroll", parralax);
window.addEventListener("resize", parralax);