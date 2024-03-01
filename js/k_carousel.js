let kidIndex = 0;

function kidSlides(){
    const k_slides = document.querySelectorAll('.k_s .sl-im');
    if(window.innerWidth >= 992){
        if(kidIndex >= k_slides.length /4){
            kidIndex = 0;
        }
    }
    else if(window.innerWidth >= 576){
        if(kidIndex >= k_slides.length /2){
            kidIndex = 0;
        }
    }
    else{
        if(kidIndex >= k_slides.length){
            kidIndex = 0;
        }
    }
    const k_offset = kidIndex * -100;
    document.querySelector('.k_s').style.transform = `translateX(${k_offset}%)`;
}

// right arrow function
function rSlide(){
    kidIndex++;
    kidSlides();
}

// left arrow function
function lSlide(){
    const k_slides = document.querySelectorAll('.k_s .sl-im');
    if(kidIndex >0){
        kidIndex--;
        kidSlides();
    }
}

kidSlides();

window.addEventListener('resize', function() {
    kidSlides();
});
