let cursor = document.querySelector(".cursor");
let cursorBlur = document.querySelector(".cursorBlur");

document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    cursorBlur.style.left = dets.x - 125 + "px"
    cursorBlur.style.top = dets.y - 125 + "px"
});






gsap.to(".nav", {
    backgroundColor: "black",
    height: "85px",

    duration: 0.5,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1

    }
})

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})