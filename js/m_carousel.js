let menIndex = 0;

function menSlides(){
    const m_slides = document.querySelectorAll('.m_s .sl-im');
    if(window.innerWidth >= 992){
        if(menIndex >= m_slides.length /4){
            menIndex = 0;
        }
    }
    else if(window.innerWidth >= 576){
        if(menIndex >= m_slides.length /2){
            menIndex = 0;
        }
    }
    else{
        if(menIndex >= m_slides.length){
            menIndex = 0;
        }
    }
    const m_offset = menIndex * -100;
    document.querySelector('.m_s').style.transform = `translateX(${m_offset}%)`;
}

function rightSlide(){
    menIndex++;
    menSlides();
}

function leftSlide(){
    const m_slides = document.querySelectorAll('.m_s .sl-im');
    if(menIndex > 0){
        menIndex--;
        menSlides();
    }
}

menSlides();

window.addEventListener('resize', function() {
    menSlides();
});
