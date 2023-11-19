const botones = document.querySelectorAll(".nav-btn");
const slidess = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    botones.forEach((btn) => {
        btn.classList.remove("active");

});

slidess.forEach((slide) => {
    slide.classList.remove("active");
});

contents.forEach((content) => {
    content.classList.remove("active");
});

botones[manual].classList.add("active");
slidess[manual].classList.add("active");
contents[manual].classList.add("active");
}

botones.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});