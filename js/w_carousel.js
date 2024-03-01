let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.w_s .sl-im');
    if (window.innerWidth >= 992) {
        if (slideIndex >= slides.length / 4) {
            slideIndex = 0;
        }
    }
    else if (window.innerWidth >= 576) {
        if (slideIndex >= slides.length / 2) {
            slideIndex = 0;
        }
    }
    else {
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
    }
    const offset = slideIndex * -100;
    document.querySelector('.w_s').style.transform = `translateX(${offset}%)`;
}

// right arrow function
function nextSlide() {
    slideIndex++;
    showSlides();
}

// left arrow function
function prevSlide() {
    const slides = document.querySelectorAll('.w_s .sl-im');
    if (slideIndex > 0) {
        slideIndex--;
        showSlides();
    }
}

showSlides();

window.addEventListener('resize', function() {
    showSlides(); // Adjust slide index on window resize
});
