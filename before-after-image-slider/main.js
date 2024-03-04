const slider = document.getElementById("slider");
slider.addEventListener("input", function () {
    const frontImage = document.querySelector(".front-img");
    frontImage.style.clipPath = `polygon(0 0, ${this.value}% 0, ${this.value}% 100%, 0% 100%)`;
});
