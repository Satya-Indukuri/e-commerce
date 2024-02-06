let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slider img');
    if (window.innerWidth >= 992) {
        // Greater than or equal to md
        if (slideIndex >= slides.length / 4) {
            slideIndex = 0;
        }
    } else if (window.innerWidth >= 576) {
        // Between sm and md
        if (slideIndex >= slides.length / 2) {
            slideIndex = 0;
        }
    } else {
        // Less than sm
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
    }

    const offset = slideIndex * -100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slider img');
    if (slideIndex > 0) {
        slideIndex--;
        showSlides();
    }
}

showSlides();

window.addEventListener('resize', function() {
    showSlides(); // Adjust slide index on window resize
});
