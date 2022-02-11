const slides = document.querySelectorAll('.carousel-item');
let slidePosition = 0;
function hideAllSlides(){
    for(const slide of slides){
        slide.classList.remove('carousel-item-visible') && slide.classList.add('carousel-item-hidden');
    }
}

/* nav div classes buttons */
const aboutBtn = document.querySelector(".aboutBtn");
const projectsBtn = document.querySelectorAll(".projectsBtn");
const contactBtn = document.querySelector(".contactBtn");
/* nav div classes buttons end here*/

aboutBtn.addEventListener('click', function(){
    hideAllSlides();
    slidePosition = 0;
    slides[slidePosition].classList.add('carousel-item-visible');
})
projectsBtn.forEach(el => {
    el.addEventListener('click', function(){
    hideAllSlides();
    slidePosition = 1;
    slides[slidePosition].classList.add('carousel-item-visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    })
})
contactBtn.addEventListener('click', function(){
    hideAllSlides();
    slidePosition = 2;
    slides[slidePosition].classList.add('carousel-item-visible');
})

