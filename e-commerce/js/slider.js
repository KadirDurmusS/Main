
//!Slider start
let sliderIndex = 1;
showSlides(sliderIndex);

/* Tekrarlı yapılarda kullanılır SetInterval */

setInterval(() => {
    showSlides(sliderIndex += 1)
}, 4000)


function plusSlide(n) {
    showSlides((sliderIndex += n))
}


function currentSlide(n) {
    showSlides((sliderIndex = n))
}

function showSlides(n) {

    const slides = document.getElementsByClassName("slider-item");
    const dots = document.getElementsByClassName("slider-dot");

    if (n > slides.length) {
        sliderIndex = 1;
    }

    if (n < 1) {
        sliderIndex = 3;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[sliderIndex - 1].style.display = "flex"

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    dots[sliderIndex - 1].className += " active"
}
//!Slider End